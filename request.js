let fakeRequest = function (exReject = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exReject) {
                reject("Expected rejected!")
            } else resolve("Completed!");
        }, 2000);

    })
}

/**
 * Async/Await vs Promise Chain
 */
// Error Handling, then -> catch -> finally
let promiseRequest = () => {
    fakeRequest(false).then(res => console.log(res)).catch(err => console.log(err)).finally(() => console.log("Success/failed i'll be appear!"));
    // fakeRequest(true).then(res => console.log(res)).catch(err => console.log(err)).finally(() => console.log("Success/failed i'll be appear!"));
    // console.log("Promise request")
}
promiseRequest();

// Error Handling, try -> catch -> finally
let asyncRequest = async () => {
    try {
        let res = await fakeRequest(true);
        // console.log(res);
    } catch (e) {
        // console.log(e)
    }
    // console.log("Async/Await request finished.")
}
asyncRequest() // return a promise
