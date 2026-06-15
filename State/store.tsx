import { create } from 'zustand'
import { students } from '../utils/students'
import type { formTypes, studentType } from '../types/StudentTypes'
import { persist, createJSONStorage } from 'zustand/middleware'

const useUserStore = create<studentType>()(
    persist(
        (set, get) => ({
            users: students,
            addStudents: (student: formTypes) => {
                const newStudent = {
                    ...student,
                    id:Date.now(),
                 }

                set((state) => ({
                    users: [newStudent, ...state.users],
                }))
            },

            updateStudents: () => { },

            deleteStudents: (id: number) => {
                set((state) => ({
                    users: state.users.filter((user) => user.id != id)
                }))
            },

            searchResults:"",
            setSearchResults:(value:string)=>{
                set({
                    searchResults:value
                })
            }
        }),
        {
            name: 'students',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useUserStore