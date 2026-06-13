let arr=[1,2,3,4,5,65]

arr.pop(65)
let a =arr.includes(65)

console.log(a)
arr.pop()
console.log(arr)
 let Arr=arr.slice(1,3)
console.log(Arr)
let arr=[1,2,3,4,5,65]
arr.forEach(i => {
    console.log(i)
});

arr.map(i=>{
    console.log(i*2)
})
let salary=[10000,20001,30000,40000]
salary.map(i=>{
    console.log(i+i*0.03)
})
let salary=[10000,20001,30000,40000]
let even=salary.filter(i=>{
    return i%2===0 
})
console.log(even)


