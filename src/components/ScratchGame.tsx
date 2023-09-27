import React, {useState} from "react";
import Modal from "./Modal";

export const ScratchGame: React.FC = ({setTaskDone, setActivity})=>{
    const [scratchProgress, setScratchProgress] = useState<number>(0);
    const handleScratch = () => {
        if (scratchProgress <100){
        setScratchProgress((prevState)=>(prevState+1));
        }
    }
    const handleExit = () =>{
        setTaskDone(1);
        setActivity(false);
    }
    return(
        <Modal>
            <div
            style={{
                border:'2px solid black',
                height:'20px',
                width:'200px'
            }}>
                <div style={{
                    height:'20px',
                    width:`${scratchProgress}%`,
                    backgroundColor:'green'
                }}/>
            </div>
            {scratchProgress >= 100 && <div>Теперь вы самый спокойный кот.</div>}
            {scratchProgress >= 100 && <button onClick={handleExit}>Мяу!</button>}
            {scratchProgress <100 && <button onClick={handleScratch}>Scratch scratch!</button>}
        </Modal>
    )
}