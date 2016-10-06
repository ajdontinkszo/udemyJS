var a = 3 + 4 * 5;
console.log(a);

var a = 2, b = 3, c = 4;
a = b = c; //precedence: right-to-left

console.log(a);
console.log(b);
console.log(c);

var a = 1 + '2';
console.log(a);

console.log(3 < 2 < 1); 

var a = 0;
var b = false;

if (a !== b) {
    console.log('They are equal!');
} else {
    console.log('Nope,  not equal.');
}