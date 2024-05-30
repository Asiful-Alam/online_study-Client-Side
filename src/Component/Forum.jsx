import React, { useState, useEffect } from 'react';
import Topic from './Topic';

const Forum = () => {
  const [topics, setTopics] = useState(() => {
    const savedTopics = localStorage.getItem('topics');
    return savedTopics ? JSON.parse(savedTopics) : [];
  });

  useEffect(() => {
    localStorage.setItem('topics', JSON.stringify(topics));
  }, [topics]);

  const addTopic = (topic) => {
    setTopics([...topics, topic]);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Community Forum</h2>
      <button onClick={() => addTopic({ id: Date.now(), title: 'New Topic', comments: [] })} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 mb-4">
        Add Topic
      </button>
      <div className="space-y-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Forum;
