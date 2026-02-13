new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        reject("Random failure");
    } else {
        setTimeout(() => {
            resolve("Success after 2 seconds");
        }, 500);
    }
})
    .then((result) => {
        console.log(result);
        return "Success Youhuu";
    })
    .then((successStr) => {
        console.log(`Previos operation result: ${successStr}`);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.log("Promise is settled (fulfilled or rejected)");
    });


// Promise.resolve("Immediate success")
//     .then((result) => {
//         console.log(result);    
//     })

// Promise.reject("Immediate failure")
//     .catch((err) => {
//         console.error(err);
//     });



async function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function asyncFunc(max = 10) {
    const randomNum = await getRandom(1, max);
    return new Promise((resolve, reject) => {
        if(randomNum <= 5) {
            setTimeout(() => {
                resolve(`Random number ${randomNum} is less than or equal to 5`);
            }, randomNum * 100);
        } else {
            setTimeout(() => {
                reject(`Random number ${randomNum} is greater than 5`);
            }, randomNum * 100);
        }
    })
}


// Promise.all([asyncFunc(5), asyncFunc(5), asyncFunc(5), asyncFunc(5), asyncFunc(5), asyncFunc(10)])
//     .then(results => {
//         console.log(results)
//         console.log("All promises fulfilled:");
//         results.forEach(result => console.log(result));
//     })
//     .catch(err => {
//         console.error("At least one promise rejected:");
//         console.error(err);
//     });

// Promise.race([asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10)])
//     .then(result => {
//         console.log("First promise fulfilled:");
//         console.log(result);
//     })
//     .catch(err => {
//         console.error("First promise rejected:");
//         console.error(err);
//     }); 


// Promise.any([asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10)])
//     .then(result => {
//         console.log("First promise fulfilled:");    
//         console.log(result);
//     })
//     .catch(err => {
//         console.error("All promises rejected:");
//         console.error(err);
//     });

Promise.allSettled([asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10), asyncFunc(10)])
    .then(results => {
        console.log("All promises settled:");
        console.log(results);
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled: ${result.value}`);     
            } else {
                console.error(`Promise ${index + 1} rejected: ${result.reason}`);
            }
        });
    })
    .catch(err => {
        console.error("Error in processing promises:");
        console.error(err);
    });
