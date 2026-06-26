import React from 'react'
import type {ReactNode} from 'react'
import {useNavigate} from 'react-router-dom'

type ProtectedRouteType={
   children: ReactNode;
}

type isUserLoggedinType={
    email:string,
    password:string,
    confirm_password:string,
    auth_token:boolean
}
const ProtectedRoutes = ({children}:ProtectedRouteType) => {
    let parsedLogin:isUserLoggedinType | null=null
    const isUserLoggedin=localStorage.getItem('userData');
    const navigate=useNavigate();
    if(isUserLoggedin){
        parsedLogin=JSON.parse(isUserLoggedin) as isUserLoggedinType;
        console.log(parsedLogin);
    }
    else{
        console.log('not logged in');
        navigate('/')
    }

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes
