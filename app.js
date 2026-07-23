// Global state variable
let state = {
  userPosition: [37.5740, 126.9840], // Default: Insadong Center
  activeHotspotId: 'insadong',
  selectedDietary: [],
  selectedPreferences: [],
  selectedEstablishmentId: null,
  activeTab: 'wisdom' // 'wisdom' or 'route'
};

// Global Leaflet map and map elements
let map;
let establishmentMarkers = [];
let userMarker = null;
let routePolyline = null;

// Register Service Worker for PWA / offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered successfully:', reg.scope))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

// Initialize when DOM loads
window.addEventListener('DOMContentLoaded', () => {
  initMap();
  initHotspots();
  initFilters();
  renderEstablishments();
  
  // Close panel button
  document.getElementById('close-panel-btn').addEventListener('click', () => {
    closeOverlay();
  });

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Mobile Bottom Navigation Tabs
  document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.getAttribute('data-tab');
      switchMobileTab(targetTab);
    });
  });

  // Initialize view state
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    switchMobileTab('map');
  }
});

// 1. Initialize Map using CartoDB Voyager light tiles
function initMap() {
  map = L.map('map', {
    zoomControl: false,
    attributionControl: false
  }).setView(state.userPosition, 15);

  // CartoDB Voyager light tiles for a clean, green/white friendly look
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);

  // Position custom zoom controls in bottom-right
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // Add custom Attribution
  L.control.attribution({
    position: 'bottomleft',
    prefix: false
  }).addAttribution('&copy; <a href="https://carto.com/">CARTO</a> | KO-REAT Wisdom Map')
    .addTo(map);

  // Draw user position marker
  updateUserMarkerOnMap();
}

// 2. Initialize GPS Hotspot click listeners
function initHotspots() {
  const container = document.getElementById('gps-hotspots');
  container.innerHTML = '';

  GPS_HOTSPOTS.forEach(spot => {
    const chip = document.createElement('div');
    chip.className = `gps-chip ${spot.id === state.activeHotspotId ? 'active' : ''}`;
    chip.id = `hotspot-${spot.id}`;
    chip.innerText = spot.name;
    chip.title = spot.description;

    chip.addEventListener('click', () => {
      teleportGPS(spot.id, spot.coords);
    });

    container.appendChild(chip);
  });
}

// Teleport simulated GPS position
function teleportGPS(hotspotId, coords) {
  state.activeHotspotId = hotspotId;
  state.userPosition = coords;

  // Update active chip classes
  document.querySelectorAll('.gps-chip').forEach(c => c.classList.remove('active'));
  const activeChip = document.getElementById(`hotspot-${hotspotId}`);
  if (activeChip) activeChip.classList.add('active');

  // Update map user marker
  updateUserMarkerOnMap();
  map.panTo(coords);

  // Recalculate distance and re-sort / re-render
  renderEstablishments();

  // Re-calculate route if there is an active selected establishment
  if (state.selectedEstablishmentId) {
    drawSimulatedRoute();
  }
}

// Update user location marker (pulsing green dot)
function updateUserMarkerOnMap() {
  if (userMarker) {
    map.removeLayer(userMarker);
  }

  const userIcon = L.divIcon({
    className: 'custom-user-marker',
    html: '<div class="user-marker-pulse"></div><div class="user-marker-dot"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  userMarker = L.marker(state.userPosition, { icon: userIcon }).addTo(map);
}

// 3. Initialize Filters (Dietary & Taste Preferences)
function initFilters() {
  // Dietary buttons
  document.querySelectorAll('.filter-btn.diet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const diet = e.currentTarget.getAttribute('data-value');
      toggleFilter('selectedDietary', diet, e.currentTarget);
    });
  });

  // Preference tags
  document.querySelectorAll('.filter-btn.tag').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tag = e.currentTarget.getAttribute('data-value');
      toggleFilter('selectedPreferences', tag, e.currentTarget);
    });
  });
}

function toggleFilter(stateArrayKey, value, element) {
  const index = state[stateArrayKey].indexOf(value);
  if (index > -1) {
    state[stateArrayKey].splice(index, 1);
    element.classList.remove('active');
  } else {
    state[stateArrayKey].push(value);
    element.classList.add('active');
  }

  // Close overlay if visible to ensure correct information state
  closeOverlay();

  // Re-render establishment list and map markers
  renderEstablishments();
}

// Calculate distance (in meters) between two coordinates using Haversine
function getDistance(coord1, coord2) {
  const [lat1, lon1] = coord1;
  const [lat2, lon2] = coord2;
  const R = 6371e3; // metres
  const phi1 = lat1 * Math.PI/180;
  const phi2 = lat2 * Math.PI/180;
  const deltaPhi = (lat2-lat1) * Math.PI/180;
  const deltaLambda = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c; // in metres
}

// 4. Render Establishments (Sidebar + Markers)
function renderEstablishments() {
  const listContainer = document.getElementById('restaurant-list-container');
  listContainer.innerHTML = '';

  // Clear existing markers from map
  establishmentMarkers.forEach(m => map.removeLayer(m));
  establishmentMarkers = [];

  // Filter establishments
  const filtered = ESTABLISHMENTS_DATA.filter(res => {
    const matchesDietary = state.selectedDietary.every(d => res.dietary.includes(d));
    const matchesPrefs = state.selectedPreferences.every(p => res.tags.includes(p));
    return matchesDietary && matchesPrefs;
  });

  // Calculate distance for all and sort by distance ascending
  filtered.forEach(res => {
    res.distance = getDistance(state.userPosition, res.coords);
  });
  filtered.sort((a, b) => a.distance - b.distance);

  // If no establishments match
  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🥦</div>
        <h3>No matches found</h3>
        <p>Try clearing some filters or changing your simulated location to find more matching options.</p>
      </div>
    `;
    return;
  }

  // Populate list & add markers
  filtered.forEach(res => {
    // A. Card element in sidebar
    const card = document.createElement('div');
    card.className = `restaurant-card ${res.id === state.selectedEstablishmentId ? 'active' : ''}`;
    card.id = `card-${res.id}`;

    // Calculate nice printable distance
    const distText = res.distance > 1000 
      ? `${(res.distance / 1000).toFixed(1)} km` 
      : `${Math.round(res.distance)} m`;

    const typeBadge = `<span class="card-tag" style="background:rgba(0,0,0,0.04); color:#2e7d32; border:1px solid rgba(46,125,50,0.15); margin-right:4px;">${res.type}</span>`;

    card.innerHTML = `
      <div class="card-top">
        <h3 class="card-title">${res.name}</h3>
        <span class="card-rating">★ ${res.rating.toFixed(1)}</span>
      </div>
      <div class="card-area">
        <span>📍 ${res.area} (${res.city})</span> • <span>${distText} away</span>
      </div>
      <div class="card-tags">
        ${typeBadge}
        ${res.dietary.map(d => `<span class="card-tag diet">${d}</span>`).join('')}
        ${res.tags.map(t => `<span class="card-tag preference">${t}</span>`).join('')}
      </div>
      <div class="card-signature-dish">
        <strong>Signature:</strong> ${res.signatureDish}
      </div>
    `;

    card.addEventListener('click', () => {
      selectEstablishment(res.id);
      // Auto switch to map on mobile when place is clicked to show location immediately
      if (window.innerWidth <= 768) {
        switchMobileTab('map');
      }
    });

    listContainer.appendChild(card);

    // B. Leaflet Marker (Green pin)
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-pulse"></div>
        <div class="marker-pin"></div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });

    const marker = L.marker(res.coords, { icon: customIcon }).addTo(map);
    
    marker.bindPopup(`
      <div style="font-family: 'Outfit', sans-serif;">
        <h3 style="color:#2e7d32; font-family:'Playfair Display', serif; font-size:16px; font-weight:600; margin-bottom:4px;">${res.name}</h3>
        <p style="margin:0; font-size:12px; color:#555;">
          <strong>${res.signatureDish}</strong> (${res.type})<br>
          📍 ${res.area} (${distText})
        </p>
      </div>
    `);

    marker.on('click', () => {
      selectEstablishment(res.id);
    });

    establishmentMarkers.push(marker);
  });
}

// 5. Select an establishment and display details
function selectEstablishment(id) {
  state.selectedEstablishmentId = id;
  
  // Highlight card in sidebar
  document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.add('active');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  const est = ESTABLISHMENTS_DATA.find(r => r.id === id);
  if (!est) return;

  // Center map on establishment
  map.setView(est.coords, 16);

  // Populate Overlay panels
  document.getElementById('overlay-img').src = est.photo;
  document.getElementById('overlay-restaurant-name').innerText = est.name;
  
  const tagsContainer = document.getElementById('overlay-tags');
  tagsContainer.innerHTML = `
    <span class="card-tag" style="background:rgba(46,125,50,0.1); color:#1e4620; border:1px solid rgba(46,125,50,0.2);">${est.type}</span>
    ${est.dietary.map(d => `<span class="card-tag diet">${d}</span>`).join('')}
    ${est.tags.map(t => `<span class="card-tag preference">${t}</span>`).join('')}
  `;

  // Draw walking route map path & fill route guide instructions
  drawSimulatedRoute();

  // Generate dynamic AI English storytelling based on chosen user tags
  generateWisdomStory(est);

  // Populate the Menu items list (Korean, Romanised, and English details)
  renderMenu(est);

  // Show the slide-up overlay panel
  const panel = document.getElementById('details-panel');
  panel.classList.add('active');

  // Default to the Wisdom Story tab
  switchTab('wisdom');
}

// Close the Overlay Panel
function closeOverlay() {
  state.selectedEstablishmentId = null;
  document.getElementById('details-panel').classList.remove('active');
  document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
  
  if (routePolyline) {
    map.removeLayer(routePolyline);
    routePolyline = null;
  }
}

// Switch tabs inside detail overlay
function switchTab(tabId) {
  state.activeTab = tabId;

  // Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');

  // Content panes
  document.querySelectorAll('.tab-content').forEach(pane => {
    pane.classList.remove('active');
  });
  document.getElementById(`${tabId}-tab-content`).classList.add('active');
}

// Switch view tabs on mobile layout
function switchMobileTab(tabId) {
  document.querySelectorAll('.bottom-nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.bottom-nav-btn[data-tab="${tabId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const container = document.querySelector('.app-container');
  container.classList.remove('view-map', 'view-list', 'view-filters');

  if (tabId === 'map') {
    container.classList.add('view-map');
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 200);
  } else if (tabId === 'list') {
    container.classList.add('view-list');
  } else if (tabId === 'filters') {
    container.classList.add('view-filters');
  }
}

// 6. Generate Dynamic AI English Storytelling
function generateWisdomStory(est) {
  const content = document.getElementById('wisdom-tab-content');
  content.innerHTML = '';

  let customIntroText = "";
  if (state.selectedPreferences.includes("Zero-Waste")) {
    customIntroText = `<div class="story-text-italic">♻️ As a supporter of <strong>Zero-Waste</strong>, you will love how this establishment honors the environment. It integrates Korean traditions that respect every particle of the earth.</div>`;
  } else if (state.selectedPreferences.includes("Mild Taste")) {
    customIntroText = `<div class="story-text-italic">🌱 Looking for a <strong>Mild & soothing taste</strong>? This kitchen avoids hot capsicums and heavy spices to prioritize deep natural vegetable extracts that comfort the body.</div>`;
  } else if (state.selectedDietary.includes("Vegan")) {
    customIntroText = `<div class="story-text-italic">🥦 For your <strong>Vegan lifestyle</strong>, this temple-inspired wisdom completely replaces animal ingredients with mountain herbs, naturally creating full health harmony.</div>`;
  } else if (state.selectedDietary.includes("Halal")) {
    customIntroText = `<div class="story-text-italic">🕌 Tailored to your <strong>Halal requirements</strong>, this menu serves authentic Korean preparations using certified meats cooked in traditional copperware.</div>`;
  }

  content.innerHTML = `
    <div class="wisdom-card">
      <div class="ai-badge">✨ AI Storyteller Engine</div>
      
      <div class="wisdom-concept-badge">
        <span class="badge-text">${est.wisdom.concept}</span>
      </div>
      
      ${customIntroText}

      <div class="story-section">
        <h4 class="story-subtitle">📖 The Cultural Philosophy</h4>
        <p class="story-text">${est.wisdom.philosophy}</p>
      </div>

      <div class="story-section">
        <h4 class="story-subtitle">🔬 The Science & Health Wisdom</h4>
        <p class="story-text">${est.wisdom.scientificWisdom}</p>
      </div>

      <div class="story-section">
        <h4 class="story-subtitle">💡 Local Experience Tip</h4>
        <p class="story-text">${est.wisdom.experienceTip}</p>
      </div>
    </div>
  `;
}

// 7. Route planner simulation with street turning points (Green path theme)
function drawSimulatedRoute() {
  if (routePolyline) {
    map.removeLayer(routePolyline);
  }

  const est = ESTABLISHMENTS_DATA.find(r => r.id === state.selectedEstablishmentId);
  if (!est) return;

  const start = state.userPosition;
  const end = est.coords;

  const routePoints = generateGridRoute(start, end);

  // Draw the route line on the map (glowing deep green theme)
  routePolyline = L.polyline(routePoints, {
    color: '#2e7d32',
    weight: 5,
    opacity: 0.85,
    className: 'route-path-glowing'
  }).addTo(map);

  map.fitBounds(routePolyline.getBounds(), { padding: [40, 40] });

  generateWalkingInstructions(start, end, est);
}

// Simple street-grid routing generator
function generateGridRoute(p1, p2) {
  const [lat1, lon1] = p1;
  const [lat2, lon2] = p2;

  const latOffset = (lat2 - lat1) * 0.45;
  const ip1 = [lat1 + latOffset, lon1];
  const ip2 = [lat1 + latOffset, lon2];

  return [p1, ip1, ip2, p2];
}

// Generate instruction texts for the client
function generateWalkingInstructions(start, end, est) {
  const instructionsContainer = document.getElementById('route-steps-container');
  instructionsContainer.innerHTML = '';

  const totalDist = getDistance(start, end);
  const timeMin = Math.ceil(totalDist / 80);

  // Update route summary stats
  document.getElementById('route-total-dist').innerText = totalDist > 1000 
    ? `${(totalDist / 1000).toFixed(1)} km` 
    : `${Math.round(totalDist)} m`;
  document.getElementById('route-total-time').innerText = `${timeMin} mins`;

  const steps = getSimulatedSteps(state.activeHotspotId, est.name, Math.round(totalDist));

  steps.forEach((step, idx) => {
    const stepEl = document.createElement('div');
    stepEl.className = `step-item ${idx === 0 ? 'active' : ''}`;
    stepEl.innerHTML = `
      <div class="step-number">${idx + 1}</div>
      <div class="step-detail">
        <p class="step-desc">${step.desc}</p>
        <span class="step-dist">${step.dist}</span>
      </div>
    `;
    instructionsContainer.appendChild(stepEl);
  });

  // Naver Maps integration using naverQuery
  const searchQuery = est.naverQuery || est.name;
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(searchQuery)}`;
  
  // Add Navigation Buttons
  const btnRow = document.createElement('div');
  btnRow.style.display = 'grid';
  btnRow.style.gridTemplateColumns = '1fr 1fr';
  btnRow.style.gap = '10px';
  btnRow.style.marginTop = '16px';

  btnRow.innerHTML = `
    <button class="nav-action-btn" style="box-shadow:none; background:rgba(0,0,0,0.04); color:#333; border:1px solid rgba(0,0,0,0.08);" onclick="alert('Simulation: Real-time turn-by-turn guidance mode activated on your phone!')">
      Start Sim Guide
    </button>
    <a href="${naverMapUrl}" target="_blank" class="nav-action-btn" style="text-decoration:none; display:flex; align-items:center; justify-content:center; gap:6px; background:#03C75A; color: #fff; box-shadow: 0 4px 12px rgba(3, 199, 90, 0.2);">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill: currentColor;">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" />
      </svg>
      Open Naver Map 🗺️
    </a>
  `;
  instructionsContainer.appendChild(btnRow);
}

function getSimulatedSteps(hotspotId, destName, totalMeters) {
  const m1 = Math.round(totalMeters * 0.3);
  const m2 = Math.round(totalMeters * 0.5);
  const m3 = Math.round(totalMeters * 0.2);

  switch (hotspotId) {
    case 'insadong':
      return [
        { desc: "Start walking north from Insadong traditional main cultural street.", dist: `${m1} m` },
        { desc: "Turn left at the stone sculpture shop into the narrow historical alley.", dist: `${m2} m` },
        { desc: `Walk past the traditional tea house. You will arrive at ${destName} on your right.`, dist: `${m3} m` }
      ];
    case 'itaewon':
      return [
        { desc: "Head down Usadan-ro towards the Central Mosque gate.", dist: `${m1} m` },
        { desc: "Turn right onto the hilly alleyway populated with halal markets.", dist: `${m2} m` },
        { desc: `${destName} is located on the second floor, next to the Turkish cafe.`, dist: `${m3} m` }
      ];
    case 'hongdae':
      return [
        { desc: "Walk towards Hongik University main walking street past the art murals.", dist: `${m1} m` },
        { desc: "Turn right into the quiet residential back-alley with eco cafés.", dist: `${m2} m` },
        { desc: `You will see the green storefront of ${destName}.`, dist: `${m3} m` }
      ];
    case 'bukchon':
      return [
        { desc: "Descend from the Bukchon Hanok overlook village path.", dist: `${m1} m` },
        { desc: "Turn left at the traditional tile roof wall intersection.", dist: `${m2} m` },
        { desc: `Walk 50m. ${destName} will be directly ahead in the restored Hanok courtyard.`, dist: `${m3} m` }
      ];
    case 'busan':
      return [
        { desc: "Start from Seomyeon subway station Exit 2, passing the lively local commercial blocks.", dist: `${m1} m` },
        { desc: "Turn right into the calmer back-alley lined with local custom tailor shops.", dist: `${m2} m` },
        { desc: `Ascend the staircase or walk 50m. You will find the cozy entrance of ${destName}.`, dist: `${m3} m` }
      ];
    case 'jeonju':
      return [
        { desc: "Head south along the central street of Jeonju Hanok Village past the Gyeonggijeon Shrine.", dist: `${m1} m` },
        { desc: "Turn left past the traditional craft workshops and clay-walled courtyards.", dist: `${m2} m` },
        { desc: `Walk straight. ${destName} will be located inside the traditional wood gate.`, dist: `${m3} m` }
      ];
    default:
      return [
        { desc: "Start walking towards the main road.", dist: `${m1} m` },
        { desc: "Follow the pedestrian walkway signs.", dist: `${m2} m` },
        { desc: `Arrive at ${destName}. Enjoy your tailored meal!`, dist: `${m3} m` }
      ];
  }
}

// 8. Render the Menu items list (Korean, Romanised, and English details)
function renderMenu(est) {
  const container = document.getElementById('menu-items-container');
  container.innerHTML = '';

  if (!est.menu || est.menu.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📖</div>
        <h3>No menu items listed</h3>
        <p>Contact the establishment directly to check their current daily offerings.</p>
      </div>
    `;
    return;
  }

  est.menu.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'menu-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.english}" class="menu-img">
      <div class="menu-left">
        <span class="menu-korean">${item.korean}</span>
        <span class="menu-roman">${item.roman}</span>
        <p class="menu-english">${item.english}</p>
      </div>
      <span class="menu-price">${item.price}</span>
    `;
    container.appendChild(itemEl);
  });
}
