// NoteList.js
import React, { useEffect, useState } from 'react';
import { AddNote } from './AddNote';
import './NoteList.css'; // Import the CSS file

export const NoteList = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "note1" },
    { id: 2, title: "note2" },
    { id: 3, title: "note3" }
  ]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data !== null && Array.isArray(data)) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const newNote = (title) => {
    setNotes([...notes, { id: notes.length + 1, title: title }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <>
      <ul className='note-list'>
        {notes.map((note) => (
          <li className='note-li' key={note.id}>
            <div className='note-content'>
              <span>{note.title}</span>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <AddNote newNote={newNote} />
    </>
  );
};
