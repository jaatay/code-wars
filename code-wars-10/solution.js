
//part 1
function find_average(array) {
    let total = array.reduce((x, y)=>{
    return x + y;
   })
   
   return total/array.length;
   }

//part 2
   function filter_list(list) {
    return list.filter(x => typeof x !== 'string');
  }

//part 3
  function double(array) {
    return array.map(x=> x*2);
}