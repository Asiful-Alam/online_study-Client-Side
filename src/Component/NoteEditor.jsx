import React, { useState } from 'react';

const NoteEditor = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    addNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4 mb-4 bg-white rounded shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">Save Note</button>
    </div>
  );
};

export default NoteEditor;
