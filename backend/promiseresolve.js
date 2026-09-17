const promise =new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve("found  data"); 
    },2000);
});

promise
.then((result)=>{
    console.log(result);
});