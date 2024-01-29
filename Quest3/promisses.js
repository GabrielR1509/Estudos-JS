const p = new Promise ((resolve, reject) => {
    const a = 1 + 2
    if (a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((err) => {
    console.log('This is in the catch ' + err)
})