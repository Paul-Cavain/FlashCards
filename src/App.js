import { useState } from "react";
import Cards from "./Cards";

function App() {
  const [selectedId, SetSelectedId] = useState(null);
  const questions = [
    {
      id: 1,
      question: "What language is React based on?",
      answer: "Javascript",
    },
    {
      id: 2,
      question: "What are the bulding block of React app?",
      answer: "Component",
    },
    {
      id: 3,
      question:
        "What is the name of the syntax we use to describe UI in React?",
      answer: "JSX",
    },
    {
      id: 4,
      question: "How to pass data from parent to child component in React?",
      answer: "Props",
    },
    {
      id: 5,
      question: "How to give component memory?",
      answer: "UseState hook",
    },
    {
      id: 6,
      question:
        "What do we call an input element that is completely synchronised with state in React?",
      answer: "Controlled element",
    },
  ];

  const handleClick = (id) => {
    SetSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="">
      <Cards
        questions={questions}
        selectedId={selectedId}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
