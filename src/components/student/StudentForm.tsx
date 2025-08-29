import { useState } from "react";
import { useStudent } from "../../context/student";

type StudentFormProps = {
  student?: Student;
};

export default function StudentForm({ student }: StudentFormProps) {
  const { course, actions } = useStudent();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 9000)
    const courses = [course.id]

    const _student: Student = {
        id,
        courses,
        firstName,
        lastName,
        age,
        isActive
    }

    actions.createStudent(_student)
    setFirstName("")
    setLastName("")
    setAge(0)
    setIsActive(false)
  }

  return (
    <div>
      <div>
        <label>First name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Last name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <label>Is active?</label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => {
            setIsActive(e.target.checked);
          }}
        />
        <button type="button" onClick={handleSubmit}>
            Create student
        </button>
      </div>
    </div>
  );
}
