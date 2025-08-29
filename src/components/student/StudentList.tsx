import { useStudent } from "../../context/student";

export default function StudentList() {
  const { students, actions } = useStudent();
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
              <button
                type="button"
                onClick={() => actions.removeStudent(student.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
