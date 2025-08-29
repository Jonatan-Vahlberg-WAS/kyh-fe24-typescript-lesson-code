import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"
import LocalStorageService from "../utils/LocalStorageService"
import { dummyStudents } from "../data/student"
import { dummyCourses } from "../data/course"


type StudentState = {
    course: Course
    students: Student[]
    actions: {
        createStudent: (student: Student) => void
        removeStudent: (id: number) => void
    }
}

type StudentProviderProps = PropsWithChildren & {
    course: Course
}

const defaultState: StudentState = {
    course: dummyCourses[0],
    students: [],
    actions: {
        createStudent: () => {},
        removeStudent: () => {}
    }
}

const StudentContext = createContext<StudentState>(defaultState)

function StudentProvider({children, course}: StudentProviderProps) {
    const [students, setStudents] = useState<Student[]>([])
    const [courseStudents, setCourseStudents] = useState<Student[]>([])

    useEffect(() => {
        _getStudents()
    },[])

    useEffect(() => {
        setCourseStudents(students.filter(student => student.courses.includes(course.id)))
    },[students, course.id])

    const _getStudents = () => {
        const _students: Student[] = LocalStorageService.getItem('@school/students', [])
        setStudents(_students)
    }

    const _setStudents = (_students: Student[]) => {
        LocalStorageService.setItem("@school/students", _students)
        setStudents(_students)
    }
    
    const createStudent: typeof defaultState.actions.createStudent = (student) => {
        const updatedStudents = [...students, student]
        _setStudents(updatedStudents)
    }

    const removeStudent = (id: number) => {
        const updatedStudents = students.map(student => {
            if(student.id === id) {
                const updatedStudent: Student = {
                    ...student,
                    courses: student.courses.filter(courseId => courseId !== course.id)
                }
                return updatedStudent
            }
            return student
        })
        _setStudents(updatedStudents)
    }

    const actions: typeof defaultState.actions = {
        createStudent,
        removeStudent
    }
    
    return (
        <StudentContext.Provider value={{
            course,
            students: courseStudents,
            actions
        }}>
            {children}
        </StudentContext.Provider>
    )
}

function useStudent() {
    const context = useContext(StudentContext)
    return context
}

export {
    StudentProvider,
    // eslint-disable-next-line react-refresh/only-export-components
    useStudent
}