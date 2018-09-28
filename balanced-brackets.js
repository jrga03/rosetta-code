function isBalanced (str) {
    const stack = [];
    if ( str ) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "[") {
                stack.push("[");
            } else if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }
    return true;
  }
  