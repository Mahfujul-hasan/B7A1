# Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data?

## Why "any" is labeled a "type safety hole":
When I use "any" in a variable then typescript says "It's ok, you can do anything". That means,

- you can call string method,
- you can call number method, 
- you can access a property of an object,
- if you have done any wrong, typescript won't show any compile error.
### for example: 

```typescript
let value: any= "hello";
console.log(value.toFixed(2));
```

here, `toFixed()` is only for number but "hello" is a string. typescript won't show an error. then it will crash on runtime.
For this reason "any" is a "type safety hole".
---

## Why "unknown" is safer choice for handling unpredictable data:
`unknown` is safer choice than "any" because while i am using unknown, it's says **I don't know its type, check type first**. 

### For example:

```typescript
let value:unknown = "hello";
console.log(value.toUpperCase());
```

here, Typescript will show an error. it will suggest to check type first. so the correct way to use "unknown" is:

```typescript
let value:unknown = "hello";
if(typeof value === "string"){
    console.log(value.toUpperCase());
}
```

here typescript check *"is it a string?"* then give permission to apply string method. 

> **Summary:** Use `unknown` over `any` whenever data is unpredictable. It keeps type safety intact by requiring explicit type checks before use.
---


## Explain the concept of type narrowing.
Type narrowing is a concept of typescript. where typescript prioritize specific type then possible type. It's means, first of all typescript know variable will be many types. But after condition check,It can understand the specific types. For example,

### Without type Narrowing:

```typescript
function printValue (value:string | number){
    console.log(value.toUpperCase());
}
```

it will show error. because here the value can be `string` or `number`. but` toUpperCase()` is a string method.

### With type Narrowing:

```typescript
function printValue(value:string|number){
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    }
    if(typeof value === "number"){
        console.log(value.toFixed(2));
    }
}

```
Here, After checking  (`typeof value === "string"`) and (`typeof value === "number"`), typescript understand specific type and it is called the type narrowing.
---

There are some common way of type narrowing: 
1. typeof: it is use to check primitive type.
2. instanceof: it is use to check class/object.



 