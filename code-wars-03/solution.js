function insertDash(num) {
   let newNum = num.toString().split('');
   
   for (let i = 0; i < newNum.length; i++){
     if(newNum[i] % 2  && newNum[i+1] % 2){
      newNum[i] += '-' ;
     }
   }
    return newNum.join('');
}

//refactored to arrow function

let insertDash = num => {
    let newNum = num.toString().split('');
   
    for (let i = 0; i < newNum.length; i++){
      if(newNum[i] % 2  && newNum[i+1] % 2){
       newNum[i] += '-' ;
      }
    }
     return newNum.join('');
}