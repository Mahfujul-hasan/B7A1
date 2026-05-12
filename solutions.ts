//==============
// Problem -1
//==============
function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0)
}



//================
//problem -2 
//================
function reverseString(str: string): string {
    let reverseStr = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reverseStr = reverseStr + str[index];
    }
    return reverseStr;
}



//================
// Problem -3
//================
type StringOrNumber = string | number;
function checkType(value: StringOrNumber) {
    if (typeof value === "string") {
        return "String"
    } else if (typeof value === "number") {
        return "Number"
    } else {
        return "Unknown"
    }
}



//===============
//problem-4
//===============
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}



//================
// Problem 5
//================
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    }
}



//=================
//Problem 6
//=================
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}



//===================
// Problem -7 
//===================
function getIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(num => arr2.includes(num));
}

