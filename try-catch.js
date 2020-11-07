


try{
    foo()
} catch(err){
    console.log(err.message);
} finally{
    console.log('This is always executed');
}

// 6

function fizz() {
    throw new Error("my error message");
}




// 7

try{
    fizz()
} catch{
    console.log(Error.message);
}