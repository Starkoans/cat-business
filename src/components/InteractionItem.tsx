import React, {FC, useRef, useState} from "react";
import {ICoordinates, IItem} from "../types";

interface InteractionItemProps{
    item: IItem,
    onClick?: () => void
}

export const InteractionItem :FC<InteractionItemProps> = ({item, onClick}:InteractionItemProps)=>{
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition]= useState<ICoordinates>({x:0,y:0})
    const itemRef = useRef<HTMLDivElement>(null);
    return(
        <div
            onClick={onClick}
            ref={itemRef}
            onMouseEnter={(e)=> {
                setTooltipPosition({
                    x: e.clientX - itemRef.current?.getBoundingClientRect().left + 10,
                    y: e.clientY - itemRef.current?.getBoundingClientRect().top + 10});
                setIsHovered(true);
            }}
            onMouseMove={(e)=> {
                setTooltipPosition({
                    x: e.clientX - itemRef.current?.getBoundingClientRect().left + 10,
                    y: e.clientY - itemRef.current?.getBoundingClientRect().top + 10})
            }}
            onMouseOut={()=>setIsHovered(false)}

            style={{ left: `${item.position.x}px`, top: `${item.position.y}px`,
                position: 'absolute',
                display: 'block',
                width: `${item.size.x}px`,
                height: `${item.size.y}px`,
                backgroundImage: `url(${item.path})`,
                backgroundSize: 'cover',
                cursor: 'pointer',
                zIndex:item.layer
            }}>

            {isHovered &&
                <div
                style={{
                    position: 'absolute',
                    left: tooltipPosition.x,
                    top: tooltipPosition.y,
                    padding: '5px',
                    borderRadius: '5px',
                    backgroundColor: 'white',
                    color:'black',
                    width:'fit-content',
                }}
            >
                {item.action}</div>}
        </div>
    )
}