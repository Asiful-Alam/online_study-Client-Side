import { useState } from 'react';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState('');
  const [comments, setComments] = useState({});
  const [reactions, setReactions] = useState({});

  // Function to handle submitting a new post
  const handleSubmitPost = () => {
    if (newPostText.trim() !== '') {
      const newPost = {
        id: posts.length + 1,
        text: newPostText,
        author: 'Anonymous',
        date: new Date().toLocaleString()
      };
      setPosts([...posts, newPost]);
      setNewPostText('');
      setComments({ ...comments, [newPost.id]: [] });
      setReactions({ ...reactions, [newPost.id]: { likes: 0, dislikes: 0 } });
    }
  };

  // Function to handle reacting to a post
  const handleReact = (postId, reactionType) => {
    setReactions(prevReactions => ({
      ...prevReactions,
      [postId]: {
        ...prevReactions[postId],
        [reactionType]: prevReactions[postId][reactionType] + 1
      }
    }));
  };

  // Function to handle submitting a new comment
  const handleSubmitComment = (postId, commentText) => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: comments[postId].length + 1,
        text: commentText,
        author: 'Anonymous', // You can implement user authentication to get the actual author
        date: new Date().toLocaleString()
      };
      setComments(prevComments => ({ ...prevComments, [postId]: [...prevComments[postId], newComment] }));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* New Post Form */}
      <div className="mb-4">
        <textarea
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
          placeholder="Write your post here..."
          className="w-full p-2 border rounded-md resize-none"
        ></textarea>
        <button onClick={handleSubmitPost} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Post</button>
      </div>

      {/* Display Posts */}
      <div>
        {posts.map(post => (
          <div key={post.id} className="border p-4 mb-4 rounded-md">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{post.author}</p>
              <p className="text-gray-500">{post.date}</p>
            </div>
            <p>{post.text}</p>
            <div className="flex justify-between mt-2">
              {/* React Buttons */}
              <div className="flex space-x-2">
                <button onClick={() => handleReact(post.id, 'likes')} className="text-green-500 focus:outline-none">
                  👍 {reactions[post.id]?.likes}
                </button>
                <button onClick={() => handleReact(post.id, 'dislikes')} className="text-red-500 focus:outline-none">
                  👎 {reactions[post.id]?.dislikes}
                </button>
              </div>
              {/* Comment Form */}
              <div>
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-56 p-2 border rounded-md mr-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmitComment(post.id, e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
              </div>
            </div>
            {/* Display Comments */}
            <div className="mt-2">
              {comments[post.id]?.map(comment => (
                <div key={comment.id} className="flex justify-between">
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-gray-500">{comment.date}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
