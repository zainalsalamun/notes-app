import React from 'react';

const Note = ({ note, onDelete, onArchive }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
      <button onClick={() => onArchive(note.id)}>
        {note.archived ? "Kembalikan" : "Arsipkan"}
      </button>
    </div>
  );
};

export default Note;
