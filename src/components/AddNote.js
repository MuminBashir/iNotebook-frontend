import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleAddNote = (e) => {
    e.preventDefault();
    if (note.tag.length === 0) {
      addNote(note.title, note.description);
    } else {
      addNote(note.title, note.description, note.tag);
    }
    setNote({ title: "", description: "", tag: "" });
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" style={{ marginTop: "125px" }}>
      <h2>Add a note:</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <b>Title:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="Add title"
            value={note.title}
          />
          {note.title.length === 0 && (
            <div id="emailHelp" className="form-text">
              ( Title cannot be empty )
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            <b>Description:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            placeholder="Add description"
            value={note.description}
          />
          {note.description.length === 0 && (
            <div id="emailHelp" className="form-text">
              ( Description cannot be empty )
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            <b>Tag:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={handleChange}
            placeholder="Add tag"
            value={note.tag}
          />
        </div>
        <button
          disabled={
            note.title.length === 0 || note.description.length === 0
              ? true
              : false
          }
          type="submit"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Add note
        </button>
      </form>
    </div>
  );
}
