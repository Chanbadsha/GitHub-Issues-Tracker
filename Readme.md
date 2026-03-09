### 1 Difference Between var, let, and const

- In JavaScript, `var`, `let`, and `const` are used to declare variables. The main difference between them is their scope, redeclaration, and reassignment behavior.

- In JavaScript, the var keyword is used to declare variables. It was the only way to declare variables before the introduction of let and const in ECMAScript 2015 (ES6). It has function scope, which means it is accessible throughout the entire function where it is declared. Variables declared with `var` can be redeclared and reassigned.

- `let` was introduced in ES6. It has block scope, meaning it only exists inside the block `{}` where it is defined. A variable declared with `let` cannot be redeclared in the same scope, but its value can be changed later.

- `const` was also introduced in ES6 and is used for variables whose value should not change. It has block scope like `let`, but it cannot be redeclared or reassigned after it is declared, and it must be initialized at the time of declaration.

### 2 What is the Spread Operator (...)?

- The spread operator (`...`) in JavaScript is used to expand elements of an array or properties of an object into another array or object. It makes copying, merging, and passing values easier and cleaner in modern JavaScript.

### 3 Difference Between map(), filter(), and forEach()

- `map()`, `filter()`, and `forEach()` are JavaScript array methods used to work with array elements.

- `map()` is used to create a new array by applying a function to every element of the original array. It returns a new array with the modified values.

- `filter()` is used to create a new array that only includes elements that match a specific condition. It returns a new array with the filtered values.

- `forEach()` is used to loop through each element of an array and perform an action. It does not return a new array; it only executes the function for each element.

### 4 What is an Arrow Function?

- An arrow function is a shorter way to write functions in JavaScript, introduced in ES6. It uses the `=>` syntax and makes the code cleaner and easier to read. Arrow functions are often used for simple functions and callbacks.

### 5 What are Template Literals?

- Template literals are JavaScript string literals, introduced in ES6, that allow for easier string interpolation, multi-line strings, and embedded expressions using backticks (`) instead of quotes.
