import { useState } from "react";
import CourseData from "./CourseData";
import { dummyStudents } from "./data/student";
import { useCourse } from "./context/course";

export default function CourseView() {
  const course = useCourse()
  const [students, setStudents] = useState<Student[]>(dummyStudents);

  const removeStudent = (id: number) => {
    console.log("Removing student with id ", id);
    setStudents((students) => students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Courses</h1>
      {course.courses.map(c => (
        <CourseData
          key={c.id}
          course={c}
          students={students}
          setStudents={setStudents}
          removeStudent={removeStudent}
          />
      ))}
      </div>
  );
}
