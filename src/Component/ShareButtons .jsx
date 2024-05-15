import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ShareButtons = () => {
  // Function to handle sharing content on Twitter
  const shareOnTwitter = () => {
    // Your Twitter sharing logic here
    console.log('Sharing on Twitter');
  };

  // Function to handle sharing content on Facebook
  const shareOnFacebook = () => {
    // Your Facebook sharing logic here
    console.log('Sharing on Facebook');
  };

  // Function to handle sharing content on LinkedIn
  const shareOnLinkedIn = () => {
    // Your LinkedIn sharing logic here
    console.log('Sharing on LinkedIn');
  };

  return (
    <div className="flex space-x-4">
      {/* Twitter Share Button */}
      <button onClick={shareOnTwitter} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
        <FaTwitter className="w-5 h-5" />
      </button>
      
      {/* Facebook Share Button */}
      <button onClick={shareOnFacebook} className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 focus:outline-none">
        <FaFacebook className="w-5 h-5" />
      </button>

      {/* LinkedIn Share Button */}
      <button onClick={shareOnLinkedIn} className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-1000 focus:outline-none">
        <FaLinkedin className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ShareButtons;
