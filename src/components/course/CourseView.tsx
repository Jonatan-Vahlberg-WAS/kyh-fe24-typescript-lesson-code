import CourseData from "./CourseData";
import { useCourse } from "../../context/course";

export default function CourseView() {
  const course = useCourse();

  return (
    <div>
      <h1>Courses</h1>
      {course.courses.map((c) => (
        <CourseData
          key={c.id}
          course={c}
        />
      ))}
    </div>
  );
}
