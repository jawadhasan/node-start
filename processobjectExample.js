console.log('current user is ', process.env.USER);

console.log('VAL1 = ', process.env.VAL1);
console.log('VAL2 = ', process.env.VAL2);

//1
{
//Block scope
}

//2
if(true){
    //Block scope
}

//3
for(var i =i; i<10; i++){
    //Block Scope
}


function sum(a,b){
    //function scope here
    var result = a + b;
}
