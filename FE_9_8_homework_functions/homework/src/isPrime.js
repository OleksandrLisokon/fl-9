function isPrime (num) {
    if (num < 4) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false; 
            } else {
                return true;
            }
        }
    }    
}

