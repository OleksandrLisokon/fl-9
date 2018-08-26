function getClosestToZero () {
    let closest = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (closest > Math.abs(arguments[i])) {
            closest = arguments[i];
        }
    }
    return closest;
}
getClosestToZero();