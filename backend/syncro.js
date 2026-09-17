// Synchronous is a blocking architecture so the execution of each operation is dependent on the completion of the one before it
function sum() {
    console.log("2");
}

function example() {
    console.log("1");
    sum();
    console.log("3");
}

example();

// promise:it is an object that represent the work is done or not 