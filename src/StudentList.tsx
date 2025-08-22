import { type Student } from "./App";

type StudentListProps = {
    students: Student[]
}

export default function StudentList({ students }: StudentListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Courses</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.courses.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
