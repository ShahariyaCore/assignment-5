
==================================================
1️⃣ Difference between var, let, and const
==========================================

JavaScript এ variable declare করার জন্য 3টি keyword ব্যবহার করা হয়

var
let
const

---

## var

var হলো JavaScript এর পুরোনো variable declaration system।

Features

* redeclare করা যায়
* value change করা যায়
* function scope

Example:

var name = "Nishat";
var name = "Rahim"; // redeclare possible

name = "Karim"; // value change possible

console.log(name);

---

## let

let হলো modern JavaScript variable declaration।

Features

* redeclare করা যায় না
* value change করা যায়
* block scope

Example:

let age = 20;

age = 25;

console.log(age);

Wrong Example:

let age = 20;
let age = 25; // Error

---

## const

const হলো constant variable।

Features

* redeclare করা যায় না
* value change করা যায় না
* block scope

Example:

const country = "Bangladesh";

console.log(country);

Wrong Example:

const country = "Bangladesh";
country = "USA"; // Error

==================================================
2️⃣ Spread Operator (...)
=========================

Spread operator ব্যবহার করা হয় array বা object এর element ছড়িয়ে দিতে।

Symbol:

...

Example 1 (Array)

const numbers = [1,2,3];

const newNumbers = [...numbers,4,5];

console.log(newNumbers);

Output

[1,2,3,4,5]

Example 2 (Copy Array)

const fruits = ["Apple","Mango"];

const copyFruits = [...fruits];

console.log(copyFruits);

Example 3 (Object)

const person = {
name: "Nishat",
age: 18
};

const newPerson = {
...person,
city: "Sylhet"
};

console.log(newPerson);

==================================================
3️⃣ map(), filter(), forEach()
==============================

এগুলো JavaScript এর array method।

---

## forEach()

forEach() array এর প্রতিটি element এর উপর loop চালায়।

Example

const numbers = [1,2,3];

numbers.forEach(num => {
console.log(num);
});

Output

1
2
3

Note
forEach() নতুন array return করে না

---

## map()

map() নতুন array তৈরি করে।

Example

const numbers = [1,2,3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

Output

[2,4,6]

---

## filter()

filter() condition অনুযায়ী element select করে।

Example

const numbers = [1,2,3,4,5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);

Output

[2,4]

==================================================
4️⃣ Arrow Function
==================

Arrow function হলো JavaScript এর modern function syntax।

Normal Function

function add(a,b){
return a + b;
}

Arrow Function

const add = (a,b) => {
return a + b;
};

Short Version

const add = (a,b) => a + b;

Example

const greet = name => "Hello " + name;

console.log(greet("Nishat"));

==================================================
5️⃣ Template Literals
=====================

Template literal ব্যবহার করে string এর ভিতরে variable ব্যবহার করা যায়।

এটি backtick দিয়ে লেখা হয়

` `

Normal String

const name = "Nishat";

console.log("My name is " + name);

Template Literal

const name = "Nishat";

console.log(`My name is ${name}`);

Multiple Variables

const name = "Nishat";
const age = 18;

console.log(`My name is ${name} and I am ${age} years old`);

==================================================
SHORT SUMMARY
=============

var
পুরোনো variable system

let
value change করা যায়

const
value change করা যায় না

Spread Operator
array/object expand করে

map()
নতুন array তৈরি করে

filter()
condition অনুযায়ী element নেয়

forEach()
শুধু loop চালায়

Arrow Function
short function syntax

Template Literal
string এর ভিতরে variable ব্যবহার করা যায়

