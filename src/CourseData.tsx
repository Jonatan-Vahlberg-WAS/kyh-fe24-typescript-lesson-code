import StudentList from "./StudentList";

type CourseDataProps = {
  course: Course;
  students: Student[];
};

export default function CourseData({course, students}: CourseDataProps) {
  const courseStudents = students.filter((student) =>
    student.courses.includes(course.id)
  );
  const activeCourseStudents = courseStudents.filter(
    (student) => student.isActive
  );
  return (
    <div className="course">
      <h1 className="course-title">{course.name}</h1>
      <div className="course-subject">{course.subject}</div>
      <div className="course-status" data-status={course.status}>
        {course.status}
      </div>
      <div className="course-students">
        <strong>Antal studenter:</strong> {courseStudents.length}
      </div>
      <p>
        <strong>Antal aktiva studenter:</strong> {activeCourseStudents.length}
      </p>
      <StudentList students={courseStudents} />
    </div>
  );
};