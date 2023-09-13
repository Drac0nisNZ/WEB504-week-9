// let current = document.querySelector('.current')
// let nextSibling = current.nextElementSibling

// while(nextSibling) {
//     nextSibling = nextSibling.nextElementSibling
// }

// let current = document.querySelector('.current')
// let prevSibling = current.prevElementSibling

let getSiblings = function(e) {
    let siblings = []

    if(!e.parentNode) {
        return siblings
    }
    let sibling = e.parentNode.firstChild

    while(sibling) {
        if(sibling.nodeType == 1 && !== e) {
            siblings.push(sibling)
        }
        sibling = sibling.nextSibling
    }
    return siblings
}
// //NOTE - this first comment sets up the note status 
// let note = document.querySelector('.note')

// //NOTE - this gets the note to read by target
// console.log(note.parentnode)



// let menu = document.getElementByClassId('menu')
// let items = menu.getElementsByClassName('item')


// let data = [].map.call(items, item => item.textContent) // ['JavaScript', 'CSS', 'HTML', 'TypeScript']
//NOTE - this builds an array for storing data selected by class and content

//NOTE if no id is specified it will return a NULL response

// let btn = document.getElementById('btnCount')
// btn.addEventListener('click',() => {
//     let hTwoHeader = document.getElementsByTagName('h2')
//     alert(`The number of H2 tags are: ${hTwoHeader.length}`)
// })

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