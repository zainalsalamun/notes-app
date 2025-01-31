import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
