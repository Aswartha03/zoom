// // // // console.log("hi")
// // // // console.log("Hii2")
// // // // // Async:
// // // // // // setTimeout(Callback,delay) 
// // // // // delay - ms 
// // // // // 1 sec=1000 ms
// // // // // setIn//terval(callback,dalay)
// // // // setTimeout(()=>{
// // // //     console.log("Aswartha")
// // // // },10000) 
// // // // timer =5 
// // // // let id= setInterval(()=>{
// // // //     console.log("presnet time"+timer+ "remaining time"+(timer-1))
// // // //     timer-=1
// // // //     if(timer==0){
// // // //         clearInterval(id)
// // // //         console.log("completed")
// // // //     }
// // // // },1000)
// // // // console.log("ending")
// // // // clearInterval and clearTimeout
// // // // 5g, 4g , 3g  
// // // // Promises- Async Js method
// // // // 1. fullfilled 
// // // // 2.// rjected 
// // // // 3//. p//ro//cesseing}
// // // // let mypromise = new Promise((resolve,reject)=>{})
// // // //         setTimeout(()=>{
// // // //         let value = Math.random()
// // // //         if(value>0.5){
// // // //             resolve("Value is greater then 0.5: "+value)
// // // //         }
// // // //         else{
// // // //             reject("value is less than 0.5: "+value)
// // // //         }
// // // //     },1000)

// // // // })
// // // // console.log(mypromise)
// // // // .then - completed 
// // // // .catch - regected
// // // // mypromise
// // // // .then((result)=>{
// // // //     console.log(result)
// // // // })
// // // // .catch((result)=>{
// // // //     console.log(result)
// // // // })
// // // // .finally(()=>{
// // // //     console.log("Automatically printed")
// // // // })
// // // //  setTImeout - code exe in specified tiem at one time only 
// // // //  setInterval- code automatically continue exe afete every speciied time period

// // // //  clearInterval adn clearTimeout
// // // //  promises -
// // // //  .then - resolve
// // // //  .catch - regect 
// // // //  callback hell or pyrimd of moon 
// // // // Promise chaining 
// // // // boook tickets-> going to thatere -> completed the movie 
function booktickets(){
    return  new Promise((res,rej)=>{
        setTimeout(()=>{
            res()
            console.log("Booked")
            // callback()
        },1000)
    })
}
function gototheatre(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej()
            console.log("Going to theatre")
            // callback()
        },1000)
    })
}
function Completed(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej()
            console.log("completed the movie. Movie is good")
            // rej()
            // callback()
        },1000)
    })
}

//  Promise Chaining
booktickets()
.then(()=>gototheatre())
.then(()=>Completed())
.then(()=>{
    console.log("All are completed")
})
.catch(()=>{
    console.log("Error Occurs")
})
.finally(()=>{
    console.log("Finally output is come")
}) 







// // // // booktickets(()=>{
// // // //     gototheatre(()=>{
// // // //         Completed(()=>{
// // // //             console.log("All functions are completed")
// // // //         },1000)
// // // //     })
// // // // })
// // // // callback hell or pyramid of moon - > Very hard to read and understanding 
// // // // gototheatre()
// // // // Completed()
// // // // Promise Chainig 
// // // // Promise1->promise2->
// // // // promise3-continues 

// // console.log("Starting")
// // console.log("Second")
// // setTimeout(()=>{
// //     console.log("Third")
// // },2000)
// // console.log("fourth")
// // setTimeout(() => {
// //     console.log("Mahesh")
// // }, 1000);
// // console.log("ending")
// // let timer=10
// // let id= setInterval(()=>{
// //     console.log("Rohit",timer)
// //     timer-=1
// //     if(timer==0){
// //         clearInterval(id)
// //         console.log("Stopped")
// //     }
// // },1000)

// // let alarm=function(delay){
// //     setTimeout(()=>{
// //         console.log("Wake up!.It's time to go")
// //     },delay)
// // }
// // alarm(5000)
// function timer(seconds,a,duration=100){
    
// //     let time = seconds
// //     let v=0
// //     let id= setInterval(()=>{
// //       if(fun(a)){
// //         clearInterval(id)
// //         console.log("Stopped with  a char:")
// //         return 
// //       }
// //       else if(time>0){
// //       console.log("Present time is: "+time+" seconds and Remainig time is: "+ (time-1)+" seconds")
        
// //       }
// //       else{
// //         clearInterval(id)
// //             // console.log("over")
// //           console.log("Countdown complete!")
// //       }
// //       time-=1
// //     },duration)
// //     function fun(a){
// //     setTimeout(()=>{
// //     //   console.log(stopwithchar(a))
// //             return stopwithchar(a)
// //     },500)
// //     }
    
// //     // let v=0
// //     function stopwithchar(s){
// //       // let id=setTimeout(()=>{
// //         let str="abcdefghijklmnopqrstuvwxyz"
// //         if(str.includes(s)){
// //           // clearTimeout(id)
// //             // console.log("Stop")
// //             // v=1
// //             console.log(true)
// //             return 
// //         }

// //         // else{
// //         //     return false
// //         // }       
// //   }
  
// // // }, 2000)
  
// //   }
// //   timer(10,"a")
// // // }/


// // // setTimeout(()=>{
// // //   stopwithchar("c")
// // // },2000)
// function timer(seconds,duration=100){
    
//     let time = seconds
//     let v=0
//     let id= setInterval(()=>{
//       if(v==1){
//         clearInterval(id)
//         console.log("Completed whith char")
//         return 
//       }
//       else if(time>0){
//       console.log("Present time is: "+time+" seconds and Remainig time is: "+ (time-1)+" seconds")
        
//       }
//       else{
//         clearInterval(id)
//             // console.log("over")
//           console.log("Countdown complete!")
//       }
//       time-=1
//     },duration)
//     setTimeout(()=>{
//       stopwithchar("c")
//       console.log("sumant")
//     },500)
//     // let v=0
//     function stopwithchar(s){
//       // let id=setTimeout(()=>{
//         let str="abcdefghijklmnopqrstuvwxyz"
//         if(str.includes(s)){
//           // clearTimeout(id)
//             // console.log("Stop")
//             v=1
//         }         
//   }
  
// // }, 2000)
  
//   }
//   timer(10)
// // }/


// // setTimeout(()=>{
// //   stopwithchar("c")
// // },2000)