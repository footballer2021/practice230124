export type TodoType = {
    id:number,
    content:string,
    editing:boolean
}
  
export type ActionType = {
    type:string,
    todo:TodoType
}
  