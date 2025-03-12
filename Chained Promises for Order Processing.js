function placeOrder(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          let num = "1234567890"
          let value= ""
          for(let i=0;i<2;i++){
            value+=num[Math.floor(Math.random()*num.length)]
            
          }
          value = Number(value)
          res(value)
          console.log("Order ID:",value)
        }, 10);
      })
  }
  function processOrder(id1){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        // res(id1)
        let num = "1234567890"
          let value= ""
          for(let i=0;i<2;i++){
            value+=num[Math.floor(Math.random()*num.length)]
            
          }
          value = Number(value)
          res(value)
        console.log("Processing Code:",value)
      })
    })
  }
  function confirmOrder(id2){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        // res(id2)
        let num = "1234567890"
          let value= ""
          for(let i=0;i<2;i++){
            value+=num[Math.floor(Math.random()*num.length)]
            
          }
          value = Number(value)
          res(value)
        console.log("confirmation Number:",value)
      })
    })
  }
  function calculateFinalResult(id3){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        let num = "1234567890"
          let value= ""
          for(let i=0;i<2;i++){
            value+=num[Math.floor(Math.random()*num.length)]
            
          }
          value = Number(value)
          
        // rej("Network Issue")
        console.log("Extra Number:",value)
        value +=id3
        res(value)
      })
    })
  }
  placeOrder()
  .then((orderId) => processOrder(orderId)) 
  .then((processingCode) => confirmOrder(processingCode))  
  .then((confirmationNumber) => calculateFinalResult(confirmationNumber))  
  .then((finalResult) => console.log(`Final Result: ${finalResult}`))  
  .catch((error) => console.log(`Error: ${error}`));