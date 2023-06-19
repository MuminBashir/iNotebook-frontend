import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row mt-5">
      <h2>Your notes:</h2>
      {notes.map((note) => {
        return <NoteItem note={note} />;
      })}
    </div>
  );
}
