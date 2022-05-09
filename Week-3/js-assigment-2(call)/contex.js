const example  = {
    name: 'Nitheesh',
    age: 40,
    ageSum :function sum(num1){
        this.age = this.age+num1;
    }
}

const example2 = {
    name: 'nitheesh',
    age: 50,
}


//bind() 
const bindExample = example.ageSum.bind(example2);
bindExample(100);
console.log(example2.age);


//call() 
example.ageSum.call(example2,50);
console.log(example2.age);

//apply 
example.ageSum.apply(example2,[50]);
console.log(example2.age);


