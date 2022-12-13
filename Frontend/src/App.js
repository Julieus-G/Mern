import { useState, useEffect } from "react";
import "./App.css";
import Heading from "./components/heading/heading";
import Input from "./components/Input/Input";
import Todo from "./components/Todos/Todo";
import { getAllToDos } from "./utils/handleApi";

function App() {
  const [todo, setTodo] = useState([]);


  useEffect(()=>{ getAllToDos(setTodo)},[])

  // useEffect(() => {
  //   fetch("localhost:5000/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  //   console.log("Julieus");
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <Heading /> <Input />
      <hr />
      <div className="todo">

        { todo.map((item) =>  <Todo key = {item._id} text={item.text}/> )}
        
      </div>
      {/* <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form> */}
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>{!data ? "Loading..." : data}</p> */}
        </header>
      </div>
    </>
  );
}


export default App;
