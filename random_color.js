
let boxes = document.body.querySelector(".container").children
// let boxes = document.body.getElementsByClassName("box")

console.log(boxes)

let array=[]
for (let i = 0; i < 4; i++) {
     array[i] = boxes[i];    
}
console.log(array)

function getrandomcolor()
{
    let val1 =  Math.ceil(0 +(Math.random()*255))
    let val2 =  Math.ceil(0 +(Math.random()*255))
    let val3 =  Math.ceil(0 +(Math.random()*255))
    return `rgb( ${val1}, ${val2}, ${val3})`
}

array.forEach(e=>{
   // e.style.backgroundcolor="blue"
    e.style.color= getrandomcolor()
    e.style.backgroundColor=getrandomcolor()
})
