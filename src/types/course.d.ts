type School = {
    id: number;
    name: string;
    address: string;
}

type CourseStatus = "pending" | "active" | "finished";


type Course = {
  id: number;
  name: string;
  subject: string;
  status: CourseStatus;
  school?: School
};