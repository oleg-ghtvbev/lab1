// let name = 'John' 
// console.log('Hello Word' + name)
// let name2 = "Ivan"
// const name3 = 'jane'
// let lang = 'hello '
// console.log(lang + name)
// console.log(lang + name2)
// console.log(lang + name3)

const array = ['John', 'Ivan', 4, 20, 'jane']

const hello = ['Hello', 'привет']
for (let helloIndex = 0; helloIndex < hello.length; helloIndex++){
    for ( let index = 0; index < array.length; index++) {
        console.log(array[helloIndex] +' '+ array[index])

}

}
