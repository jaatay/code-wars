function cubeOdd(array) {

    var sum = 0;
      array.forEach((number) =>{
        if(number % 2 !== 0) {
          sum += cube(number);
        }
      });
      if(sum) {
        return sum;
      } else if (sum === 0) {
      return 0;
      } else {
        return undefined;
      }
    }
    
    function cube(num) {
      return num * num * num;
    
    
    return 0;
    }