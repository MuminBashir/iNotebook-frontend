import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, updateNote } = props;

  const handleDeleteNote = () => {
    deleteNote(note._id);
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text mb-4">{note.description}</p>
          <div>
            <i
              className="fa-regular fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-regular fa-trash-can mx-2"
              onClick={handleDeleteNote}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
