import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

function Home({notes, setNotes}) {

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  

  return (
    <div>
      <h2>All Notes</h2>
      <NoteForm onAddNote={addNote} />

      <div>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Home;
