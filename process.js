const fs = require('fs')

console.log(1)

/*
// CALL BACK
const callback = (err, contents) => {
    console.log(err, String(contents))
}

fs.readFile('./in1.txt', callback)
fs.readFile('./in2.txt', callback)
*/



// PROMISSE
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err,contents) => {
        if(err){
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

/*
readFile('./in1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('./in2.txt')
    })
    .then(contents => {
        console.log(String(contents))
    }) 
*/

// ASYNC/AWAIT

//função async retorna uma promisse

const init = async() => {
    try{
        const contents = await readFile('./in1.txt')
        const contents2 = await readFile('./in2.txt')
        console.log(String(contents))
        console.log(String(contents2))
    } catch(err){
        console.log(err)
    }
}
console.log(init())

console.log(2)

console.log(3)
