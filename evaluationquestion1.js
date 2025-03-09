function createOrderManager(){
    let newarr=[]
    return {
        addOrder:function (dict){
            newarr.push(dict)
        },
        updateOrder : function(id,givenStatus){
            let ans=newarr.map((ele,i)=>{
                if(ele.id==id){
                   return  (ele.status=givenStatus ) 
                }
            })
            newarr = ans
        },
        filterOrders:function(input){
             newarr.filter((ele,i)=>{
                if(ele.status==input){
                     console.log(ele)  
                    //  return ele  
                }  
            }) 
        },
        sortOrders:function(by){
            if(by=="date"){
                let an1=newarr
                let ans = ans1.sort((a,b)=>(a.createdAt-b.createdAt))
                console.log(ans)
            }
            else if(by=="status"){
                let ans1=newarr 
                let ans =ans1.sort((a,b)=>(a.status.localeCompare(b.status)))
                console.log(ans)
            }
        },
        getTotalRevenue:function(){
            let temp=[]
            let ans= newarr.filter((ele,i)=>{
                temp.push(ele.items)
            })
            price=[]
            quantity=[]
            for(let i=0;i<temp.length;i++){
                price.push(temp[i][0].price)
                quantity.push(temp[i][0].quantity)
                // console.log(temp[i][0].quantity)
            }
            // console.log(price)
            let sum= 0 
            for(let i=0;i<price.length;i++){
                sum+=(price[i]*quantity[i])
            }
            // console.log(sum)
            return sum
            // console.log(price+quantity)
            // newarr.reduce((acc,curr)=>{
            //     return acc.items
            //     //  acc+(curr.items.price*curr.items.quantity)
            //     // //  console.log(acc) 
            //     // return acc
            //     })
            
        },
        exportOrders:function(){
            let str = JSON.stringify(newarr) 
            return str
        }

    }
}
const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
manager.filterOrders("pending");
// console.log(manager.exportOrders())
// [
//     {
//       "id": 1,
//       "customerName": "Alice",
//       "items": [{ "name": "Laptop", "price": 1000, "quantity": 1 }],
//       "status": "pending",
//       "createdAt": "2024-03-01T00:00:00.000Z"
//     }
//   ]
console.log(manager.getTotalRevenue());



  
  