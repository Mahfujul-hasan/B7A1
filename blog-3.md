# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## What are Generics?
Generics is the concept of typescript. it is a feature that can help to create reusable class, function or components without losing the type safety.
---

## problem without generics:
suppose, i want to create a function that return any types of values. 

```typescript
function identity (value:any):any{
    return value;
}

```
Here, typescript does not know the types of the result - this breaks the type safety.
--- 

## using Generics:

```typescript
function identity<T>(value:T):T{
    return value;
}

```

here, <T> is a generic type parameter.. here i can pass my required typed data. I can reuse this function for different types of data. Generics are more powerful because A function can be work for string, can be work for number or object or array.. and it will maintain  the type safety.
---

## How Generics maintain type safety:
Generics create a connection between the input type and the output type. it's means, Typescript remember the input type and use it in the function and return output with the specific type. for example:

## Generics with Arrays:

```typescript
function identity<T>(arr:T[]):T{
    return arr[0];
}

// Usage: 
const firstNumber = getFirstElement([1, 2, 3]); Typescript infers the types that is "number".

```

## Generics in Interface:

```typescript
interface Box<T>{
    value T;
}

// usage: 
const numberBox: Box<number> = {
  value: 100,
};

const stringBox: Box<string> = {
  value: "Hello",
};

```
This allows interfaces to remain reusable and strongly typed.
---

## Why Generics matter
Generics are one of the most important features in TypeScript because they combine:

- flexibility
- reusability
- strict type safety

They allow developers to write scalable code that adapts to different data structures while still preserving accurate type information.
