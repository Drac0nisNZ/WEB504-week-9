//NOTE if no id is specified it will return a NULL response
let btn = document.getElementById('btnCount')
btn.addEventListener('click',() => {
    let hTwoHeader = document.getElementsByTagName('h2')
    alert(`The number of H2 tags are: ${hTwoHeader.length}`)
})









// const p = document.getElementById('message'); // querySelector() can be used for general types such as <p> or <h1>
// console.log(p);

// let btn = document.getElementById('btnRadio')
// let output = document.getElementById('output')


// btn.addEventListener('click', () => {
//     let languages = document.getElementsByName('language')
//         languages.forEach((language) => {
//             if(language.checked) {
//                 output.innerText = `You code with : ${language.value}`
//             }
//         })
// })