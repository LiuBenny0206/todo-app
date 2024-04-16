import React, { useState, useEffect } from "react";
import InputPart from "./InputPart";
import Note from "./Note";
import NoteState from "./NoteState";
import '../output.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [state, setState] = useState('all');
  
  const count = (notes.filter(note => !note.complete).length);

  const addNote = (newNoteContent) => {
    const newNote = {
      id: Date.now(),
      content: newNoteContent,
      complete: false
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const toggleCompletion = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
         ...note,
          complete:!note.complete
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  const getStateNotes = () => {
    switch (state) {
      case 'all':
        return notes;
      case 'active':
        return notes.filter((note) =>!note.complete);
      case 'completed':
        return notes.filter((note) => note.complete);
      default:
        return notes;
    }
  }




  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const deleteNotesCompleted = () => {
    setNotes(notes.filter(note =>!note.complete));
  }



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
       {getStateNotes().map((note) => (
          <Note
            key={note.id}
            id={note.id}
            count={count}
            complete={note.complete}
            content={note.content}
            onCheck={deleteNote}
            toggleCompletion={toggleCompletion}
          />
      ))}
      <NoteState 
        count={count}
        setState={setState}
        deleteNotesCompleted={deleteNotesCompleted}
      />
    </div>
  );
}

export default App;
