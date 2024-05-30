import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="p-2 bg-gray-100 rounded">
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
