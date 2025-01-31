import React, { useState } from 'react';
import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import './styles/App.css';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+...",
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
      id: 2,
      title: "React",
      body: "React adalah pustaka JavaScript untuk membangun antarmuka pengguna...",
      archived: false,
      createdAt: '2022-05-01T10:30:25.572Z',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <NoteForm onAddNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={filteredNotes.filter((note) => !note.archived)} onDelete={deleteNote} onArchive={archiveNote} />
      <h2>Catatan Arsip</h2>
      <NoteList notes={filteredNotes.filter((note) => note.archived)} onDelete={deleteNote} onArchive={archiveNote} />
    </div>
  );
};

export default App;
