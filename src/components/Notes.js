import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={handleChange}
                    placeholder="Add title"
                    value={note.etitle}
                  />
                  {note.etitle.length === 0 && (
                    <div id="emailHelp" className="form-text">
                      ( Title cannot be empty )
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    <b>Description:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={handleChange}
                    placeholder="Add description"
                    value={note.edescription}
                  />
                  {note.edescription.length === 0 && (
                    <div id="emailHelp" className="form-text">
                      ( Description cannot be empty )
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    <b>Tag:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={handleChange}
                    placeholder="Add tag"
                    value={note.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length === 0 || note.edescription.length === 0
                    ? true
                    : false
                }
                type="button"
                className="btn btn-primary"
                onClick={handleUpdateNote}
              >
                Edit note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h2>Your notes:</h2>
        <div className="container text-center fw-bolder fs-4">
          {notes.length === 0 ? "No notes to display" : ""}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem note={note} updateNote={updateNote} key={note._id} />
          );
        })}
      </div>
    </>
  );
}
