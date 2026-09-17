// promise
const promise =new Promise ((resolve, reject) => {
    setTimeout(()=>{
        reject("found  data"); 
    },2000);
});

promise
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});