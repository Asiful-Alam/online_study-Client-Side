// // ChatSection.js
// import  { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5000'); // Replace with your backend URL

// const Chat = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     // Listen for incoming messages
//     socket.on('message', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       socket.disconnect(); // Clean up when component unmounts
//     };
//   }, []);

//   const sendMessage = () => {
//     if (message.trim() !== '') {
//       // Send message to the server
//       socket.emit('sendMessage', message);
//       setMessage('');
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="overflow-y-auto flex-grow">
//         {messages.map((msg, index) => (
//           <div key={index} className="p-2">
//             {msg}
//           </div>
//         ))}
//       </div>
//       <div className="p-4 flex items-center">
//         <input
//           type="text"
//           className="flex-grow border rounded p-2 mr-2"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//           onClick={sendMessage}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;




const Chat = () => {
    return (
        <div>
            
        </div>
    );
};

export default Chat;