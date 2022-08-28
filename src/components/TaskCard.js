import React from 'react'
import { useDispatch } from "react-redux"
import { completeTask, deleteTask } from "../redux/actions/action"
import EditTask from "./EditTask"


const TaskCard = ({el}) => {
    const dispatch = useDispatch();
    return (
        <div className="task"  style={{ display:"flex", justifyContent:"space-around", alighItems:"center" , width:"50%" , margin:"auto"}}>
            <h4 className={el.isDone ? "Done" : "none"}>{el.task}</h4>
            <div className="d-flex justify-content-between"> 
             <button type="button" class="btn btn-outline-danger btn-space" onClick={() => dispatch(deleteTask(el.id))}>delete</button>
             <button type="button" class="btn btn-outline-primary btn-space" onClick={() => dispatch(completeTask(el.id))}>complete</button> 
            <EditTask todo={el} />
            </div>
        </div>
    )
}
export default TaskCard
