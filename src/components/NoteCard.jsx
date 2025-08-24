import { Link } from "react-router-dom";
import NoteDetails from "../pages/NoteDetails";

function NoteCard({ note }) {
  return (
    <Link to={`/notes/${note.id}`} style={styles.link}>
      <div style={styles.card}>
        <p style={styles.text}>{note.text}</p>
      </div>
    </Link>
  );
}
const styles = {
  card: {
    border: "1px solid #444",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    background: "#333333",   // dark gray card
    boxShadow: "0 2px 5px rgba(0,0,0,0.4)",
  },
  text: {
    margin: 0,
    fontSize: "16px",
    color: "#f1f1f1",   // light text for dark background
  },
};

export default NoteCard;
