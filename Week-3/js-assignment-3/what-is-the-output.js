function createIncrement() {
    let count = 0;
    function increment() { 
      count++;
    }
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log();

/*
  function  create() return two functions increment and log.

  we are destructuring  increment and log by calling craete increment;


  we increament three times and we logged  once.
  
  the output is Count is 0 beacuase before calling increment we already printed the messeage so thats why message is zero; 

*/