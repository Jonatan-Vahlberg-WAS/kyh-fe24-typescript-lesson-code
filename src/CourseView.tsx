import { useState } from "react";
import CourseData from "./CourseData";
import { dummyCourse } from "./data/course";
import { dummyStudents } from "./data/student";

export default function CourseView() {
    const [students, setStudents] = useState<Student[]>(dummyStudents)
  return <CourseData course={dummyCourse} students={students} />;
}
