import type { Dispatch, SetStateAction } from "react";

type StudentListProps = {
    students: Student[]
    setStudents?: Dispatch<SetStateAction<Student[]>>
    removeStudent?: (id: number) => void;
}

export default function StudentList({ students, setStudents, removeStudent }: StudentListProps) {

    const _removeStudent = (index: number) => {
        if(!setStudents) {
            return
        }
        setStudents(students => {
            const newStudents = [...students]
            newStudents.splice(index,1)
            return newStudents
        })
    }

  return (
    <table className="student-list">
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Courses</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id}>
            <td>{index}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.courses.join(", ")}</td>
            <td>
                <button type="button" onClick={() => removeStudent && removeStudent(student.id)} >
                    Remove
                </button>
                <button type="button" onClick={() => _removeStudent(index)}>
                    Remove (internal)
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
