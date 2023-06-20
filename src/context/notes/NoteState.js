import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  //get Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZjE4ZjEzNGJlYzBmOTljMGE0OWRlIn0sImlhdCI6MTY4NzA5OTc0N30.yTzNgqyeOhh_fyKRh8h6vY04hI4p0Pjos36kZ09qFck",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // add a note
  const addNote = (title, description, tag) => {
    const note = {
      _id: "64908eedfc4f9aad0b74c82ecm",
      user: "648f18f134bec0f99c0a49de",
      title: title,
      description: description,
      tag: tag,
      date: "2023-06-19T17:22:53.955Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    console.log(title);
  };

  // delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // update a note
  const updateNote = (id, title, description, tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
