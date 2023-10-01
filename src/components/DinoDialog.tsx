import Dino from "../assets/lvl/dino.png";
import Modal from "./Modal";
import {useEffect, useState} from "react";


export default function DinoDialog({setActivity, setTaskDone}) {
    const [replicasNum, setReplicasNum]=useState(0);
    const dinoReplicas = [
        'Борис Барсикович, отчет по привлечению мышей будет готов завтра.',
        'Борис Барсикович, я знаю что его нужно было сдать ещё вчера.',
        '...',
        'Я вас понял, Борис Барсикович.'
    ];

    const handleClick = ()=>{
        if(replicasNum < dinoReplicas.length-1){
            setReplicasNum((prevState) => (prevState + 1))
        } else {
            setTaskDone(0);
            setActivity(false);
        };
    }



    return(
        <Modal>
            <div style={{maxWidth: '250px',
                padding:'10px',
                margin:'auto',
                border: '1px solid black'
            }}>{dinoReplicas[replicasNum]}</div>
            <div
                style={{
                    justifySelf:'center',
                    margin:'10px',
                    rotate:'45deg',
                    width: '102px',
                    height: '64px',
                    backgroundImage: `url(${Dino})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <button onClick={handleClick}>Мяу.</button>
        </Modal>
        )
}