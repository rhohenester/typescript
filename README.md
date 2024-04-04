# Typescript - What is TypeScript?
- A JavaScript Superset.
- A Language building upon JavaScript.
- Adds new Features + Advantages to JavaScript.
- Browser or Node.js CAN'T execute it.
- Powerful compiler that converts everything to JavaScript.
- Features are compiled to JS "workaround", and possible errors are thrown.

# Why TypeScript?

(JavaScript)
```
function add(num1, num2){
    return num1 + num2;
}
//Calling a function with two strings, will result in logical mistake. Instead of a math calculation, JavaScript will return a concatenation (23). That would not happen with TS.
console.log(add('2', '3'));
```
# Mitigation Strategies JS
- Add if check to add function Validate & sanitize user input -> Developers can still write invalid code!
- TypeScript is a "Tool" that helps developers write better code. 

# Invoke typeScript compiler
```
tsc filename.ts

```
