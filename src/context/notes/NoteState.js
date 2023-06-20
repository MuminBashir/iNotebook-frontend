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
    setNotes(json.notes);
  };

  // add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZjE4ZjEzNGJlYzBmOTljMGE0OWRlIn0sImlhdCI6MTY4NzA5OTc0N30.yTzNgqyeOhh_fyKRh8h6vY04hI4p0Pjos36kZ09qFck",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note.notes));
  };

  // delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZjE4ZjEzNGJlYzBmOTljMGE0OWRlIn0sImlhdCI6MTY4NzA5OTc0N30.yTzNgqyeOhh_fyKRh8h6vY04hI4p0Pjos36kZ09qFck",
      },
    });
    const json = await response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ4ZjE4ZjEzNGJlYzBmOTljMGE0OWRlIn0sImlhdCI6MTY4NzA5OTc0N30.yTzNgqyeOhh_fyKRh8h6vY04hI4p0Pjos36kZ09qFck",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id == id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
