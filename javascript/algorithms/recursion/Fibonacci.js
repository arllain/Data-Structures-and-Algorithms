class Fibonacci {
    fibonacciRecursive(n) {
        // O(n)
        if (n < 2) {
            return n;
        }

        return this.fibonacciRecursive(n - 1) + this.fibonacciRecursive(n - 2);
    }

    fiibonacciInteractive(n) {
        // O(2^n)
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        return arr[n];
    }
}

export default Fibonacci;
