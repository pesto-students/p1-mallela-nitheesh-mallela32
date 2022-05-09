//*Question
function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  const stack = createStack(); 
  stack.items = [10, 100, 1000]; 
  stack.push(10);
  stack.push(5);
  stack.pop(); 
  
console.log(stack.items);


/*the items should not be public so we need to keep items block scoped to achive that w need to use let (or) const */

 function createStack() {
    
    return {
        items : [] ,
      push(item) {
       this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  
  const stack = createStack();
 stack.items = [10, 100, 1000];
  console.log(stack.items);
  stack.push(10);
  stack.push(5);
  stack.pop(); 
  stack.items; 
  

