const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let pre = 1;
    
    return {
        next() {
            if (pre > max) return { done: true };
            let value = pre;
            if (value % 15 === 0) value = 'FizzBuzz';
            else if (value % 3 === 0) value = 'Fizz';
            else if (pre % 5 === 0) value = 'Buzz';
            pre++;

            return {done: false, value: value};
        }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}