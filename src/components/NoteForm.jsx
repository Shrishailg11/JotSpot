import { useState } from "react";

function NoteForm({ onAddNote }) {
  // Local state for the input value
  const [noteText, setNoteText] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!noteText.trim()) return; // Avoid empty notes

    
    onAddNote(noteText); // Call parent function
    setNoteText("");     // Clear input after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

const styles = {
  form: {
    marginBottom: "20px",
    display: "flex",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #555",
    background: "#2b2b2b",   // dark input box
    color: "#f1f1f1",        // light text inside input
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#646cff",  // bluish button (matches links)
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};


export default NoteForm;
