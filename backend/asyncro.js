// asynchronous is a non blocking architecture ,so that executive of one task isn't dependent on another.
// Tasks can run simultaneously

function sum(){
    setTimeout(()=>{
        console.log("2");

    },2000);
}
function example(){
    console,log("1");
    sum;
    
}