function sumArray(array) {
    // input validation
      if (!array || array.length <= 1) {
        return 0;
      }
    
      let total = array.reduce((a, b) => a + b, 0);
      let min = Math.min(...array);
      let max = Math.max(...array);
    
      return total - min - max;
    }