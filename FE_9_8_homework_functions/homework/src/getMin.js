function getMin () {
    let min = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}
getMin();