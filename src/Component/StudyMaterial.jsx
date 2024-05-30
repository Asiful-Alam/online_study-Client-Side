import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import Flashcard from './Flashcard';

const StudyMaterial = () => {
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [questions, setQuestions] = useState([]);

  const sampleQuestions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the formula for water?',
      options: ['H2O', 'CO2', 'NaCl', 'O2'],
      correctAnswer: 'H2O',
    },
    {
      id: 3,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      id: 4,
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      id: 5,
      question: 'What is the speed of light?',
      options: ['299,792,458 m/s', '150,000,000 m/s', '30,000 m/s', '300,000 km/s'],
      correctAnswer: '299,792,458 m/s',
    },
  ];

  useEffect(() => {
    setQuestions(sampleQuestions);
  }, []);

  const handleToggleMode = () => setIsQuizMode(!isQuizMode);

  return (
    <div className="container mx-auto  p-4">
      <div className="flex justify-center mb-4">
        <button onClick={handleToggleMode} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          {isQuizMode ? 'Show Flashcards' : 'Take Quiz'}
        </button>
      </div>
      {isQuizMode ? (
        <Quiz questions={questions} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((q) => (
            <Flashcard key={q.id} question={q.question} answer={q.correctAnswer} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudyMaterial;
