import { type Student } from "./App";

// Array of student objects
const students: Student[] = [
  {
    firstName: "Olivia",
    lastName: "Smith",
    age: 21,
    courses: [101, 203, 305],
    isActive: true,
  },
  {
    firstName: "Liam",
    lastName: "Johnson",
    age: 19,
    courses: [102, 202],
    isActive: true,
  },
  {
    firstName: "Emma",
    lastName: "Williams",
    age: 22,
    courses: [101, 301, 404],
    isActive: true,
  },
  {
    firstName: "Noah",
    lastName: "Brown",
    age: 20,
    courses: [203, 401, 402],
    isActive: true,
  },
  {
    firstName: "Ava",
    lastName: "Jones",
    age: 18,
    courses: [101, 102],
    isActive: true,
  },
  {
    firstName: "William",
    lastName: "Garcia",
    age: 23,
    courses: [305, 404, 501],
    isActive: true,
  },
  {
    firstName: "Sophia",
    lastName: "Miller",
    age: 21,
    courses: [102, 202, 301],
    isActive: true,
  },
  {
    firstName: "James",
    lastName: "Davis",
    age: 19,
    courses: [401, 502],
    isActive: true,
  },
  {
    firstName: "Isabella",
    lastName: "Rodriguez",
    age: 20,
    courses: [101, 203, 301, 402],
    isActive: true,
  },
  {
    firstName: "Benjamin",
    lastName: "Martinez",
    age: 22,
    courses: [202, 305, 501],
    isActive: true,
  }
];

export default function StudentList() {
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
