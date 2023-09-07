// const
const fullName = 'Nathaniel Geiger'
console.log(fullName)
// let
let data = []
console.log(typeof(data))
data.push('Nathaniel')
//console.log(data)
data.unshift('Geiger')
//console.log(data)
//console.log(data[0])
for(let i =0; i < data.length; i++) {
    console.log(data[i])
}
console.log(typeof(data))
// var

//Function ES5
function addTwoNumbers(num1, num2) {
    return num1+num2
}

function addThreeNumbers(num1, num2, num3) {
    return num1+num2+num3
}

console.log(addThreeNumbers(1,2,9))

//ES6
const addNumbers = (num1, num2) => {num1+num2}
