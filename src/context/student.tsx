import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"
import LocalStorageService from "../utils/LocalStorageService"


type StudentState = {
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
    students: [],
    actions: {
        createStudent: () => {},
        removeStudent: () => {}
    }
}

const StudentContext = createContext<StudentState>(defaultState)

function StudentProvider({children, course}: StudentProviderProps) {
    const [students, setStudents] = useState<Student[]>([])

    useEffect(() => {
        _getStudents()
    },[])

    const _getStudents = () => {
        const _students: Student[] = LocalStorageService.getItem('@school/students', [])
        const courseStudents = _students.filter(student => student.courses.includes(course.id))
        setStudents(courseStudents)
    }
    
    const createStudent: typeof defaultState.actions.createStudent = (student) => {
        console.log("student", student)
    }

    const removeStudent = (id: number) => {
        console.log("student id", id)

    }

    const actions: typeof defaultState.actions = {
        createStudent,
        removeStudent
    }
    
    return (
        <StudentContext.Provider value={{
            students,
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