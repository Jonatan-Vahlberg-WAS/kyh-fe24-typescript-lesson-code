import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"
import LocalStorageService from "../utils/LocalStorageService"


type CourseState = {
    courses: Course[]
    actions: {
        createCourse: (course: Course) => void
        removeCourse: (id: number) => void
    }
}

const defaultState: CourseState = {
    courses: [],
    actions: {
        createCourse: () => {},
        removeCourse: () => {}
    }
}

const CourseContext = createContext<CourseState>(defaultState)

function CourseProvider({children}: PropsWithChildren) {
    const [courses, setCourses] = useState<Course[]>([])

    useEffect(() => {
        _getCourses()
    },[])

    const _getCourses = () => {
        const _courses: Course[] = LocalStorageService.getItem('@school/courses', [])
        setCourses(_courses)
    }
    
    const createCourse: typeof defaultState.actions.createCourse = (course) => {
        console.log("course", course)
    }

    const removeCourse = (id: number) => {
        console.log("course id", id)

    }

    const actions: typeof defaultState.actions = {
        createCourse,
        removeCourse
    }
    
    return (
        <CourseContext.Provider value={{
            courses,
            actions
        }}>
            {children}
        </CourseContext.Provider>
    )
}

function useCourse() {
    const context = useContext(CourseContext)
    return context
}

export {
    CourseProvider,
    // eslint-disable-next-line react-refresh/only-export-components
    useCourse
}