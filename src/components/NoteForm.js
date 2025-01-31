import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [charCount, setCharCount] = useState(50);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      onAddNote(newNote);
      setTitle("");
      setBody("");
      setCharCount(50); // Reset character count
    }
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setCharCount(50 - newTitle.length);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Judul catatan..."
      />
      <p>{charCount} karakter tersisa</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Isi catatan..."
      />
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default NoteForm;
