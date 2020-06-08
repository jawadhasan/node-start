
//This code uses setTimeOut to delay the printing of message by 4 seconds.
setTimeout(
    //following function is passed as an argument to setTimeOut
    ()=>{
        console.log('Hello after 4 seconds.')
    }, 4*1000 //delay in miliseconds
);


//example-2
const func = () => {console.log('Hello after 4 seconds.')};
setTimeout(func, 4*1000);

//example-3
/* 
For: func(arg1, arg2, arg3 .....) 
we can use: setTimeout(func, delay, arg1, arg2, arg3 ....)
*/
const rocks = who =>{
    console.log(who + ' rocks');
};
setTimeout(rocks, 2*1000, 'hexquote.com');

//Exsercise solution: Pass delay as an argument to the function
const theOneFunction = delay => {
    console.log('Hello after ' +  delay + ' seconds.');
};
setTimeout(theOneFunction, 4*1000, 4);
setTimeout(theOneFunction, 8*1000, 8);


//setInterval Example
// setInterval(
//     ()=>console.log('Hello after 3 seconds.'),3*1000
// );


//cancel Timer
const timer1 = setTimeout(
    ()=> console.log('you will not see this'),0
);
clearTimeout(timer1);//coz we are canceling it immediately


//example: Run only 5 times
let counter = 0;
const interval1 = setInterval(
    ()=> {
        console.log('Hello World.')
        counter += 1;
        if(counter === 5){
            console.log('Done.');
            clearInterval(interval1); //cancel
        }

    },1*1000
);