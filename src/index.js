// class Foo {
//     #bar = "bar";

//     get bar() {
//         return this.#bar;
//     }

//     test(obj) {
//         return #bar in obj;
//     }
// }

// var obj = new Foo();
// console.log(obj.bar);

const foo    = { name: 'tom',   age: 30, nervous: false };
const bar    = { name: 'dick',  age: 40, nervous: false };
const baz    = { name: 'harry', age: 50, nervous: true };


'Bad Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);



'Good Code ✅'

// Computed Property Names

console.log('%c My Friends', 'color: green; font-weight: bold; ' )
console.log({ foo, bar, baz });

// Console.table(...)
console.table([foo, bar, baz])

// Console.time
console.time('looper')

let i = 0;
while (i < 1000000) { i ++ }

console.timeEnd('looper')