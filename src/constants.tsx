import {ICoordinates, IItem} from "./types";
import Couch from '../src/assets/lvl/couch.png'
import Dino from "./assets/lvl/dino.png";
export const actions: Array<string> = [
    'Nothing',
    'Talk to Dino',
    'Stress relief'
]

export const items: IItem[] = [
    {   name: 'Couch',
        action: actions[0],
        path: 'src/assets/lvl/couch.png',
        size:{x:454,y:190},
        position: {x:1000, y:260},
        layer: 1
    },
    {
        name: 'Dino',
        path: 'src/assets/lvl/dino.png',
        size: { x:102, y:64 },
        position: { x:1300 , y:340 },
        action: actions[1],
        layer: 1
    },
    {
        name: 'Window',
        path: 'src/assets/lvl/window.png',
        size: { x:342, y:342 },
        position: { x:460 , y:120 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Plant',
        path: 'src/assets/lvl/plant.png',
        size: { x:78, y:217 },
        position: { x:560 , y:240 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Robot',
        path: 'src/assets/lvl/robot_vacuum_cleaner.png',
        size: { x:78, y:44 },
        position: { x:1500 , y:410 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Rug',
        path: 'src/assets/lvl/rug.png',
        size: { x:632, y:90 },
        position: { x:900, y:510 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Bowl',
        path: 'src/assets/lvl/bowl.png',
        size: { x:70, y:36 },
        position: { x:80, y:410 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Painting',
        path: 'src/assets/lvl/painting.png',
        size: { x:180, y:102 },
        position: { x:1134, y:140 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'ScratchingPost',
        path: 'src/assets/lvl/scratching_post.png',
        size: { x:116, y:146 },
        position: { x:330, y:310 },
        action: actions[2],
        layer: 1
    },
    {
        name: 'Box',
        path: 'src/assets/lvl/box.png',
        size: { x:341, y:179 },
        position: { x:80, y:660 },
        action: actions[0],
        layer: 3
    },
]