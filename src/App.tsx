import "./App.css";
import CourseData from "./CourseData";

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
  },
];

export type CourseStatus = "pending" | "active" | "finished";

const course: Course = {
  id: 101,
  name: "TypeScript",
  subject: "Web development",
  status: "active",
};

function App() {
  // Primary - string, number, boolean, null undefined

  // Implicit typing
  const firstName = "Jonatan";

  // Explicit typing
  const age: number = 28;
  const courseId: number = 1001;

  const courses: number[] = [courseId];
  // Later on cant change value type
  //courseId = "1002";
  const greeting = getGreeting(firstName, "Vahlberg", age);
  console.log(greeting, courses);
  // fucntions -

  return (
    <main>
      Students
      <CourseData course={course} students={students} />
    </main>
  );
}

// Functional typing - Paramaters and return value
function getGreeting(firstName: string, lastName: string, age: number): string {
  return `Hi my name is ${firstName} ${lastName} and i am ${age} years old`;
}

export default App;
