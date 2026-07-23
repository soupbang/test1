const ESTABLISHMENTS_DATA = [
  {
    id: "balwoo-gongyang",
    name: "Balwoo Gongyang (발우공양)",
    type: "Restaurant",
    city: "Seoul",
    area: "Insadong / Jongno",
    coords: [37.574888, 126.982991],
    photo: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Pescatarian"],
    tags: ["Mild Taste", "Fermented Food", "Temple Cuisine"],
    rating: 4.8,
    address: "5F, Templestay Information Center, 56 Ujungguk-ro, Jongno-gu, Seoul",
    phone: "+82-2-733-2081",
    signatureDish: "Seon-Sik (Zen Course) / Lotus Root Porridge & Wild Greens",
    naverQuery: "인사동 발우공양",
    menu: [
      {
        korean: "연잎밥",
        roman: "Yeonipbap",
        english: "Sticky rice steamed in lotus leaf with chestnuts and pine nuts",
        price: "15,000 KRW",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "우엉잡채",
        roman: "Ueong-japchae",
        english: "Stir-fried sweet potato glass noodles with shredded burdock root",
        price: "18,000 KRW",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "감자전",
        roman: "Gamjajeon",
        english: "Crispy pan-fried 100% grated potato pancake",
        price: "12,000 KRW",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Monastic Mindful Eating (Baru Gongyang)",
      philosophy: "Balwoo Gongyang is the traditional way Buddhist monastics eat, treating food not as a source of indulgence but as medicine to sustain the body for spiritual practice. It is completely vegan and strictly excludes the 'Oshinchae' (five pungent herbs: garlic, green onion, wild chives, garlic chives, leeks) which are believed to generate excessive heat and disturb spiritual tranquility. Every single ingredient is fully consumed, emphasizing absolute zero-waste and gratitude for nature.",
      scientificWisdom: "Features natural seasoning aged in clean mountain air. Soy sauce (Ganjang) and soybean paste (Doenjang) fermented for over 5 to 10 years are used as base seasonings, loading the food with gut-healthy probiotics and natural umami that enhances digestion without irritating the stomach.",
      experienceTip: "Savor the quiet, earthy flavors. Since it avoids chemical additives, each vegetable's natural sweetness and bitterness shine in complete balance."
    }
  },
  {
    id: "eid-halal",
    name: "EID Halal Korean Food (이이드 할랄)",
    type: "Restaurant",
    city: "Seoul",
    area: "Itaewon",
    coords: [37.532345, 126.996112],
    photo: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    dietary: ["Halal"],
    tags: ["Mild Taste", "Local Ingredients"],
    rating: 4.7,
    address: "67 Usadan-ro 10-gil, Yongsan-gu, Seoul",
    phone: "+82-70-8899-8210",
    signatureDish: "Halal Beef Bulgogi & Samgyetang (Ginseng Chicken Soup)",
    naverQuery: "이태원 이이드할랄",
    menu: [
      {
        korean: "소불고기 정식",
        roman: "So-bulgogi Jeongsik",
        english: "Sweet soy-marinated halal sliced beef with side dishes & rice",
        price: "13,000 KRW",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "삼계탕",
        roman: "Samgyetang",
        english: "Halal chicken stew stuffed with ginseng, jujube, and sticky rice",
        price: "16,000 KRW",
        image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "닭갈비 정식",
        roman: "Dak-galbi Jeongsik",
        english: "Halal stir-fried chicken in moderately spicy sweet soy glaze",
        price: "14,000 KRW",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Yaksik Dongwon (Medicine and Food have the Same Origin)",
      philosophy: "In Korea, food is seen as the primary source of vitality and health. This restaurant serves classic Korean soul foods using strictly certified Halal ingredients. The dish Samgyetang represents the wisdom of 'Iyeol-chiyeol' (combining heat with heat) where warm food, high in energy, is consumed during hot summer days to balance the body's internal temperature and replenish stamina.",
      scientificWisdom: "Ginseng, jujube, and garlic are simmered for hours, creating a rich broth loaded with saponins and antioxidants, which boost immunity, combat fatigue, and stimulate circulation.",
      experienceTip: "Wrap your Bulgogi beef in fresh lettuce leaves (Ssam). It's a traditional Korean way to combine warm meat with cooling greens, balancing the dish's overall energy."
    }
  },
  {
    id: "maji",
    name: "Maji (마지)",
    type: "Restaurant",
    city: "Seoul",
    area: "Seochon / Bukchon",
    coords: [37.5785, 126.9698],
    photo: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    tags: ["Mild Taste", "Fermented Food", "Temple Cuisine"],
    rating: 4.6,
    address: "19 Jahamun-ro 5-gil, Jongno-gu, Seoul",
    phone: "+82-2-736-5384",
    signatureDish: "Lotus Leaf Rice (Yeonipbap) & Seasonal Herb Banchan",
    naverQuery: "서촌 마지",
    menu: [
      {
        korean: "연닢밥 정식",
        roman: "Yeonipbap Jeongsik",
        english: "Sticky rice steamed in lotus leaf served with 7 seasonal wild herbs",
        price: "17,000 KRW",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "표고버섯 탕수",
        roman: "Pyogo-beoseot Tangsu",
        english: "Sweet and sour crispy deep-fried shiitake mushrooms with pineapples",
        price: "20,000 KRW",
        image: "https://images.unsplash.com/photo-1623428187969-5da2d87e0afb?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "채식 궁중 떡볶이",
        roman: "Chaesik Gungjung Tteokbokki",
        english: "Mild royal court soy sauce rice cakes with mushrooms and vegetables",
        price: "15,000 KRW",
        image: "https://images.unsplash.com/photo-1580958525028-1073e579893b?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Harmony with the Seasons",
      philosophy: "Lotus leaves are celebrated in Korea for their purifying properties. Maji serves 'Yeonipbap', where sticky rice, pine nuts, chestnuts, and gingko nuts are wrapped in a lotus leaf and steamed. The lotus leaf seals in the moisture and infuses the grains with an earthy, subtle aroma, embodying the harmony between trees, land, and water.",
      scientificWisdom: "Lotus leaves contain natural antiseptic substances (tannins and flavonoids) that preserve the food naturally and slow down spoilage. They are also rich in antioxidants, helping to cleanse the blood and reduce internal heat.",
      experienceTip: "Slowly unwrap the lotus leaf and breathe in the rising steam. Pair the warm, fragrant rice with the multi-year-aged fermented side dishes to feel an immediate digestive calm."
    }
  },
  {
    id: "osegyehyang",
    name: "Osegyehyang (오세계향)",
    type: "Restaurant",
    city: "Seoul",
    area: "Insadong / Jongno",
    coords: [37.57445, 126.9846],
    photo: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    tags: ["Mild Taste", "Fermented Food"],
    rating: 4.7,
    address: "14-5 Insadong 12-gil, Jongno-gu, Seoul",
    phone: "+82-2-735-7300",
    signatureDish: "Grilled Veggie Bulgogi & Steamed Dumplings",
    naverQuery: "인사동 오세계향",
    menu: [
      {
        korean: "채식 짜장면",
        roman: "Chaesik Jajangmyeon",
        english: "Wheat noodles in savory fermented black bean paste with soy protein chunks",
        price: "9,000 KRW",
        image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "불구이 쌈밥",
        roman: "Bulgui Ssambap",
        english: "Charcoal-flavored plant-based BBQ with fresh crisp lettuce wraps",
        price: "15,000 KRW",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "채식 만두",
        roman: "Chaesik Mandu",
        english: "Steamed dumplings stuffed with tofu, glass noodles, and garlic chives",
        price: "7,000 KRW",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Cheon-Ji-In (Heaven, Earth, and Humanity in Harmony)",
      philosophy: "Osegyehyang translates to 'five worlds of fragrance'. It reimagines comforting, nostalgic Korean dishes that are typically meat-heavy, like Jajangmyeon and Spicy Stews, into purely plant-based delights. This aligns with the ancient philosophy that humanity should live in harmony with the environment without disrupting the lives of other creatures.",
      scientificWisdom: "The plant-based meats are made from soy and wheat proteins and are seasoned using traditional sesame oil and natural kelp broth. Sesame oil provides essential monounsaturated fats and acts as a natural carrier, helping the body absorb fat-soluble vitamins from the surrounding vegetables.",
      experienceTip: "Try the Stone Pot Bibimbap. The sizzle of the stone pot creates a crispy rice layer at the bottom ('nurungji'), which has a nutty flavor and is traditionally eaten at the end of the meal to soothe the stomach."
    }
  },
  {
    id: "jangdokdae",
    name: "Jang Dok Dae (장독대)",
    type: "Restaurant",
    city: "Seoul",
    area: "Hongdae / Mapo",
    coords: [37.5562, 126.9229],
    photo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Pescatarian"],
    tags: ["Fermented Food", "Zero-Waste"],
    rating: 4.5,
    address: "45 Wausan-ro, Mapo-gu, Seoul",
    phone: "+82-2-333-9090",
    signatureDish: "3-Year Aged Kimchi Stew & Fermented Soy Pancake",
    naverQuery: "서울 마포구 장독대 와우산로",
    menu: [
      {
        korean: "묵은지 김치찌개",
        roman: "Mugeonji Kimchi-jjigae",
        english: "Tangy stew cooked with three-year fermented kimchi and soft tofu",
        price: "10,000 KRW",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "비지전",
        roman: "Bijijeon",
        english: "Savory pancake made of high-fiber leftover ground soybean pulp",
        price: "9,000 KRW",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "두부조림",
        roman: "Dubu-jorim",
        english: "Pan-seared tofu slices simmered in moderate garlic soy reduction",
        price: "11,000 KRW",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Onggi: The Breathing Earth",
      philosophy: "Named after the outdoor deck where traditional Korean breathing earthenware pots (*Onggi*) are stored. This kitchen revolves around slow, living food. The owner practices zero-waste cooking, utilizing every part of the soybean and vegetable—turning the soybean pulp (*biji*) left from making tofu into delicious, savory side pancakes.",
      scientificWisdom: "Onggi clay pots contain tiny microscopic pores that block water molecules but allow oxygen and air to circulate. This creates the perfect microclimate for lactic acid bacteria (*Lactobacillus*) to thrive, creating a robust probiotic-rich environment that aids gut health and acts as a natural preservative.",
      experienceTip: "The fermented kimchi here has a sharp, fizzy tang. This is natural carbonation produced during fermentation under Onggi, offering a refreshing cleanse for the palate."
    }
  },
  {
    id: "halal-kitchen",
    name: "Halal Kitchen Korea (할랄키친)",
    type: "Restaurant",
    city: "Seoul",
    area: "Bukchon Hanok Village",
    coords: [37.5812, 126.9831],
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    dietary: ["Halal"],
    tags: ["Mild Taste", "Local Ingredients"],
    rating: 4.8,
    address: "86-guk, Yulgok-ro 3-gil, Jongno-gu, Seoul",
    phone: "+82-2-730-4649",
    signatureDish: "Halal Korean BBQ Beef Ribs (Galbi-jjim)",
    naverQuery: "북촌 할랄키친",
    menu: [
      {
        korean: "갈비찜 정식",
        roman: "Galbi-jjim Jeongsik",
        english: "Halal beef short ribs slow-braised with dates, carrots, and sweet soy",
        price: "25,000 KRW",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "닭도리탕 정식",
        roman: "Dakdoritang Jeongsik",
        english: "Mildly spicy braised halal chicken chunks with potatoes and onions",
        price: "18,000 KRW",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Hanok Slow Living",
      philosophy: "Located inside a 100-year-old Hanok, this restaurant bridges Halal certification with traditional Korean royalty dining. The beef is slow-braised in soy sauce, pear puree, and honey. This reflects the Hanok's structural philosophy—slow, deliberate living that accommodates the passing seasons without force.",
      scientificWisdom: "The marinade uses fresh Korean pears, which contain natural enzymes (protease) that break down the protein fibers in beef, making the meat incredibly tender and easy to digest naturally, without any chemical softeners.",
      experienceTip: "Look out at the beautiful courtyard tiled roof while eating. The slow, deep flavor of the Galbi matches the quiet atmosphere of the historic Bukchon neighborhood."
    }
  },
  {
    id: "sanchon",
    name: "Sanchon (산촌)",
    type: "Restaurant",
    city: "Seoul",
    area: "Insadong / Jongno",
    coords: [37.5739, 126.9852],
    photo: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan"],
    tags: ["Mild Taste", "Fermented Food", "Temple Cuisine"],
    rating: 4.9,
    address: "30-13 Gwanhun-dong, Jongno-gu, Seoul",
    phone: "+82-2-735-0312",
    signatureDish: "Wild Mountain Herb Feast (Namul)",
    naverQuery: "인사동 산촌",
    menu: [
      {
        korean: "산채 비빔밥 정식",
        roman: "Sanchae Bibimbap Jeongsik",
        english: "Mixed rice bowl topped with 12 blanched wild mountain root herbs",
        price: "16,000 KRW",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "도토리묵 무침",
        roman: "Dotorimuk Muchim",
        english: "Earthy acorn starch jelly cubes tossed with green onions and wild sesame oil",
        price: "15,000 KRW",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "감자 옹심이",
        roman: "Gamja Ongsimi",
        english: "Chewy grated potato dough balls simmered in transparent kelp broth",
        price: "13,000 KRW",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Forest to Table Spirit",
      philosophy: "Founded by a former Buddhist monk, Sanchon harvests wild plants, roots, and mushrooms directly from deep Korean mountain valleys. The cuisine is based on the idea that deep mountain herbs absorb the energy of the earth and sky, transferring that life force directly to those who eat them.",
      scientificWisdom: "Wild greens (Namul) are rich in phytonutrients, trace minerals, and dietary fibers. They are quickly blanched and lightly tossed in wild sesame (perilla) oil. Perilla oil is packed with Omega-3 fatty acids, which lower cholesterol and reduce inflammation in the body.",
      experienceTip: "The meal consists of over 20 small dishes. Try tasting each herb individually first to appreciate the unique bitter, nutty, and sweet flavors that are often covered up by heavy spices."
    }
  },
  {
    id: "zero-grill",
    name: "Zero Grill (제로 그릴)",
    type: "Restaurant",
    city: "Seoul",
    area: "Itaewon",
    coords: [37.5332, 126.9928],
    photo: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    dietary: ["Halal", "Vegan"],
    tags: ["Zero-Waste", "Local Ingredients"],
    rating: 4.6,
    address: "12 Itaewon-ro 27-gil, Yongsan-gu, Seoul",
    phone: "+82-2-790-1234",
    signatureDish: "Eco-Friendly Spicy-Mild Halal Chicken Bowl",
    naverQuery: "이태원 제로그릴",
    menu: [
      {
        korean: "친환경 치킨 보울",
        roman: "Chinhwangyeong Chicken Bowl",
        english: "Flame-grilled halal chicken over locally sourced grains and vegetables",
        price: "12,500 KRW",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "아보카도 비건 보울",
        roman: "Avocado Vegan Bowl",
        english: "Rice bowl with sliced organic avocado, grilled tofu, and citrus dressing",
        price: "11,500 KRW",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Chinkyeong-Gyeong (Green & Clean Dining)",
      philosophy: "Zero Grill operates with a zero-waste policy, composting 100% of organic waste and sourcing 'ugly' but fresh local organic produce from local Gyeonggi-do farms. They offer a selection of Halal and Vegan bowls, served in reusable bronze-alloy tableware, merging ecological care with Korean hospitality.",
      scientificWisdom: "Traditional Korean bronze plates (Bangjja Yugi) are made of a precise alloy of copper and tin. This unique metal composition has natural sterilizing properties, eliminating harmful bacteria (like E. coli) on contact and maintaining food temperature for a long time.",
      experienceTip: "Bring your own container for takeout to receive a discount. The dynamic menu changes weekly based on which seasonal vegetables are harvested locally, minimizing carbon footprints."
    }
  },
  {
    id: "the-bread-blue",
    name: "The Bread Blue (더브레드블루)",
    type: "Cafe",
    city: "Seoul",
    area: "Sinchon / Hongdae",
    coords: [37.5574, 126.9348],
    photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    tags: ["Mild Taste", "Local Ingredients"],
    rating: 4.5,
    address: "3 Sinchon-ro 12-gil, Mapo-gu, Seoul",
    phone: "+82-70-4405-0723",
    signatureDish: "Vegan Potato Bread & Gluten-Free Rice Cream Cake",
    naverQuery: "더브레드블루 신촌본점",
    menu: [
      {
        korean: "감자빵",
        roman: "Gamjabang",
        english: "Gluten-free sweet potato-filled bread resembling a real potato",
        price: "4,000 KRW",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "현미 단팥빵",
        roman: "Hyeonmi Danpatbang",
        english: "Organic brown rice flour pastry stuffed with non-refined sweet red beans",
        price: "3,500 KRW",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "비건 두유 식빵",
        roman: "Vegan Duyu Sikbang",
        english: "Light, fluffy loaf of sliced bread made with local soy milk",
        price: "5,000 KRW",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Grain and Seed Sincerity",
      philosophy: "Traditional Korean desserts rely on local grains like rice, barley, and red bean rather than processed white sugar and butter. This vegan bakery applies that wisdom to modern bread, replacing milk and eggs with local soy milk and rice flour, creating a light, digestible pastry that honors the soil.",
      scientificWisdom: "By utilizing domestic sprouted brown rice flour and natural yeast fermentation, the bread undergoes a slow breakdown of carbohydrates, which prevents rapid spikes in blood sugar and accommodates gluten-sensitive digestive systems.",
      experienceTip: "The potato bread looks exactly like a real potato! It is soft, slightly sweet, and savory, flavored with local Gangwon-do potatoes."
    }
  },
  {
    id: "plant-cafe",
    name: "Plant Cafe Seoul (플랜트)",
    type: "Cafe",
    city: "Seoul",
    area: "Itaewon",
    coords: [37.5348, 126.9930],
    photo: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    tags: ["Zero-Waste", "Local Ingredients"],
    rating: 4.7,
    address: "2F, 117 Bogwang-ro, Yongsan-gu, Seoul",
    phone: "+82-2-749-1981",
    signatureDish: "Tempeh Wrap & Gluten-Free Organic Pumpkin Cake",
    naverQuery: "플랜트 이태원점",
    menu: [
      {
        korean: "템페 랩",
        roman: "Tempeh Wrap",
        english: "Nutty locally-fermented tempeh and greens wrapped in flatbread",
        price: "11,000 KRW",
        image: "https://images.unsplash.com/photo-1623428187969-5da2d87e0afb?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "단호박 케이크",
        roman: "Danhobak Cake",
        english: "Gluten-free sweet pumpkin sheet cake topped with vegan vanilla frosting",
        price: "7,500 KRW",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "비건 칠리 보울",
        roman: "Vegan Chili Bowl",
        english: "Hearty chili made of local black beans, corn, and organic tofu crumbles",
        price: "13,000 KRW",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Eco-Conscious Modern Greenery",
      philosophy: "Plant Cafe was one of the first 100% plant-based cafes in Seoul, serving healthy, visually stunning food to a multicultural crowd. It embodies the modern ecological shift of young Koreans merging zero-waste principles with dynamic green eating, illustrating how local crop rotation yields rich nutritional values.",
      scientificWisdom: "The cafe processes ingredients using minimal heat, retaining vitamin concentrations (like Folate and Vitamin C) which are often degraded in high-heat boiling or frying. The inclusion of fermented Tempeh provides essential plant-based vitamin B12.",
      experienceTip: "Try the green smoothies alongside their gluten-free desserts. The cafe is highly populated with greenery, creating an indoor oxygen-rich sanctuary."
    }
  },
  {
    id: "dajeon-tea",
    name: "Dajeon Traditional Tea House (다전)",
    type: "Cafe",
    city: "Busan",
    area: "Seomyeon",
    coords: [35.1558, 129.0595],
    photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan"],
    tags: ["Mild Taste", "Fermented Food", "Temple Cuisine"],
    rating: 4.8,
    address: "5F, 61 Shincheon-daero 62beon-gil, Busanjin-gu, Busan",
    phone: "+82-51-808-6388",
    signatureDish: "Lotus Leaf Dumplings & Organic Wild Persimmon Tea",
    naverQuery: "부산 서면 다전",
    menu: [
      {
        korean: "연잎밥",
        roman: "Yeonipbap",
        english: "Steamed sweet sticky rice wrapped in fresh local lotus leaves",
        price: "12,000 KRW",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "야생 감잎차",
        roman: "Yasaeng Gam-ipcha",
        english: "Organic infusion made of dried wild forest persimmon tree leaves",
        price: "6,000 KRW",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "채식 들깨수제비",
        roman: "Chaesik Deulkkae-sujebi",
        english: "Hand-pulled wheat dough flakes in creamy, warm ground perilla seed broth",
        price: "10,000 KRW",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Cha-Do: The Meditative Tea Way",
      philosophy: "Located in Busan's energetic Seomyeon, this peaceful 5th-floor vegan tea house serves traditional teas and temple-style foods. It practices 'Cha-do'—the way of tea, teaching visitors to slow down, clear their minds, and respect the natural environment that nurtured the leaves.",
      scientificWisdom: "Traditional wild teas are dried and pan-fired multiple times to eliminate moisture while preserving active polyphenols (catechins) which stimulate cognitive focus, lower blood pressure, and assist hepatic cleansing.",
      experienceTip: "The tea is served in ceramic tea sets. The owner will teach you the traditional brewing process, guiding you to focus on the sound of water pouring and the earthy leaf scents."
    }
  },
  {
    id: "nayuta-cafe",
    name: "Nayuta Cafe (나유타 카페)",
    type: "Cafe",
    city: "Busan",
    area: "Jangjeon-dong / Geumjeong",
    coords: [35.2285, 129.0892],
    photo: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan"],
    tags: ["Zero-Waste", "Local Ingredients"],
    rating: 4.6,
    address: "21 Geumgang-ro 380beon-gil, Geumjeong-gu, Busan",
    phone: "+82-10-8588-4322",
    signatureDish: "Daily Changing Harvest Plate & Local Barley Rice",
    naverQuery: "부산 나유타카페",
    menu: [
      {
        korean: "오늘의 일식 채식 한판",
        roman: "Oneul-ui Ilsik Chaesik Hanpan",
        english: "Daily changing macrobiotic style plate featuring regional vegetables and grains",
        price: "13,000 KRW",
        image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "유기농 현미 주먹밥",
        roman: "Yuginong Hyeonmi Jumeokbap",
        english: "Rice balls made of organic brown rice, seasoned with seaweed flakes",
        price: "5,000 KRW",
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Community-Supported Earth Kitchen",
      philosophy: "Nayuta Cafe operates under an eco-community system, where local chefs take turns cooking healthy, seasonal dishes based strictly on organic local grains and vegetables. The menu is determined daily by what local farms deliver, demonstrating absolute respect for seasonal cycles and reducing agricultural waste.",
      scientificWisdom: "Using daily-harvested local greens avoids cold-chain storage and long-distance transport, preserving fragile nutrients like enzymes and Vitamin C which diminish rapidly after harvest.",
      experienceTip: "Since the menu changes daily, check their blackboard for the day's special. It is always a unique combination of grain rice, stews, and hand-pickled banchan."
    }
  },
  {
    id: "vegan-haru",
    name: "Vegan Cafe Haru (비건카페 하루)",
    type: "Cafe",
    city: "Jeonju",
    area: "Deokjin-gu / Hanok Village Outer",
    coords: [35.8180, 127.1432],
    photo: "https://images.unsplash.com/photo-1533782650405-ab7cd750dc26?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Gluten-Free"],
    tags: ["Mild Taste", "Local Ingredients"],
    rating: 4.7,
    address: "18 Gyeonhwon-ro, Deokjin-gu, Jeonju",
    phone: "+82-63-241-1110",
    signatureDish: "Dairy-Free Jeonju Black Bean Bread & Organic Rice Scone",
    naverQuery: "전주 비건카페하루",
    menu: [
      {
        korean: "서리태 두유 라떼",
        roman: "Seoritae Duyu Latte",
        english: "Creamy beverage made with local black soybeans and organic soy milk",
        price: "6,000 KRW",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "현미 단팥 스콘",
        roman: "Hyeonmi Danpat Scone",
        english: "Gluten-free brown rice flour scone studded with unsweetened red bean",
        price: "4,000 KRW",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "쑥 식빵",
        roman: "Ssuk Sikbang",
        english: "Fragrant vegan bakery bread infused with freshly picked local mugwort",
        price: "5,500 KRW",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Gok-Sik: Reverence for Local Grains",
      philosophy: "Located in Jeonju, the historic culinary capital of Korea, this vegan cafe bridges traditional baking with modern health needs. It replaces imported flour and butter with organic rice, red beans, and native black soy beans harvested directly in the Gyeonggi and Jeolla plains.",
      scientificWisdom: "By utilizing local red bean (*팥*) and black soy bean (*서리태*), the pastries deliver slow-digesting complex carbohydrates, plant proteins, and anthocyanins that protect cellular health and keep glycemic index levels balanced.",
      experienceTip: "Try their black bean latte made with house-made local soy milk. The taste is remarkably rich, earthy, and naturally sweet without refined sugar."
    }
  },
  {
    id: "gokgan",
    name: "Gokgan Traditional Hanjeongsik (곡간)",
    type: "Restaurant",
    city: "Jeonju",
    area: "Hanok Village Area",
    coords: [35.8118, 127.1585],
    photo: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Pescatarian"],
    tags: ["Mild Taste", "Fermented Food", "Local Ingredients"],
    rating: 4.8,
    address: "15 Hanji-gil, Wansan-gu, Jeonju",
    phone: "+82-63-288-8833",
    signatureDish: "Jeonju Wild Namul Table & Multi-Year Deonjang Soup",
    naverQuery: "전주 곡간",
    menu: [
      {
        korean: "전주 산채 정식",
        roman: "Jeonju Sanchae Jeongsik",
        english: "Grand table feast featuring 15 varieties of steamed wild mountain herbs",
        price: "24,000 KRW",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "시골 된장찌개",
        roman: "Sigol Doenjang-jjigae",
        english: "Stew made of soybean paste fermented on-site for 5 years with wild leek",
        price: "9,000 KRW",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&q=80"
      },
      {
        korean: "메밀전",
        roman: "Memiljeon",
        english: "Very thin, savory pancake made of locally grown organic buckwheat flour",
        price: "8,000 KRW",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=150&q=80"
      }
    ],
    wisdom: {
      concept: "Mother Earth's Storehouse (Gokgan)",
      philosophy: "Jeonju is famous for its agricultural riches. 'Gokgan' refers to a traditional family grain warehouse. This establishment serves a traditional table consisting of over 20 side dishes featuring wild, hand-foraged mountain herbs, natural roots, and soy pastes aged inside clay pots on-site.",
      scientificWisdom: "The local mountain herbs (such as bracken, balloon flower root, and aster) are rich in saponins and fiber. They are paired with natural enzyme syrups (fermented plum and pine needle syrup) to act as biological digestive catalysts, promoting full gastrointestinal balance.",
      experienceTip: "Take your time. A true Jeonju feast is a slow dining ritual meant to be eaten piece by piece, savoring the clean and distinct notes of each individual leaf and root."
    }
  }
];

// Neighborhood hotspots for the GPS Simulator (Extended for multiple cities)
const GPS_HOTSPOTS = [
  {
    id: "insadong",
    name: "Insadong Temple St. (Seoul)",
    city: "Seoul",
    coords: [37.5740, 126.9840],
    description: "Centering traditional tea houses, art galleries, and clean Temple food restaurants."
  },
  {
    id: "itaewon",
    name: "Itaewon Halal Hub (Seoul)",
    city: "Seoul",
    coords: [37.5345, 126.9935],
    description: "Home of the Central Mosque and multicultural Halal/Vegan culinary hotspots."
  },
  {
    id: "hongdae",
    name: "Hongdae Vegan Alley (Seoul)",
    city: "Seoul",
    coords: [37.5570, 126.9245],
    description: "Hip youth district hosting eco-conscious bakeries, vegan cafés, and zero-waste diners."
  },
  {
    id: "bukchon",
    name: "Bukchon Hanok Hills (Seoul)",
    city: "Seoul",
    coords: [37.5826, 126.9830],
    description: "Scenic traditional Korean village featuring slow-cooked, organic, and historical dining."
  },
  {
    id: "busan",
    name: "Seomyeon Vegan Hub (Busan)",
    city: "Busan",
    coords: [35.1550, 129.0590],
    description: "Coastal metropolis center with peaceful vegan traditional tea houses and eco cafes."
  },
  {
    id: "jeonju",
    name: "Hanok Village (Jeonju)",
    city: "Jeonju",
    coords: [35.8146, 127.1526],
    description: "Historical culinary capital of Korea, famous for traditional slow food, namul, and local grains."
  }
];
