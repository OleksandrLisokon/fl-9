var inputs = process.argv.slice(2);
var result = inputs.map((item) => item[0])
                    .reduce((pre, curr) => pre + curr);
console.log(result);