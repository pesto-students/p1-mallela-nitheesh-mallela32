
function resolve(){
    console.log("this is resolved");
}
function reject(){
    console.log("this is rejected");
}


function getNumber(resolve,reject){
    const num = Math.random()*10;
    console.log(num);
    if(num%5==0){
        console.log("this is in reject");
        reject();
    }else{
        console.log("this is in resolve");
        resolve();
    }
}

getNumber(resolve,reject);
