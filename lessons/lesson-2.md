# Lesson 2 - Typescript concepts

## Type

```tsx
//Type definition
type User = {
  name: string;
  age: number;
};

//Type usage
const user: User = {
  name: "John",
  age: 30,
};
```

## Interface

Interfaces serve most of the same purpose as types, but they can be extended. Interfaces are always a object type.

```tsx
//Interface definition
interface User {
  name: string;
  age: number;
}
```

## Type aliases

Type aliases are used to create a new name for a type. Often times through a union type.

```tsx
type Status = "active" | "inactive" | "pending";

type Course = {
  id: number;
  name: string;
  status: Status;
};
```

## Proptypes
PropTypes are a way to validate the props that are passed to a component these are always defined in the component and very seldom exported.

```tsx
type MyComponentProps = {
  name: string;
};

function MyComponent(props: MyComponentProps) {
  return <div>{props.name}</div>;
}
```

## Tuples & useState
A tuple is a fixed length array with a specific type for each index.

```tsx
const myTuple: [string, number] = ["Hello", 1];
```

## useState

```tsx
const [count, setCount] = useState(0);
...
const [students, setStudents] = useState<Student[]>([]);
```

## Functions and setters as props

```tsx
type MyReactiveComponentProps = {
  students: Student[];
  setStudents: Dispatch<SetStateAction<Student[]>> //! Can be less accurate yet true with (students: Student[]) => void
};

function MyReactiveComponent(props: MyReactiveComponentProps) {
  return <div>{props.students.length}</div>;
}
```