import { create } from 'zustand'
import { students } from '../utils/students'
import type { formTypes, studentType } from '../types/StudentTypes'
import { persist } from 'zustand/middleware'

const useUserStore = create<studentType>()(
    persist(
        (set, get) => ({
            users: students,
            addStudents: (student: formTypes) => {
                set((state) => ({
                    users: [student, ...state.users],
                }))
            },

            updateStudents: () => {},

            deleteStudents: (id:number) => {
                set((state)=>({
                     users:state.users.filter((user)=>user.id != id)
                }))
            },
        }),
        {
            name: 'students',
        }
    )
)

export default useUserStore