import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "64908ecefc4f9aad0b74c82c",
      user: "648f18f134bec0f99c0a49de",
      title: "Go shopping",
      description: "shop at d-mart in evening",
      tag: "personal",
      date: "2023-06-19T17:22:22.086Z",
      __v: 0,
    },
    {
      _id: "64908eedfc4f9aad0b74c82e",
      user: "648f18f134bec0f99c0a49de",
      title: "Sleep time",
      description: "Sleep at 10pm",
      tag: "General",
      date: "2023-06-19T17:22:53.955Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
