import React, {useRef, useState} from "react";
import Room from './assets/lvl/bg.png';
import {DinoDialog} from "./components/mini-games/DinoDialog";
import {Cat} from "./components/Cat";
import {InteractionItem} from "./components/InteractionItem";
import {actions, items} from "./constants";
import {ITask} from "./types";
import {Tasks} from "./components/Tasks";
import {ScratchGame} from "./components/mini-games/ScratchGame";
import {BowlGame} from "./components/mini-games/BowlGame";

const initialTasksState :ITask[] = [
    {
        name: actions[1],
        status: false
    },
    {
        name: actions[2],
        status: false
    },
    {
        name: actions[3],
        status: false
    }
]

export const App: React.FC = () => {
    const drawContainerRef = useRef<HTMLDivElement | null>(null);
    const [activity, setActivity] = useState<string>(actions[0]);
    const [tasks, setTasks] = useState<ITask[]>(initialTasksState);
    const handleTaskDone = (i: number) => {
        const nextTasks : ITask[] = tasks;
        nextTasks[i].status = true;
        setTasks(nextTasks);
    };

  return (
      <div className="App">
          <div style={{
              overflow: 'hidden',
              width: '640px',
              height: '640px',
          }}>
            <div  className='draw-container'
                  ref={drawContainerRef}
                  style={{
                      zIndex:0,
                    position: 'relative',
                    width: '1700px',
                    height: '840px',
                      backgroundImage: `url(${Room})`,
                    backgroundSize: 'cover',
                  }}
            >
                {items.map((item)=>{
                    return(
                        <InteractionItem
                            key={item.name}
                            item={item}
                            onClick={()=>(setActivity(item.action))}
                    />
                    )
                })}

                <Cat drawContainerRef={drawContainerRef}/>
                <Tasks tasks={tasks}/>
                { activity === actions[1] &&
                    <DinoDialog
                        setActivity={setActivity}
                        setTaskDone={handleTaskDone}
                    />}
                { activity === actions[2] &&
                    <ScratchGame
                        setTaskDone={handleTaskDone}
                        setActivity={setActivity}
                    />}
                {
                    activity === actions[3] &&
                    <BowlGame
                        setTaskDone={handleTaskDone}
                        setActivity={setActivity}
                    />
                }
            </div>
          </div>
      </div>
  );
}
