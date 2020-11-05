

// 1

function promise1 () {

}



// 2


function promise1 () {
    return new Promise();
}




// 3

function promise1 () {
    return new Promise((resolve, reject) => {

    })
}



// 4

function promise1() {
    return new Promise((resolve) => {
        resolve();
    })
};






// 5

promise1()
    .then()
    .catch()







// 6

promise1()
    .then(() => {console.log('success')})
    .catch(() => { console.log('there was an error')})






// 7

function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {

    })
}





// 8

function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        }
    })
}





// 9

function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}


// 10


function promise2(errorBoolean)
{
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}


promise2(true).then(data => {
    console.log(data)})
        .catch(err => {
            console.log(err)
})


promise2(false).then(data => {
    console.log(data)})
        .catch(err => {
            console.log(err)
})






// 11

const promise3 = new Promise((resolve, reject) => {
    resolve('promise 3 complete')
});




// 12

const promise4 = new Promise((resolve, reject) => {
    resolve('Promise4 is complete')
});




// 13

const promise5 = new Promise((resolve, reject) => {
    resolve('promise 5 complete')
});


// 14 

promise3
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })




// 15

Promise.all([promise3,promise4,promise5])
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })






// 16

// step 12 modified










// 17





// 18
let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/15', true);

xhr.onload = function () {
	console.log(JSON.parse(this.responseText).value.joke);
};

xhr.send();




















































// //const myPromise = new Promise((resolve, reject) => {
//     reject();
//     resolve();
// })