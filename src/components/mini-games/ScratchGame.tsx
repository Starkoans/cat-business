import React, {useState} from "react";
import {Modal} from "../Modal";
import {actions} from "../../constants";
import ScratchSpriteAnimated from '../../assets/Scratch_Sprite_Animated.gif'
import LovelySprite from '../../assets/LovelySprite.gif'

interface ScratchGameProps{
    setActivity: (arg: string)=>void,
    setTaskDone: (i: number) => void,
}

export const ScratchGame: React.FC<ScratchGameProps> = ({setTaskDone, setActivity})=>{
    const [scratchProgress, setScratchProgress] = useState<number>(0);

    const handleScratch = () => {
        if (scratchProgress <100){
        setScratchProgress((prevState)=>(prevState+1));
        }
    }
    const handleExit = () =>{
        setTaskDone(1);
        setActivity(actions[0]);
    }
    return(
        <Modal>
            <>
                {scratchProgress >= 100 &&
                    <div className='grid grid-cols-1 gap-4'>

                        <h3 className='flex justify-self-center text-lg'>
                            Теперь вы самый спокойный кот.
                        </h3>
                        <button
                            className='flex justify-self-center text-white'
                            onClick={handleExit}>
                            Мяу!
                        </button>
                        <img
                            className='flex justify-self-center'
                            src={LovelySprite} alt="LovelySprite"/>
                    </div>
                }

            {scratchProgress <100 &&
                <div className='grid grid-cols-1 gap-4' >
                        <div className='flex justify-self-center border-4 border-slate-950 z-20'
                             style={{
                                 height:'24px',
                                 width:'200px'
                             }}>
                            <div
                                className='bg-red-500 z-10'
                                style={{
                                    height:'16px',
                                    width:`${scratchProgress}%`,
                                }}/>
                        </div>
                    <img
                        className='flex justify-self-center'
                        src={ScratchSpriteAnimated} alt="ScratchSprite"/>
                    <button
                        className='flex justify-self-center text-white'
                        onClick={handleScratch}>Scratch scratch!
                    </button>
                </div>
            }
            </>
        </Modal>
    )
}