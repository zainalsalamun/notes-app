import React from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

const Home = ({ notes, onDelete, onAddNote, onArchive }) => {
  return (
    <div>
      <NoteForm onAddNote={onAddNote} />
      <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
};

export default Home;
