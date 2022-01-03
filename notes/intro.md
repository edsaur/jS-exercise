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

- If, Else If, Else
  - “If” statements: where if a condition is true it is used to specify execution for a block of code.
  - “Else” statements: where if the same condition is false it specifies the execution for a block of code.
  - “Else if” statements: this specifies a new test if the first condition is false.
