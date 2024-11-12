//title
//status
//focused

export interface DialogBoxInterface {
    title: string,
    status: string,
    isFocused: boolean,
    maximize: boolean,
    icon: string,
    position: {x: number, y: number},
}