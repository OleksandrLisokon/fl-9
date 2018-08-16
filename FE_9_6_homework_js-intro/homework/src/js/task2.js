let maxAngle = 180;
let a = parseFloat(prompt('Please enter a length: '));
let b = parseFloat(prompt('Please enter b length: '));
let angle = parseFloat(prompt('Please enter α- angle: ')) / maxAngle * Math.PI;
let c = Math.sqrt(a*a + b*b - 2*a*b*Math.cos(angle));
let square = a * b * Math.sin(angle) / 2;

if (isNaN(a) || isNaN(b) || isNaN(angle) || a.toFixed(2) <= 0) {
    console.log('Invalid data');
} else if (b.toFixed(2) <=0 || angle.toFixed(2) <=0 || angle.toFixed(2) >= maxAngle) {
    console.log('Invalid data');
} else {
    console.log('c length: ' + +c.toFixed(2) + '\nTriangle square: ' + +square.toFixed(2)
    + '\nTriangle perimeter: ' + +(a + b + c).toFixed(2));
}
