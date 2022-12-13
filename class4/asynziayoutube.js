// // // // // // // // function doSomething() {
// // // // // // // //     setTimeout(() => {
// // // // // // // //         console.log("Ahsan");
// // // // // // // //     }, 2000);

// // // // // // // // }
// // // // // // // // console.log("Hello");
// // // // // // // // doSomething();
// // // // // // // // doSomething1();
// // // // // // // // function doSomething1() {
// // // // // // // //     setTimeout(() => {
// // // // // // // //         console.log("End");
// // // // // // // //     }, 2000);

// // // // // // // // }

// // // // // // // function doA() {
// // // // // // //     setTimeout(() => {
// // // // // // //         return "Hello World!!!"
// // // // // // //     }, 1000);

// // // // // // // }
// // // // // // // let hello = doA()
// // // // // // // console.log(hello);
// // // // // // // console.log("Ahsan");

// // // // // // // /// Multiple functions

// // // // // // function doSomething(callback) {
// // // // // //     setTimeout(() => {
// // // // // //         return callback("Hello World!!! It is Ahsan")
// // // // // //     }, 2000);
// // // // // // }
// // // // // // function mycallback(parameter) {
// // // // // //     console.log(parameter);
// // // // // // }
// // // // // // doSomething(mycallback)
// // // // // // console.log("It is the end of program");

// // // // // function Eggfry(Eggfried) {
// // // // //     setTimeout(() => {
// // // // //         console.log("Conditions");
// // // // //         return Eggfried("Your egg is fried Take it now or never")
// // // // //     }, 3000);
// // // // // }
// // // // // function EgghasFried(para) {
// // // // //     setTimeout(() => {
// // // // //         console.log(para);
// // // // //     }, 2000);

// // // // // }
// // // // // Eggfry(EgghasFried)

// // // // // console.log("Fry egg for me");

// // // // ///Es5 functions
// // // // function egg(cb) {
// // // //     setTimeout(() => {
// // // //         cb("Egg is fried")
// // // //     }, 2000);
// // // // }
// // // // function bread(param) {
// // // //     setTimeout(() => {
// // // //         param("Bread is ready")
// // // //     }, 2000);
// // // // }
// // // // bread(function (par) {
// // // //     console.log(par);
// // // //     egg(function (par1) {
// // // //         console.log(par1);
// // // //     })
// // // // })


// // // // //ES6 function

// // // function egg(cb) {
// // //     setTimeout(() => {
// // //         cb("Egg is fried")
// // //     }, 2000);
// // // }
// // // function bread(param) {
// // //     setTimeout(() => {
// // //         param("Bread is ready")
// // //     }, 2000);
// // // }
// // // bread((par) => {
// // //     console.log(par);
// // //     egg((par1) => {
// // //         console.log(par1);
// // //     })
// // // })


// // ///Promises
// // ///Variable case
// // // let newpromise = new Promise((resolve, reject) => {
// // //     let mood = 4;
// // //     if (mood >= 6) {
// // //         console.log("I can obey your order");

// // //     }
// // //     else {
// // //         console.log("I can not obey order.My mood is off");
// // //     }
// // // })
// // // newpromise.then((abc) => { console.log(abc); }).catch((ab) => {
// // //     console.log(ab);
// // // })

// // ///function case of promises
// // function getPromise() {
// //     return new Promise((resolve, reject) => {
// //         let mood = 4;
// //         if (mood >= 5) {
// //             console.log("I can do");
// //         }
// //         else {
// //             console.log("I can not do Not now but later can be");
// //         }
// //     })

// // }

// // getPromise().then((a) => {
// //     console.log(a);
// // }).catch((b) => { console.log(b); })


// ///Two promise chain statement of then

// function egg() {
//     return new Promise((resolve, reject) => {
//         let mood = 7;
//         setTimeout(() => {
//             if (mood >= 5) {
//                 console.log("Your egg is ready");
//             } else {
//                 console.log("I am too tired");
//             }
//         }, 2000);
//     })
// }


// function bread() {
//     return new Promise((resolve, reject) => {
//         let mood = 4;
//         setTimeout(() => {

//             if (mood >= 5) {
//                 console.log("Your bread is ready");
//             } else {
//                 console.log("I am too tired");
//             }
//         }, 2000);
//     })
// }
// egg().then((a) => {
//     console.log(a);
//     return bread();
// // }).then((b) => {
// //     console.log(b);
// // }).catch((c) => {
// //     console.log(c);
// // })

// ///Asyn await



// function egg() {
//     return new Promise((resolve, reject) => {
//         let mood = 7;
//         setTimeout(() => {
//             if (mood >= 5) {
//                 console.log("Your egg is ready");
//             } else {
//                 console.log("I am too tired");
//             }
//         }, 2000);
//     })
// }


// function bread() {
//     return new Promise((resolve, reject) => {
//         let mood = 4;
//         if (mood >= 5) {
//             console.log("Your bread is ready");
//         } else {
//             console.log("I am too tired");
//         }
//     })
// }

// async function result() {
//     try {
//         await egg()
//         console.log(result);
//         await bread()
//         console.log(result);

//     } catch (error) {
//         console.log(error);
//     }
//     try {
//         await bread()
//         console.log(result);

//     }
//     catch (error) { console.log(error); }
// }
// result()


function call() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Callback1");
        }, 2000);


        for (let index = 0; index <= 0; index++) {

            setTimeout(() => {
                console.log("Callback2");

            }, 1000)
            setTimeout(() => {
                console.log("Callback2");

            }, 2000)
            setTimeout(() => {
                console.log("Callback2");

            }, 3000)
        }
    })
}

async function result() {
    try {
        await call()
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}
result()


function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world")
        }, 2000);
    })
}
