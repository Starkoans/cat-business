import React from "react";
import {ITask} from "../types";

export const Tasks: React.FC<ITask[]> = ({tasks}: ITask[]) => {
    return(
        <div
        style={{
            zIndex: 2,
            backgroundColor:'white',
            color:'black',
            position: 'fixed',
            padding: '5px',
            margin: '5px',
            textAlign:'center'
        }}
        >
            <b>Задания</b>
            <ul style={{paddingLeft:'15px', margin:0}}>
                {tasks.map((task, index)=>{
                    return(
                        <li key={index} style={
                            task.status?
                                {textDecoration:'line-through', } :
                                {textDecoration:'none', }
                        }>{task.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}