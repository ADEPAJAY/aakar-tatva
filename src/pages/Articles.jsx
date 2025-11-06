import React, { useState, useEffect, useCallback } from "react";
import dravidian from "../assets/dravidian.jpg";
import nagara from "../assets/nagara.jpg";
import buddhist from "../assets/buddhist.jpg";
import indus from "../assets/indus.jpg";
import indoislamic from "../assets/indoislamic.jpg";
import sacred from "../assets/sacred.jpg";
import kailasa from "../assets/kailasa.jpg";
import hoysaleswara from "../assets/hoysaleswara.jpg";
import astronomical from "../assets/astronomical.jpg";
import "./../App.css";

export default function Articles() {
  const [filter, setFilter] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null); // ⭐ to show expanded article view

  const articles = [
    {
      id: 1,
      category: "Dravidian",
      title: "The Timeless Majesty of Dravidian Architecture 🏛️",
      img: dravidian,
      text: `Dravidian architecture, which flourished in South India, stands as one of the most sophisticated and enduring legacies of ancient India. Its evolution can be traced back to the Pallava dynasty (4th–9th century CE) and reached its zenith under the Cholas (9th–13th century CE).

The style is characterized by pyramid-shaped towers called vimanas, elaborate pillared halls (mandapas), and towering gateway towers (gopurams). Temples such as the Brihadeeswarar Temple in Thanjavur and the Shore Temple in Mahabalipuram are prime examples of this style’s grandeur and precision.

Beyond their scale, these temples served as centers of learning, art, and culture. Intricate carvings depicting mythological tales and celestial beings reflect the craftsmen’s devotion and artistic mastery. Even today, Dravidian temples continue to inspire modern architects with their geometric balance, spatial harmony, and spiritual symbolism — a perfect blend of art and engineering.`,
    },
    {
      id: 2,
      category: "Nagara",
      title: "The Northern Splendor: Nagara Style of Temple Architecture 🪶",
      img: nagara,
      text: `In contrast to the southern Dravidian style, North India developed the Nagara school of temple architecture. It flourished between the 5th and 12th centuries CE and is recognized by its curvilinear tower (shikhara) that rises like a mountain peak above the sanctum.

Famous examples include the Sun Temple at Konark, the Khajuraho Group of Monuments, and the Kandariya Mahadeva Temple. The walls of these temples are covered with sculptures representing gods, goddesses, dancers, and celestial beings, turning stone into a living narrative.

Unlike their southern counterparts, Nagara temples were often built on raised platforms and lacked large enclosures. Each temple was an artistic statement — a cosmic mountain connecting heaven and earth. Their precision in symmetry and ornamentation highlights the exceptional craftsmanship and mathematical knowledge of ancient Indian builders.`,
    },
    {
      id: 3,
      category: "Buddhist",
      title: "Buddhist Architecture: From Rock-Cut Caves to Stupas 🕍",
      img: buddhist,
      text: `Buddhist architecture introduced an entirely new spiritual and structural dimension to ancient India. The earliest monuments — such as the stupas of Sanchi and Bharhut — symbolized peace, meditation, and enlightenment. The stupa, with its hemispherical dome, represented the Buddha’s presence and became a sacred object of worship.

Rock-cut architecture also thrived under Buddhist patronage. Caves at Ajanta, Ellora, and Karla were skillfully hewn from solid rock, housing monasteries (viharas) and prayer halls (chaityas). The Ajanta murals, rich in color and expression, depict scenes from the Jataka tales and the life of the Buddha, showcasing India’s mastery in both art and architecture.

Over time, Buddhist architectural ideas influenced structures across Asia, blending seamlessly with local traditions in Sri Lanka, Myanmar, and Japan — an enduring testimony to India’s spiritual and artistic outreach.`,
    },
    {
      id: 4,
      category: "Indus",
      title: "The Indus Valley Civilization: Urban Planning Ahead of Its Time 🌄",
      img: indus,
      text: `Long before grand temples and stupas were built, India’s earliest known civilization — the Indus Valley Civilization (2600–1900 BCE) — showcased an extraordinary command of urban design and engineering. Cities like Harappa and Mohenjo-Daro were meticulously planned with grid-like streets, standardized brick houses, and advanced drainage systems that remain unmatched for their time.

Public structures such as the Great Bath of Mohenjo-Daro indicate not only architectural innovation but also a deep concern for hygiene and community life. Granaries, workshops, and assembly halls reveal a well-organized society with strong civic administration.

Unlike later religious architecture, Indus buildings emphasized practicality and comfort rather than ornamentation. Yet, their rational layout and sustainable design continue to influence modern urban planning principles — proof that India’s architectural wisdom has ancient roots in functionality and foresight.`,
    },
    {
      id: 5,
      category: "Indo-Islamic",
      title: "The Fusion of Styles: Indo-Islamic Architecture in Early India 🕋",
      img: indoislamic,
      text: `The arrival of Islamic rulers in India from the 12th century onward gave rise to a remarkable fusion known as Indo-Islamic architecture. This style combined the geometric precision of Persian and Central Asian design with the ornamentation and symbolism of Indian artistry. The result was a unique architectural expression that would reshape India’s cultural landscape for centuries.

The Qutub Minar in Delhi, built under the Delhi Sultanate, is one of the earliest and finest examples of this synthesis. Its towering minaret and detailed calligraphy reflect Islamic aesthetics, while its stone carvings and motifs carry hints of Indian craftsmanship. Similarly, the Alai Darwaza and the Adhai Din Ka Jhonpra showcase the elegant blend of arches, domes, and intricate latticework (jali).

Later, the Mughal dynasty perfected this art of fusion, as seen in monuments like Humayun’s Tomb and the Taj Mahal. The use of red sandstone, marble inlay, symmetry, and garden layouts (the charbagh design) symbolized paradise on earth. Indo-Islamic architecture was more than a style — it was a dialogue between cultures, faiths, and ideas, giving India some of its most iconic monuments.`,
    },
    {
      id: 6,
      category: "Sacred Geometry",
      title: "Sacred Geometry and Symbolism in Ancient Indian Architecture 🕉️",
      img: sacred,
      text: `Ancient Indian architecture was not merely about aesthetics or grandeur — it was deeply rooted in symbolism, mathematics, and cosmic order. Every temple, palace, and monument was designed according to vastu shastra — the traditional science of architecture — which emphasized harmony between human dwellings and the universe.

Temples, in particular, were conceived as microcosms of the universe. The central shrine (garbhagriha) represented the womb of creation, while the shikhara symbolized the mythical Mount Meru, the axis of the cosmos. Every structure followed a strict geometrical plan — often based on a square grid — ensuring perfect symmetry and proportion.

This sacred geometry extended beyond temples to palaces and stepwells, such as the Rani ki Vav in Gujarat, where spatial depth and ornamentation mirrored spiritual progression. Materials were chosen not just for durability but also for their elemental association — stone for earth, wood for life, and water for purification.

Thus, ancient Indian architecture was a spiritual science, blending engineering, art, and philosophy. It taught that building a space was not only about creating shelter but also about aligning human existence with the rhythm of nature and the divine.`,
    },
    {
      id: 7,
      category: "Kailasa",
      title: "The Lost Engineering Genius of the Kailasa Temple, Ellora 🪔",
      img: kailasa,
      text: `The Kailasa Temple at Ellora Caves in Maharashtra remains one of the greatest enigmas of ancient Indian architecture. Carved entirely out of a single rock cliff, this 8th-century marvel dedicated to Lord Shiva was not built by adding stone blocks — it was excavated top-down from a monolithic basalt hill.

Archaeologists estimate that nearly 200,000 tons of rock were removed to create the structure, yet no trace of debris has ever been found nearby. The precision of alignment, the symmetry of the sculptures, and the enormous scale suggest planning far ahead of its time. Legends say it was built in a single night by divine intervention, while historians believe thousands of artisans may have worked for decades using simple chisels and hammers.

What’s most mysterious is the mathematical accuracy achieved without any modern tools. The layout aligns perfectly with astronomical directions, and the intricate carvings—depicting mythological scenes, celestial beings, and architectural details—remain undamaged after more than 1,200 years. The Kailasa Temple stands as a timeless reminder that ancient India possessed advanced engineering and architectural skills now largely lost to history.`,
    },
    {
      id: 8,
      category: "Hoysaleswara",
      title: "The Hoysaleswara Temple and Its Impossible Stone Precision 🔱",
      img: hoysaleswara,
      text: `At Halebidu in Karnataka stands the Hoysaleswara Temple — a 12th-century masterpiece that challenges modern craftsmanship. Constructed from soapstone, a material soft when quarried but hardens over time, the temple walls are covered with carvings so intricate that even a magnifying glass reveals no errors.

What’s truly astonishing is the level of micro-detail — jewelry strands, animal textures, and even fingernails are carved with millimeter accuracy. The temple’s outer wall hosts over 240 depictions of Hindu deities, mythological battles, and natural elements, all perfectly proportioned and symmetrically arranged.

Archaeologists still wonder how artisans achieved such fine detail without magnifying tools or modern machinery. The symmetry between opposite panels, and the seamless blending of art and geometry, point toward a sophisticated understanding of mathematics and design. Some scholars suggest the use of lost techniques involving geometric ratios and optical measurement methods, now forgotten over time.

The Hoysaleswara Temple isn’t just a monument—it’s a coded message from a civilization that combined spirituality, art, and science in ways we are still trying to decode.`,
    },
    {
      id: 9,
      category: "Astronomy",
      title: "Ancient Technology and Astronomical Knowledge in Indian Temples 🌌",
      img: astronomical,
      text: `Many Indian temples are not just places of worship—they are astronomical observatories encoded in stone. From the Sun Temple at Konark to the Virupaksha Temple in Hampi, ancient builders integrated celestial calculations and cosmic alignments that rival modern instruments.

The Konark Sun Temple, for instance, is a gigantic stone calendar. Its 24 intricately carved wheels represent the hours of the day, and shadows cast by the spokes accurately tell the time. The temple’s main entrance faces the point of sunrise on the equinox, a feat achievable only with precise astronomical understanding.

Similarly, at the Brihadeeswarar Temple in Thanjavur, the shadow of its massive tower never falls on the ground during noon—an architectural mystery achieved through exact measurements of the sun’s trajectory. Other temples, like those at Lepakshi and Hampi, show hanging pillars, anti-gravity stone balances, and acoustic design so advanced that they reflect an understanding of resonance and sound waves.

These examples reveal that ancient Indian architects were not only builders but also scientists, mathematicians, and astronomers. Their work hints at a sophisticated body of knowledge — part of which may have been lost over time, leaving behind only awe-inspiring clues etched in stone.`,
    },
  ];

  const filteredArticles =
    filter === "All" ? articles : articles.filter((a) => a.category === filter);

  // 🌈 Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ Fade in animation
  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(t);
  }, []);

  // 🪄 Reveal animation for cards
  const revealCards = useCallback(() => {
    const cards = document.querySelectorAll(".article-card");
    cards.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) el.classList.add("visible");
    });
  }, []);

  useEffect(() => {
    revealCards();
    window.addEventListener("scroll", revealCards);
    return () => window.removeEventListener("scroll", revealCards);
  }, [revealCards]);

  // 🧭 Reset scroll on filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const t = setTimeout(() => revealCards(), 200);
    return () => clearTimeout(t);
  }, [filter, revealCards]);

  return (
    <div className="page articles-page">
      {/* 🔵 Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* ✨ Header */}
      <div className={`articles-header ${fadeIn ? "fade-in" : ""}`}>
        <h1>📚 Architectural Heritage of India</h1>
        <p>
          Discover India’s grand styles of temple and cultural architecture — each with a story carved in stone.
        </p>
      </div>

      {/* 🧭 Filter Buttons */}
      {!activeArticle && (
        <div className="filter-buttons">
          {[
            "All",
            "Dravidian",
            "Nagara",
            "Buddhist",
            "Indus",
            "Indo-Islamic",
            "Sacred Geometry",
            "Kailasa",
            "Hoysaleswara",
            "Astronomy",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* 💠 Conditional Rendering */}
      {!activeArticle ? (
        <div className="article-grid">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="article-card"
              onClick={() => setActiveArticle(article)}
            >
              <div className="img-wrapper">
                <img src={article.img} alt={article.title} className="article-img" />
              </div>
              <h2>{article.title}</h2>
              <p>{article.text.substring(0, 140)}...</p>
              <button className="readmore-btn">Read More →</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="expanded-article">
          <img src={activeArticle.img} alt={activeArticle.title} className="expanded-img" />
          <h1>{activeArticle.title}</h1>
          <p className="expanded-text">{activeArticle.text}</p>
          <button className="back-btn" onClick={() => setActiveArticle(null)}>
            ← Back to Articles
          </button>
        </div>
      )}
    </div>
  );
}
