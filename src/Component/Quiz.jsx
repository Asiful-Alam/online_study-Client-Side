import { useState } from 'react';

const Quiz = ({ questions = [] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswerChange = (optionIndex, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(newScore);
    console.log('Submitted quiz:', userAnswers);
    console.log('Score:', newScore);
  };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion];
    if (!currentQ) return null;

    return (
      <div key={currentQ.id} className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{currentQ.question}</h3>
        <ul>
          {currentQ.options.map((option, index) => (
            <li key={index} className="mb-2">
              <input
                type="radio"
                id={`option-${index}`}
                name={`answer-${currentQ.id}`}
                value={option}
                checked={userAnswers[currentQuestion] === option}
                onChange={() => handleAnswerChange(index, option)}
                className="mr-2"
              />
              <label htmlFor={`option-${index}`} className="text-sm">{option}</label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {score === null ? (
        <>
          {renderQuestion()}
          <div className="flex justify-end space-x-4 mt-4">
            {currentQuestion < questions.length - 1 && (
              <button onClick={handleNextQuestion} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Next Question
              </button>
            )}
            {currentQuestion === questions.length - 1 && (
              <button onClick={handleSubmitQuiz} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Submit Quiz
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold">Your Score: {score} / {questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
