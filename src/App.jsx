import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import NoteDetails from "./pages/NoteDetails";




function App() {
   const [notes , setNotes] = useState([]);

   const deleteNote = (id) =>{
    setNotes(notes.filter(note => note.id !== id));
  }

  const updateNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };
  return (
    <>
      <nav>
        <h1>Notes App</h1>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home notes={notes} setNotes={setNotes}  />} />
        <Route path="/notes/:id" element={<NoteDetails notes={notes}
                                                       onDelete={deleteNote}
                                                       onUpdate={updateNote}
                                                       />}
                                                        />

      </Routes>
    </>
  );
}

export default App
