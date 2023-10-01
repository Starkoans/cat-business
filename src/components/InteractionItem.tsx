import React, {useRef, useState} from "react";
import {ICoordinates, IItem} from "../types";

interface InteractionItemProps{
    item: IItem,
    onClick?: () => void
}

export const InteractionItem :React.FC<InteractionItemProps> = ({item, onClick}:InteractionItemProps)=>{
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition]= useState<ICoordinates>({x:0,y:0})
    const itemRef = useRef<HTMLDivElement | null>(null);
    const changeTooltipPosition = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (itemRef.current?.getBoundingClientRect() as DOMRect) ||
            { left: 0, top: 0, right: 0, bottom: 0 };
        setTooltipPosition({
            x: e.clientX - rect.left + 10,
            y: e.clientY - rect.top + 10});
    }
    return(
        <div
            onClick={onClick}
            ref={itemRef}
            onMouseEnter={(e)=> {
                changeTooltipPosition(e);
                setIsHovered(true);
            }}
            onMouseMove={(e)=> {
                changeTooltipPosition(e)
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