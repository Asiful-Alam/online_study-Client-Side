import { Link } from "react-router-dom";

const ChatCard = () => {
  return (
    <div>
      <div className="mt-8 text-center">
        <h1 className="text-red-500 text-2xl font-bold">Post Your Thoughts</h1>
        <p className="font-light text-gray-500 mb-8 mt-4">You can post here and discuss with each other.In this you can post, comment,like,dislike.</p>
      </div>
      <Link
        to="/posting"
        className="block w-full max-w-md mx-auto mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 "
      >
        <div className="bg-purple-300 p-6">
          <h2 className="text-xl font-semibold mb-2">
            Join the Discussion Forum
          </h2>
          <p className="text-gray-700">
            Ask questions, share insights, and interact with instructors and
            fellow students in our vibrant community.
          </p>
        </div>
        <div className="bg-blue-500 py-3 px-6 text-center">
          <Link
            to="/posting"
            className="text-white font-semibold hover:underline"
          >
            Join Chat Now
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ChatCard;
