# Lesson 1 - TypeScript basics

## Primary data types

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `object`
- `array`
- `tuple`

## Array data type

```tsx
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["Hello", "World"];
const booleans: boolean[] = [true, false];
const nulls: null[] = [null, null, null];
const undefineds: undefined[] = [undefined, undefined, undefined];
```

## functions - Parameters

```tsx
function greet(name: string): void {
  // void means that the function does not return a value or that it returns nothing
  console.log(`Hello ${name}`);
}

function greet2(name: string, age: number): void {
  console.log(`Hello ${name} you are ${age} years old`);
  return;
}

greet("John");
```

## functions - Return values

```tsx
function add(a: number, b: number): number {
  // return type is number and is explicitly defined
  return a + b;
}

const sum = add(1, 2);
console.log(sum);
```