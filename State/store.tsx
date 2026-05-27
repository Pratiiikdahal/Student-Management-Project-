import {create} from 'zustand'
import {students} from '../utils/students'
const useUserStore= create(()=>({
    users:students,
    addUsers: ()=>{},
    updateUsers: ()=>{},
    deleteUsers: ()=>{},
}));

export default useUserStore
