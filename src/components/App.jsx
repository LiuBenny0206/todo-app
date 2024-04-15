import React, { useState, useEffect } from "react";
import InputPart from "./InputPart";
import Note from "./Note";
import NoteState from "./NoteState";
import '../output.css';

function App() {
  const [notes, setNotes] = useState([]); // notes 是存储所有笔记的数组
  const count = notes.length; // count 是存储所有笔记的数组的长度

  const addNote = (newNoteContent) => {
    const newNote = {
      id: Date.now(), // 用时间戳作为简单的唯一 ID
      content: newNoteContent,
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };



  const [isDarkMode, setIsDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  }

  return (
    <div>
      <InputPart 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        addNote={addNote} 
      />
      {notes.map((note) => (
        <Note
          key={note.id} // Use the id from the note object as the key
          id={note.id} // And also as the id for the delete functionality
          content={note.content}
          onCheck={deleteNote}
        />
      ))}
      <NoteState 
        count={count}
      />
    </div>
  );
}

export default App;
