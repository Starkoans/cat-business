export interface ICoordinates {
    x: number,
    y: number
}

export interface ITask {
    name: string,
    status: boolean
}

export interface IItem {
    name: string,
    path: string,
    size: ICoordinates,
    position: ICoordinates,
    action: string,
    layer: number
}