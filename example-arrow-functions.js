var names = ['Chris', 'Grant', 'MawMaw', 'PawPaw'];

// names.forEach(function(name) {
//     console.log('forEach', name);
// });

// Statement
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });

// Expression Syntax
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Chris'));

// var person = {
//     name: 'Chris',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name)
//         });
//     }
// };
// person.greet();
// function add (a, b) {
//     return a + b;
// }

// function add(a, b) => {
//     return a + b;
// }


// ADD STATEMENT
var arrowStatement = (a, b) => {
    return a + b;
};

console.log(arrowStatement(5, 5));


// ADD EXPRESSION
var addExpression = (a, b) => a + b;

console.log(addExpression(8, 8));


// console.log(add(4, 4));
// console.log(add(12, 4));