import { useStudent } from "../../context/student";
import StudentList from "../student/StudentList";
import Text from "../Text";


export default function CourseStudents() {
    const {students} = useStudent()

    const activeStudents = students.filter(s => s.isActive)

    return (
        <div>
            <Text className="course-students">
        <strong>Antal studenter:</strong> {students.length}
      </Text>
      <Text fontFamily="monospace">
        <strong>Antal aktiva studenter:</strong> {activeStudents.length}
      </Text>
      <StudentList
      />
        </div>
    )
}