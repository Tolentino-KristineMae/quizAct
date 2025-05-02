import React, { useState } from "react";
import questions from "./data/questions";
import "./App.css";
import { FaArrowRight } from "react-icons/fa";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (choice) => {
    setSelected(choice);
  };

  const nextQuestion = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h1>React Quiz App</h1>

      {showResult ? (
        <div className="result">
          <h2>Quiz Completed</h2>
          <p>Correct Answers: {score}</p>
          <p>Score: {(score / questions.length) * 100}%</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-card">
          <p className="progress">
            Question {current + 1} of {questions.length}
          </p>
          <h2>{questions[current].question}</h2>
          <ul>
            {questions[current].choices.map((choice, index) => (
              <li
                key={index}
                onClick={() => handleAnswer(choice)}
                className={`${selected === choice ? "selected" : ""} ${
                  selected ? "disabled" : ""
                }`}
              >
                {choice}
              </li>
            ))}
          </ul>
          {selected && (
            <button onClick={nextQuestion}>
              Next <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
