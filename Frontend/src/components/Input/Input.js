import React, { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { addToDo } from "../../utils/handleApi";
import "./Input.styles.css";

function Input() {

  const [ text, setText ] = useState("")
  const [ todo, setTodo ] = useState([]);

  return (
    <>
      <div className="inputs">
        <input className="theinput" type="text" size="00" placeholder="Add new..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="actions">
          <BsCalendar2Date className="calender"/>
          <button className="btn" type="submit" onClick={() => addToDo(text, setText, setTodo) }>Add</button>
        </div>
      </div>
    </>
  );
}

export default Input;
