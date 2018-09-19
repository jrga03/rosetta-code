function factors (num) {
    // Good luck!
    const factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) factors.push(i);
    }

    return factors;
  }