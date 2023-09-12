//NOTE if no id is specified it will return a NULL response
// const p = document.getElementById('message'); // querySelector() can be used for general types such as <p> or <h1>
// console.log(p);

let btn = document.getElementsById('btnRadio')
let output = document.getElementById('output')


btn.addEventListener('click', () => {
    let languages = document.getElementsByName('language')
        languages.forEach((language) => {
            if(language.checked) {
                output.innerText = `You code with : ${language.value}`
            }
        })
})