import React, { useState } from 'react';
import Comment from './Comment';

const Topic = ({ topic }) => {
  const [comments, setComments] = useState(topic.comments);

  const addComment = (comment) => {
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(
      'topics',
      JSON.stringify(
        JSON.parse(localStorage.getItem('topics')).map((t) =>
          t.id === topic.id ? { ...t, comments: updatedComments } : t
        )
      )
    );
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-semibold">{topic.title}</h3>
      <div className="space-y-2 mt-2">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a comment"
        className="w-full mt-2 p-2 border border-gray-300 rounded"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addComment({ id: Date.now(), content: e.target.value });
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default Topic;
