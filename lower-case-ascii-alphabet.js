function lascii (cFrom, cTo) {
    // Good luck!
    const start = cFrom.charCodeAt();
    const end = cTo.charCodeAt();
  
    const result = [];
    for (let i = start; i <=end; i++) {
      result.push(String.fromCharCode(i));
    }
  
    return result;
  }