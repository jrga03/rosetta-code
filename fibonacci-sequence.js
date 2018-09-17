function fibonacci(n) {
    // Good luck!
    let prev = 0;
    let next = 1;
    let current = 1;
    let index = 2;

    do {
        current = prev + next;
        prev = next;
        next = current;
        index++;
    } while (index < n)

    return current;
  }