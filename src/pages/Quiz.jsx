import React, { useState } from "react";
import "./../App.css";

export default function Quiz() {
  const questions = [
    {
      question: "What kind of beauty do you prefer?",
      options: [
        { text: "Symmetry and structure", type: "Dravidian" },
        { text: "Spiritual depth", type: "Buddhist" },
        { text: "Artistic freedom", type: "Nagara" },
        { text: "Fusion and innovation", type: "Indo-Islamic" },
      ],
    },
    {
      question: "Which environment inspires you most?",
      options: [
        { text: "Stone temples surrounded by palm trees", type: "Dravidian" },
        { text: "Caves or serene mountains", type: "Buddhist" },
        { text: "Sculpture-filled open plazas", type: "Nagara" },
        { text: "Gardens and arches with symmetry", type: "Indo-Islamic" },
      ],
    },
    {
      question: "What describes your personality best?",
      options: [
        { text: "Strong and disciplined", type: "Dravidian" },
        { text: "Calm and wise", type: "Buddhist" },
        { text: "Creative and bold", type: "Nagara" },
        { text: "Elegant and balanced", type: "Indo-Islamic" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (type) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // compute result
      const counts = newAnswers.reduce((acc, t) => {
        acc[t] = (acc[t] || 0) + 1;
        return acc;
      }, {});
      const topType = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      );
      setResult(topType);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="quiz-page">
      <h1>🧭 Which Ancient Architecture Style Matches You?</h1>

      {!result ? (
        <div className="quiz-box">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((opt, i) => (
              <button
                key={i}
                className="quiz-option"
                onClick={() => handleAnswer(opt.type)}
              >
                {opt.text}
              </button>
            ))}
          </div>
          <p className="progress">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="quiz-result">
          <h2>You align with {result} Architecture 🏛️</h2>
          <p>
            Your personality reflects the essence of {result} design —
            timeless, meaningful, and connected to heritage. Explore more in the
            “Articles” section to learn how this style shaped Indian culture.
          </p>
          <button className="restart-btn" onClick={restartQuiz}>
            🔄 Try Again
          </button>
        </div>
      )}
    </div>
  );
}
