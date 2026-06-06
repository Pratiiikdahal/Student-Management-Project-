export type formTitle = {
    title_edit?: boolean
}

export type formTypes={
    id?:number
    name:string,
    age:number,
    course:string,
    email:string,
    address:string,
    phone:string,
}

export type studentType={
    users:formTypes[],
    addStudents:(students:formTypes)=>void,
    updateStudents:()=>void,
    deleteStudents:()=>void,
}