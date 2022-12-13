import axios from "axios";

const baseUrl = "http://localhost:5000/";

const getAllToDos = (setToDo) => {
    axios.get(baseUrl).then(({
        data
    }) => {
        console.log("data --->", data);
        setToDo(data);
    });
};

const addToDo = (text, setText, setToDo)=>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDos(setToDo)
    })
}

export {getAllToDos, addToDo}