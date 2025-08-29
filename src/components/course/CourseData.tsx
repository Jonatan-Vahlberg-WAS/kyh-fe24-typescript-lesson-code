import { StudentProvider } from "../../context/student";
import CourseStudents from "./CourseStudents";

type CourseDataProps = {
  course: Course;
};

export default function CourseData({ course }: CourseDataProps) {
  return (
    <StudentProvider course={course}>
      <div className="course">
        <h1 className="course-title">{course.name}</h1>
        <div className="course-subject">{course.subject}</div>
        <div className="course-status" data-status={course.status}>
          {course.status}
        </div>
        <CourseStudents />
      </div>
    </StudentProvider>
  );
}
