type School = {
    id: number;
    name: string;
    address: string;
}

type Course = {
  id: number;
  name: string;
  subject: string;
  status: CourseStatus;
  school?: School
};