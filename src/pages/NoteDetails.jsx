import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


function NoteDetails({ notes, onDelete, onUpdate }) {
  const { id } = useParams();  // get note id from URL
  const navigate = useNavigate();  // hook to navigate programmatically

  const note = notes.find((n) => n.id.toString() === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note ? note.text: "");

  if (!note) {
    return <p>Note not found!</p>;
  }

  const handleDelete = ()=>{
    onDelete(note.id);
    navigate('/');
  }

  const handleSave = () => {
    if (!editedText.trim()) return; // avoid empty note
    onUpdate(note.id, editedText);  // call update function from App.jsx
    setIsEditing(false);
  };

  


  return (
    <div>
      <h2>Note Details</h2>
      {isEditing ? (
        <>
          <input 
          type="text"
          value={editedText}
          onChange={(e)=>{
            setEditedText(e.target.value)
          }}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={()=> setIsEditing(false)}>Cancel</button>
        </>
      ):(
      <>
           <p>{note.text}</p>
          <div>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            
          </div>
      </>
      )}
      
      <button onClick={() => navigate(-1)}>⬅ Back</button>

    </div>
  );
}

export default NoteDetails;