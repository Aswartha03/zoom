function createFunctionRegistry(){
    let Names=[]
    return {
        registerFunction:function (name,fn){
            let dict = {Name:name,fun:fn}
            Names.push(dict)
            // this.name=name 
            // console.log(this.name)
            // this.fn=fn
            // console.log(fn)
        },
        executeFunction : function (name,args,context=null){
                for(let i=0;i<Names.length;i++){
                    // if(Names[i][0])
                        if(Names[i].Name==name){
                                // console.log(args*2)
                                return args*2
                        }
                // }
            
                }
            // if(this.name==name){


            //         console.log(args*2)
                    
            //     }
            // console.log(args*2)
        },
        mapFunction: function (name,dataArray){
                let ans = dataArray.map(((ele)=>(ele*2)))
                console.log(ans)
        },
        filterFunction: function (name,dataArray){
            let ans= dataArray.filter((ele)=>{
                ele=ele>2 
                return ele
            })
            // return ans
            console.log(ans)
        },
        reduceFunction : function(name,array,initial){
           let value  = array.reduce((a,b)=>{
                return a+b
                // console.log(a) 
                // return a
            },initial)
            console.log(value)
        },
        executeFunctionAsync:function(name,args,delay){
            let mypromise = new Promise((res,rej)=>{
                setTimeout(()=>{
                    res()
                    console.log(args*2)
                },delay)
            })
            mypromise
            .then((result)=>{
                return ("resolves after a "+delay+" milliseconds")

            })
            .catch((result)=>{
                return ("Not finshed")
            })

            
            // setTimeout(()=>{
            //     console.log()
            // })
        },
        exportRegistery:function(){
            // console.log(Names)
            let str = JSON.stringify(Names)
            // console.log(str)
        }


    }

}
const registry = createFunctionRegistry();
registry.registerFunction("double", x => x * 2);
console.log(registry.executeFunction("double", [5]));
registry.mapFunction("double",[1,2,3,4,5])
registry.filterFunction("double",[2,3,4,5])
registry.reduceFunction("double",[1,2,3,4,5],5)
registry.executeFunctionAsync("double",4,2000)
registry.exportRegistery()