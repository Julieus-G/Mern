import React from "react";
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { GrCircleInformation } from "react-icons/gr";
import "./Todo.css"


function Todo({text, updateToDo, deleteToDo}){
    return(
        <>
            <div className="container">
                <div className="item">
                    <input type="checkbox"/> 
                    <h4 className="para">{ text }</h4>
                </div>
                <div className="adjustments">
                    <div className="bin">
                        <FaEdit className="edit" onClick={updateToDo}/>
                        <ImBin className="delete" onClick={deleteToDo}/>
                    </div>
                    <div className="date">
                        <button><GrCircleInformation className="info"/></button>
                        <i>22/22/2022</i>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Todo;