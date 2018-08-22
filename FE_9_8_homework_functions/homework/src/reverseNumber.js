function reverseNumber(n) {
    let reversed = ``;
    let str = n.toString();
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    if (n < 0) {
        return -parseInt(reversed);
    } else {
        return parseInt(reversed);
    }
}