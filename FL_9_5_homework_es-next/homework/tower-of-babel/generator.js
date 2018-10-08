const max = process.argv[2];
let FizzBuzz = function*() {
    let pre = 1;

    while (pre <= max) {
      let value = pre;
      pre++;
      if (value % 15 === 0) value = 'FizzBuzz';
      else if (pre % 3 === 0) value = 'Fizz';
      else if (pre % 5 === 0) value = 'Buzz';
      yield value;
    }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
