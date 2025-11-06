import React, { useState, useEffect } from "react";
import "./../App.css";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState(0);

  // 🏛️ Questions (15 total)
  const questions = [
    {
      question: "What kind of architecture fascinates you the most?",
      options: [
        { text: "Majestic temple towers with perfect symmetry", value: "Dravidian" },
        { text: "Graceful curves and sculpted spires", value: "Nagara" },
        { text: "Silent caves of meditation and peace", value: "Buddhist" },
        { text: "Grand palaces blending cultures and geometry", value: "Indo-Islamic" },
        { text: "Mathematical perfection and sacred symbolism", value: "Sacred_Geometry" },
      ],
    },
    {
      question: "Which of these places would you love to explore?",
      options: [
        { text: "Kailasa Temple at Ellora", value: "Kailasa" },
        { text: "Hoysaleswara Temple, Halebidu", value: "Hoysala" },
        { text: "The astronomical wonders of Hampi", value: "Astronomy" },
        { text: "Ancient ruins of Mohenjo-Daro", value: "Indus" },
        { text: "Royal forts of Rajasthan", value: "Rajput" },
      ],
    },
    {
      question: "Which quality describes your personality best?",
      options: [
        { text: "Disciplined and precise", value: "Dravidian" },
        { text: "Creative and expressive", value: "Nagara" },
        { text: "Peaceful and wise", value: "Buddhist" },
        { text: "Balanced and spiritual", value: "Sacred_Geometry" },
        { text: "Innovative yet traditional", value: "Modern_India" },
      ],
    },
    {
      question: "If you were an ancient builder, what would inspire you most?",
      options: [
        { text: "Harmony between heaven and earth", value: "Sacred_Geometry" },
        { text: "Strength of mountains and rock", value: "Kailasa" },
        { text: "Artistry in every inch of stone", value: "Hoysala" },
        { text: "Celestial alignment and stars", value: "Astronomy" },
        { text: "Peaceful sanctuaries of learning", value: "Buddhist" },
      ],
    },
    {
      question: "Which materials fascinate you the most?",
      options: [
        { text: "Granite or basalt", value: "Dravidian" },
        { text: "Marble and red sandstone", value: "Indo-Islamic" },
        { text: "Soapstone carvings", value: "Hoysala" },
        { text: "Wood and copper roofs", value: "Kerala" },
        { text: "Terracotta bricks", value: "Indus" },
      ],
    },
    {
      question: "How do you prefer your art?",
      options: [
        { text: "Highly detailed and symmetrical", value: "Hoysala" },
        { text: "Spiritual and minimal", value: "Buddhist" },
        { text: "Royal and grand", value: "Rajput" },
        { text: "Symbolic and sacred", value: "Sacred_Geometry" },
        { text: "Abstract yet logical", value: "Modern_India" },
      ],
    },
    {
      question: "Which architectural feature amazes you most?",
      options: [
        { text: "Massive gateways (gopurams)", value: "Dravidian" },
        { text: "Curved towers (shikharas)", value: "Nagara" },
        { text: "Hanging pillars & floating stones", value: "Hoysala" },
        { text: "Domes and arches", value: "Indo-Islamic" },
        { text: "Rock-cut caves", value: "Buddhist" },
      ],
    },
    {
      question: "What vibe do you seek in a sacred space?",
      options: [
        { text: "Serene forests and rivers", value: "Kerala" },
        { text: "Sunlit temples facing east", value: "Tamil" },
        { text: "Quiet meditation halls", value: "Buddhist" },
        { text: "Carved cliffs and mountains", value: "Kailasa" },
        { text: "Perfect geometric courtyards", value: "Sacred_Geometry" },
      ],
    },
    {
      question: "Which ancient empire do you admire most?",
      options: [
        { text: "Chola & Pallava dynasties", value: "Tamil" },
        { text: "Delhi Sultans & Mughals", value: "Mughal" },
        { text: "Vijayanagara Empire", value: "Hoysala" },
        { text: "Indus Valley Civilization", value: "Indus" },
        { text: "Kakatiya rulers", value: "Dravidian" },
      ],
    },
    {
      question: "If your life were a monument, what would it stand for?",
      options: [
        { text: "Art that lives forever", value: "Hoysala" },
        { text: "Harmony of science and faith", value: "Sacred_Geometry" },
        { text: "Courage and legacy", value: "Rajput" },
        { text: "Wisdom and enlightenment", value: "Buddhist" },
        { text: "Tradition meeting modernity", value: "Modern_India" },
      ],
    },
    {
      question: "Which era of history inspires you most?",
      options: [
        { text: "The Chola reign", value: "Tamil" },
        { text: "Mughal golden age", value: "Mughal" },
        { text: "Hoysala craftsmanship", value: "Hoysala" },
        { text: "Ancient Harappan period", value: "Indus" },
        { text: "Modern India’s rebirth", value: "Modern_India" },
      ],
    },
    {
      question: "Which color palette appeals to you most?",
      options: [
        { text: "Earthy browns and stone gray", value: "Dravidian" },
        { text: "Golden sandstone and red", value: "Rajput" },
        { text: "White marble and jade green", value: "Mughal" },
        { text: "Black granite & coral pink", value: "Hoysala" },
        { text: "Soft beige & terracotta", value: "Indus" },
      ],
    },
    {
      question: "If you were designing a temple, what’s most important?",
      options: [
        { text: "Precision and geometry", value: "Sacred_Geometry" },
        { text: "Spiritual calm", value: "Buddhist" },
        { text: "Scale and proportion", value: "Dravidian" },
        { text: "Beauty and detail", value: "Hoysala" },
        { text: "Cultural fusion", value: "Indo-Islamic" },
      ],
    },
    {
      question: "Which ancient concept do you value most?",
      options: [
        { text: "Vastu Shastra", value: "Sacred_Geometry" },
        { text: "Dharma and peace", value: "Buddhist" },
        { text: "Rajadharma (Leadership)", value: "Rajput" },
        { text: "Innovation through legacy", value: "Modern_India" },
        { text: "Symmetry and order", value: "Dravidian" },
      ],
    },
    {
      question: "Which modern monument inspires you?",
      options: [
        { text: "Lotus Temple", value: "Modern_India" },
        { text: "Akshardham Temple", value: "Dravidian" },
        { text: "India Gate", value: "Rajput" },
        { text: "Buddha Statue at Sarnath", value: "Buddhist" },
        { text: "Charminar", value: "Indo-Islamic" },
      ],
    },
  ];

  useEffect(() => {
    setProgress(((currentQuestion + 1) / questions.length) * 100);
  }, [currentQuestion]);

  const architectureDescriptions = {
    Dravidian: "🏛️ You align with **Dravidian Architecture** — bold, geometric, and timeless.",
    Nagara: "🪶 You resonate with **Nagara Architecture** — expressive and graceful.",
    Buddhist: "🕍 You embody **Buddhist Architecture** — serene and introspective.",
    Indus: "🌄 You mirror the **Indus Civilization** — practical and visionary.",
    "Indo-Islamic": "🕋 You represent **Indo-Islamic Architecture** — harmony of cultures.",
    Sacred_Geometry: "🕉️ You reflect **Sacred Geometry** — mathematically and spiritually aligned.",
    Kailasa: "🪔 You’re like the **Kailasa Temple** — divine precision in stone.",
    Hoysala: "🔱 You connect with **Hoysala Artistry** — detailed and elegant.",
    Astronomy: "🌌 You’re an **Astronomical Innovator** — aligned with the cosmos.",
    Rajput: "🏰 You channel **Rajput Grandeur** — brave and royal.",
    Kerala: "🌺 You align with **Kerala’s Temple Aesthetics** — simple, natural, and peaceful.",
    Tamil: "🌄 You carry the legacy of **Chola Heritage** — strong and artistic.",
    Mughal: "🌹 You reflect **Mughal Art** — elegant and refined.",
    Modern_India: "🏗️ You represent **Modern Indian Design** — creative yet rooted.",
  };

  const handleAnswer = (value) => {
    setSelected(value);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null);
      }, 500);
    } else {
      const result = newAnswers.sort(
        (a, b) =>
          newAnswers.filter((v) => v === a).length -
          newAnswers.filter((v) => v === b).length
      ).pop();
      setResult(result);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setProgress(0);
  };

  return (
    <div className="page quiz-page">
      <h1>🏛️ Heritage Match — Discover Your Architectural Spirit</h1>

      {!result ? (
        <>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="quiz-container">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${
                    selected === option.value ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(option.value)}
                  disabled={!!selected}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <p className="question-progress">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        </>
      ) : (
        <div className="quiz-result">
          <h2>Your Match: {result.replace("_", " ")}</h2>
          <p>{architectureDescriptions[result]}</p>
          <button className="retry-btn" onClick={restartQuiz}>
            🔁 Take Again
          </button>
        </div>
      )}
    </div>
  );
}
