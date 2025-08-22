import StudentList from "./StudentList";
import Text from "./Text";

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
      <Text className="course-students">
        <strong>Antal studenter:</strong> {courseStudents.length}
      </Text>
      <Text fontFamily="monospace">
        <strong>Antal aktiva studenter:</strong> {activeCourseStudents.length}
      </Text>
      <StudentList students={courseStudents} />
    </div>
  );
};