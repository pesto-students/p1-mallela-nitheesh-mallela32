
const fibonacci = {
    n : 5,
    [Symbol.iterator]() {
        let i = 1;
      let n1 = 0, n2 = 1, value;
      return {
        next() {
            if(i++<=5){
                 // It is equivalent to value = n1; n1 = n2; n2 = n1 + n2;
                [value, n1, n2] = [n1, n2, n1 + n2];
                 // The next line is equivalent to return {value: value};
                return {value : value, done:false};
            }else{
                return {done:true};
            }
         
        }
      }
    }
  };
   

for(let num of fibonacci){
    console.log(num);
}