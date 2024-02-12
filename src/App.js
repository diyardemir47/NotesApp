// Your main application file
import React from 'react';
import ReactDOM from 'react-dom';

// App.js
import './components/styles.css'; // Import the CSS file

import { NoteList } from './components/NoteList';
import { AddNote } from './components/AddNote';

const App = () => {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: 'center' }}>
        📝 Notes App
      </h1>
    <NoteList/>

    </div>
  );
};

export default App;
