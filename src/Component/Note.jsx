import React from 'react';

const Note = ({ note, updateNote, deleteNote }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => updateNote(note)} className="mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
      <button onClick={() => deleteNote(note.id)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Delete</button>
    </div>
  );
};

export default Note;
