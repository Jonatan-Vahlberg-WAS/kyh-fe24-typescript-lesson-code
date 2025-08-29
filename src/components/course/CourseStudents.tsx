import { useStudent } from "../../context/student";
import Collapsible from "../Collapsible";
import StudentList from "../student/StudentList";
import Text from "../Text";


export default function CourseStudents() {
    const {students} = useStudent()

    const activeStudents = students.filter(s => s.isActive)

    return (
        <div className="course-students-section">
            <div className="student-stats">
                <Text className="course-students">
                    <strong>Antal studenter:</strong> {students.length}
                </Text>
                <Text fontFamily="monospace" className="course-students">
                    <strong>Antal aktiva studenter:</strong> {activeStudents.length}
                </Text>
            </div>
            <Collapsible title="Studenter">
                <StudentList />
            </Collapsible>
        </div>
    )
}