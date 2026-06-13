

//Asyncronous function 
//callbacks Example

function getData(dataId,getNextData){
    setTimeout(() =>{
        console.log("DateId : "+dataId)
        if(getNextData){
            getNextData()
        }

    },2000);
}
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{

            })
        })
    })
})

functiongetData(DataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data is :" + dataId)
            reject("its not fullfilled")
        },30000)
    })
}
getData(1).then(()=>getData(2)).then(()=>getData(()=>getData(3)).catch((err)=>)





