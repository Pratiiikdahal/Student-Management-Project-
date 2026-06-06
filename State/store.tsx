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

            deleteStudents: () => {},
        }),
        {
            name: 'students',
        }
    )
)

export default useUserStore