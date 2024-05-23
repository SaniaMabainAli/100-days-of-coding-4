//Function Expressions vs. Function Declarations: Compare function expressions and declarations 
// by creating one of each that performs the same task, such as squaring a number.
function squaring(num) {
    var square = num * num;
    return square;
}
var square = function (num) {
    var square = num * num;
    return square;
};
console.log(squaring(5));
console.log(square(5));
