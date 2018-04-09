function formatWords(array){
  let newarray = [];
  if (array === [] || array === null || array === undefined){
  return "";
  }
  for (let i = 0; i < array.length; i++){
    if(array[i] !== ''){
    newarray.push(array[i])
    }
  }
  if(newarray === []){
    return "";
  }
  if(newarray.length === 2){
    return `${newarray[0]} and ${newarray[1]}`;
  }
  if(newarray.length > 2){
    let longArray = [];
    for(let j = 0; j < newarray.length; j++){
      longArray.push(`${newarray[j]}`);
    }
    let lastWord = longArray.pop();
    return `${longArray.join(', ')} and ${lastWord}`;
  }
  return newarray;
}