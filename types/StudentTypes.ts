import { string } from "zod"

export type formTitle = {
    title_edit?: boolean
}

export type formTypes={
    name:string,
    age:number,
    course:string,
    email:string,
    address:string,
    phone:string,
}

export type studentType={
    users:(formTypes & {id:number} )[],
    addStudents:(students:formTypes)=>void,
    updateStudents:()=>void,
    deleteStudents:(id:number)=>void,

}