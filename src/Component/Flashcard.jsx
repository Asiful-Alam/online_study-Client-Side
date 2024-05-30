import { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = () => setIsAnswerVisible(!isAnswerVisible);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer" onClick={toggleAnswerVisibility}>
      <h3 className="text-lg font-semibold">{question}</h3>
      {isAnswerVisible && <p className="mt-2 text-sm">{answer}</p>}
    </div>
  );
};

export default Flashcard;
