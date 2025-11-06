import React, { useState } from "react";
import indmap from "../assets/indmap.jpg";
import "./../App.css";

export default function Map() {
  const [selectedState, setSelectedState] = useState("");

  const monuments = {
    Telangana: [
      "🛕 Ramappa Temple (Warangal) – UNESCO World Heritage site built in 1213 CE by the Kakatiyas, famed for floating bricks and intricate carvings.",
      "🏯 Thousand Pillar Temple (Hanamkonda) – A masterpiece of Kakatiya architecture dedicated to Shiva, Vishnu, and Surya.",
      "🏰 Warangal Fort – 13th-century fort with massive stone gateways (Kakatiya Toranas).",
      "🏔️ Bhongir Fort (Yadadri Bhuvanagiri) – Built on a monolithic rock in the 10th century by the Western Chalukyas.",
      "🌸 Alampur Jogulamba Temple – One of the 18 Shakti Peethas, built during the Badami Chalukyan era."
    ],
    "Tamil Nadu": [
      "🌄 Brihadeeswarar Temple (Thanjavur) – A UNESCO site built by Raja Raja Chola I, known for its massive vimana tower.",
      "🏯 Meenakshi Amman Temple (Madurai) – A Dravidian architectural wonder with 14 towering gopurams.",
      "🌊 Shore Temple (Mahabalipuram) – 7th-century Pallava rock-cut structure on the Bay of Bengal coast.",
      "🎶 Airavatesvara Temple (Darasuram) – Known for intricate stone carvings depicting music and dance.",
      "🏛️ Gangaikonda Cholapuram – The imperial city of the Cholas, mirroring Thanjavur’s grandeur."
    ],
    Karnataka: [
      "🏯 Hampi (Vijayanagara) – The ruins of the Vijayanagara Empire, a UNESCO World Heritage site.",
      "🪶 Belur and Halebidu Temples – Hoysala-era temples with detailed stone sculptures.",
      "🧱 Pattadakal – A group of Chalukyan temples blending Dravidian and Nagara styles.",
      "🕍 Badami Cave Temples – Rock-cut caves carved between the 6th–8th centuries.",
      "🏛️ Aihole – Known as the ‘Cradle of Indian Architecture,’ with over 100 ancient temples."
    ],
    "Andhra Pradesh": [
      "🌅 Lepakshi Temple (Anantapur) – Famous for the hanging pillar and mural paintings.",
      "🕉️ Srisailam Mallikarjuna Temple – One of the 12 Jyotirlingas.",
      "🪶 Amaravati Stupa – A major Buddhist site dating back to the 2nd century BCE.",
      "🏛️ Undavalli Caves (Vijayawada) – Rock-cut caves from the Gupta period.",
      "🕍 Simhachalam Temple (Visakhapatnam) – Chalukya-era temple dedicated to Varaha Narasimha."
    ],
    Kerala: [
      "🌿 Padmanabhaswamy Temple (Thiruvananthapuram) – Famous for its secret vaults and intricate Dravidian design.",
      "🏯 Vadakkunnathan Temple (Thrissur) – Ancient Shiva temple believed to be built by Parasurama.",
      "🏞️ Thirunelli Temple (Wayanad) – Over 1,000 years old, surrounded by hills and forests.",
      "🪔 Ettumanoor Mahadeva Temple (Kottayam) – Renowned for murals and copper-roofed sanctum.",
      "🌸 Koodalmanikyam Temple (Irinjalakuda) – The only temple dedicated to Bharata, brother of Lord Rama."
    ],
    Odisha: [
      "☀️ Konark Sun Temple – 13th-century chariot-shaped marvel, a UNESCO site.",
      "🛕 Lingaraj Temple (Bhubaneswar) – One of the finest examples of Kalinga architecture.",
      "🏯 Jagannath Temple (Puri) – A major Char Dham pilgrimage site.",
      "🌺 Mukteshwar Temple – Known as the ‘Gem of Odisha Architecture.’",
      "🏛️ Rajarani Temple – Famous for erotic carvings and elegant spires."
    ],
    Rajasthan: [
      "🏛️ Dilwara Temples (Mount Abu) – Exquisite Jain temples carved from white marble.",
      "🏰 Chittorgarh Fort – Houses the ancient Meera Temple and Vijay Stambh.",
      "🕉️ Eklingji Temple (Udaipur) – Dedicated to Lord Shiva, with a silver-faced lingam.",
      "🪶 Ranakpur Jain Temple – 1,444 unique marble pillars, no two alike.",
      "🌸 Brahma Temple (Pushkar) – The only temple in India dedicated to Lord Brahma."
    ],
    "Madhya Pradesh": [
      "🕍 Khajuraho Temples – UNESCO site known for erotic sculptures and intricate carvings.",
      "🪔 Sanchi Stupa – Ancient Buddhist monument built by Emperor Ashoka.",
      "🏛️ Udayagiri Caves – Gupta-period rock-cut sanctuaries.",
      "🏯 Orchha Temples – Blend of Mughal and Rajput architecture.",
      "🕉️ Bhojeshwar Temple (Bhojpur) – Massive unfinished Shiva temple by Raja Bhoja."
    ],
    Maharashtra: [
      "🏛️ Ellora Caves (Aurangabad) – Home to Kailasa Temple, carved from a single rock.",
      "🎨 Ajanta Caves – Buddhist caves known for fresco paintings.",
      "🪔 Elephanta Caves (Mumbai) – Rock-cut sculptures of Lord Shiva.",
      "🏯 Grishneshwar Temple – One of the 12 Jyotirlingas.",
      "🌄 Pandharpur Vitthal Temple – Major pilgrimage site of Lord Vitthal."
    ],
    "Uttar Pradesh": [
      "🕉️ Kashi Vishwanath Temple (Varanasi) – Ancient temple dedicated to Lord Shiva.",
      "🕊️ Sarnath – The site of Buddha’s first sermon.",
      "🏰 Ayodhya Ram Janmabhoomi – Birthplace of Lord Rama, now rebuilt grandly.",
      "🌺 Kushinagar – Where Lord Buddha attained Mahaparinirvana.",
      "🏛️ Deogarh Temple (Lalitpur) – Gupta-era Dashavatara temple with classic stone carvings."
    ]
  };

  const handleStateChange = (e) => setSelectedState(e.target.value);

  return (
    <div className="page map-page">
      <h1>🗺️ Explore Ancient Indian Heritage</h1>
      <p>Select a state below to explore its timeless architectural marvels.</p>

      <img src={indmap} alt="Map of India" className="map-image" />

      <select className="state-dropdown" onChange={handleStateChange}>
        <option value="">-- Select a State --</option>
        {Object.keys(monuments).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <div className="monuments-list">
          <h2>🏛️ Ancient Monuments in {selectedState}</h2>
          <ul>
            {monuments[selectedState].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
