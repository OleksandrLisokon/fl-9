function isPrime (num) {
    let magicNum = 3;
    if (num <= magicNum) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; 
            } else {
                return true;
            }
        }
    }    
}
isPrime();

