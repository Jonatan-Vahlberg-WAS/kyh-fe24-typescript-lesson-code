import CourseData from "./CourseData";
import { useCourse } from "../../context/course";

export default function CourseView() {
  const course = useCourse();

  return (
    <div className="course-view">
      <h1 className="main-title">Courses</h1>
      <div className="courses-container">
        {course.courses.map((c) => (
          <CourseData
            key={c.id}
            course={c}
          />
        ))}
      </div>
    </div>
  );
}
