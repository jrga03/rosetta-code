function binom (n, k) {
    const factorial = (num) => {
      if (num === 0) return 1;
      return num * factorial(num - 1);
    }
  
    return factorial(n) / (factorial(n - k) * factorial(k))
  }