// AddNote.js
import React, { useState } from 'react';
import './AddNote.css'; // Import the CSS file

export const AddNote = ({ newNote }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    newNote(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="Add Note" />
      </form>
    </div>
  );
};
