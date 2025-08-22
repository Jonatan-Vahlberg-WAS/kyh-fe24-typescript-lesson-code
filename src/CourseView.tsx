import { useState } from "react";
import CourseData from "./CourseData";
import { dummyCourse } from "./data/course";
import { dummyStudents } from "./data/student";

export default function CourseView() {
  const [students, setStudents] = useState<Student[]>(dummyStudents);

  const removeStudent = (id: number) => {
    console.log("Removing student with id ", id);
    setStudents((students) => students.filter((student) => student.id !== id));
  };

  return (
    <CourseData
      course={dummyCourse}
      students={students}
      setStudents={setStudents}
      removeStudent={removeStudent}
    />
  );
}
