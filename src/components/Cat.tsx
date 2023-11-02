import CatWalking from "../assets/New Piskel.gif";
import CatStanding from "../assets/sprite_2.png";
import React, { useEffect, useRef, useState} from "react";
import {ICoordinates} from "../types";

const ARROW_DOWN = 'KeyS';
const ARROW_UP = 'KeyW';
const ARROW_LEFT = 'KeyA';
const ARROW_RIGHT = 'KeyD';

interface CatProps {
    drawContainerRef:  React.MutableRefObject<HTMLDivElement | null>
}

export const Cat: React.FC<CatProps> = ({drawContainerRef}) =>{
    const [location, setLocation] = useState<ICoordinates>({x:0, y:500});
    const [isWalking, setIsWalking] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    let drawContainerWidth: number, drawContainerHeight : number;
    useEffect(()=>{
        const rect = drawContainerRef.current?.getBoundingClientRect();
        if(rect){
            drawContainerWidth = rect.width;
            drawContainerHeight = rect.height;
        }
    },[]);

    const handleKeyUp = () => {
        setIsWalking(false);
        if (ref.current instanceof HTMLElement) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        const newLocation :ICoordinates = location;

        const step = 5;
        switch (e.code) {
            case ARROW_DOWN:
                setIsWalking(true);
                newLocation.y += step;
                break;
            case ARROW_UP:
                setIsWalking(true);
                newLocation.y -= step;
                break;
            case ARROW_LEFT:
                setIsWalking(true);
                newLocation.x -= step;
                break;
            case ARROW_RIGHT:
                setIsWalking(true);
                newLocation.x += step;
                break;
            default:
                break;
        }
        console.log(newLocation);
        console.log(drawContainerHeight)
        if(newLocation.x + 90 > drawContainerWidth) newLocation.x = drawContainerWidth - 90;
        if(newLocation.x < 0) newLocation.x = 0;
        if(newLocation.y + 120 > drawContainerHeight) newLocation.y = drawContainerHeight - 120;
        if(newLocation.y < drawContainerHeight/2 - 40) newLocation.y = drawContainerHeight/2 - 40;

        setLocation({...newLocation})

    }

    useEffect(()=>{
        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('keyup', () => handleKeyUp());
        return(
            ()=>{
                window.removeEventListener('keypress', ()=>{});
                window.removeEventListener('keyup', () => setIsWalking(false));
            }
        )
    },[]);

    return(
        <div
            ref={ref}
            style={{
                zIndex:2,
                left: location.x,
                top: location.y,
                position: 'absolute',
                display: 'block',
                width: '100px',
                height: '100px',
            }}
        >
            {
                isWalking?
                    <img alt='Cat' src={CatWalking} style={{ width: '90px', height: '90px',}} />:
                    <img alt='Cat' src={CatStanding} style={{ width: '90px', height: '90px',}}/>
            }
        </div>
    )
}