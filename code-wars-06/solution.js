function isNice(arr){
    let isTrue = 0;
    
     if (arr.length < 1){
     return false;
     }
     
    for (var i = 0; i < arr.length; i++){
      if (arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)){
        isTrue += 1;
        } 
      }
    
      if (isTrue === arr.length) {
      return true;
      } else {
      return false;
      }
   }