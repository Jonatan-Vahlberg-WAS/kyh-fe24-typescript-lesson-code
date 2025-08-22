import "./App.css";
import CourseView from "./CourseView";
import PhotoList from "./PhotoList";

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
      <CourseView />
      <PhotoList/>
    </main>
  );
}

// Functional typing - Paramaters and return value
function getGreeting(firstName: string, lastName: string, age: number): string {
  return `Hi my name is ${firstName} ${lastName} and i am ${age} years old`;
}

export default App;
