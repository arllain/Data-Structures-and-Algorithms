class Factorial {
    findFactorialRecursive(number) {
        if (number === 2) {
            return 2;
        }

        return number * this.findFactorialRecursive(number - 1);
    }

    findFactorialInteractive(number) {
        let answer = 1;
        if (number === 2) {
            answer = 2;
        }

        for (let i = 2; i <= number; i++) {
            answer = answer * i;
        }
        return answer;
    }
}

export default Factorial;
