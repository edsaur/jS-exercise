5 Primitive Datatypes

- Javascript has FIVE Primative datatypes

Number

- you can write regular numbers or a mathematical equation, modulo is the remainder operator
- Strings - normal letters or words that are inside of a quotation mark. You can concatenate strings or connect two strings into one.

  Escape character strings start with "\"
  Strings have a length property - "hello world".length
  Access individual characters using [] and an index - "hello"[0] = "h"

- Booleans = true or false
- null and undefined

Variables

- It is a storage of data that has a name/number/boolean on it.
  (var) let name = "Rusty"
  var secretNumber = 73;
  var isAdorable = true;

- The data inside of a varible can be changed or it can vary

- It can recall the stored value by calling the variable name
- let name = "Rusty";
  "hello there " + name; // hello there Rusty
- And we can also update existing variables.
  var num = 2;
  num = 5;
- all jS variables should be camelCased.

Null and Undefined

- Undefined has no value inside of a variable, function or anything.
  var name; // undefined
- null however is "explicitly nothing"
  var currentPlayer = "Charlie"
  currentPlayer = null; // gameover

Useful Bulit-in Methods

- In JavaScript there are three built-in methods these are
  - alert() - is a pop-up inside the browser that "alerts" user of a certain message. You can insert a string or a number or a basic math calculation
  - prompt() - gets data from a user from an input and can be stored in a variable.
  - console.log() - this will print something inside of the JavaScript console.
  - comment - //
  - clear()

---

CONTROL FLOWS
Logical Expressions, Conditionals and Loops

Boolean Logic (True, False, and Beyond)
Comparison Operators - > Greater than - >= Greater than or equal to - == Equal to - === Equal value and type - != Not equals to - !== Not equal value and type

Logical Operators

- Chaining simple boolean statements to complex ones
  - There are three logical operators
    AND && (ex. if (x === 10 && y < 20))
    OR || (ex. if (x === 10 || y < 20))
    NOT ! (ex. if !((x === 10 && y < 20)))

JS Conditionals - Making Decisions with code

_If, Else If, Else_

- “If” statements: where if a condition is true it is used to specify execution for a block of code.
- “Else” statements: where if the same condition is false it specifies the execution for a block of code.
- “Else if” statements: this specifies a new test if the first condition is false.

JavaScript Loops

- Loop helps us to not repeat ourselves of codes (DRY & WET)
  _WHILE LOOP_
- The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed.
- Example Code
- while(someCondition) {
  // run some code
  }
- You can also print each character in a string
  let str = "hello"
  let count = 0;

  while(count < str.length) {
  console.log(str[count]);
  count++
  }

- While loop can end up to an infinite loop if there is no incremation or termination.

  _FOR LOOP_ - Another way of repeating code

- for(init; condition; step) {
  // run some code
  }

  Example:
  Printing numbers in for loop
  for (let count = 0; count < 6; count++) {
  console.log(count);
  }
  Printing each character in a string with a for loop
  let str = "hello";
  for (let i = 0; i < str.length; i++){
  console.log(str[i]);
  }

---

JAVASCRIPT Functions (REUSABLE BLOCKS OF CODES)

- Function can store any amount of codes, and it can be run all over again.
  They are reusable codes.
- We can also recall functions.

Javascript Function Arguments

- Arguments are Functions that has inputs
  example: function square(num) {
  console.log(num \* num);
  }

- We can use the argument temporarily to store the data
- Functions can have as many arguments as needed.
  example: function area(length, width) {
  console.log(length \* width);
  }

  area(9,2); //18

RETURN Keyword

- Often we want a function to send back an output value
- We can replace console.log to Return so that it can return the value that came from the function
- We can use the return keyword to output a value from a function.

- There is a function that we can captialize the first char in a string:
  function captialize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

  var city = "paris"
  var captial = capitalize(city);

- Return keyword can also stop execution of a function
  So the whole point of a function is that it takes some sort of input and then it returns something.
  as soon as it returns that's just the end of the function's execution.

Function Declaration

- It is the complete declaration of a function
  Function Expression
- Function that is inside of a variable, that is temporary.

JavaScript Scope

- Scope is the context that code is executed in.
- Which variable that is visible in one function and could be different in another function.
- In the nested function there might be scoped varialbes.