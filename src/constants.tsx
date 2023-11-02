import {IItem} from "./types";
import Couch from './assets/lvl/couch.png'
import Dino from './assets/lvl/dino.png'
import Box from './assets/lvl/box.png'
import Rug from './assets/lvl/rug.png'
import Bowl from './assets/lvl/bowl.png'
import ScratchPost from './assets/lvl/scratching_post.png'
import Plant from './assets/lvl/plant.png'
import Painting from './assets/lvl/painting.png'
import Robot from './assets/lvl/robot_vacuum_cleaner.png'
import Window from './assets/lvl/window.png'

export const actions: Array<string> = [
    'Ничего', // 0
    'Поговорить с Дино', // 1
    'Снять стресс', // 2
    'Сделать ням-ням', // 3
    'Посидеть в кабинете'
]

export const items: IItem[] = [
    {   name: 'Couch',
        action: actions[0],
        path: Couch,
        size:{x:454,y:190},
        position: {x:1000, y:260},
        layer: 1
    },
    {
        name: 'Dino',
        path: Dino,
        size: { x:102, y:64 },
        position: { x:1300 , y:340 },
        action: actions[1],
        layer: 1
    },
    {
        name: 'Window',
        path: Window,
        size: { x:342, y:342 },
        position: { x:460 , y:120 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Plant',
        path: Plant,
        size: { x:78, y:217 },
        position: { x:560 , y:240 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Vacuum cleaner',
        path: Robot,
        size: { x:78, y:44 },
        position: { x:1500 , y:410 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Rug',
        path: Rug,
        size: { x:632, y:90 },
        position: { x:900, y:510 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'Bowl',
        path: Bowl,
        size: { x:70, y:36 },
        position: { x:80, y:410 },
        action: actions[3],
        layer: 1
    },
    {
        name: 'Painting',
        path: Painting,
        size: { x:180, y:102 },
        position: { x:1134, y:140 },
        action: actions[0],
        layer: 1
    },
    {
        name: 'ScratchingPost',
        path: ScratchPost,
        size: { x:116, y:146 },
        position: { x:330, y:310 },
        action: actions[2],
        layer: 1
    },
    {
        name: 'Box',
        path: Box,
        size: { x:341, y:179 },
        position: { x:80, y:660 },
        action: actions[4],
        layer: 3
    },
]