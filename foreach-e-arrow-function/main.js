const imgs = document.querySelectorAll('img')


// let i=0
imgs.forEach(function(item, index, array){
// console.log(item, index, array)
});

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item){
    // console.log(item)
})


imgs.forEach(item =>{
    // console.log(item)
});
    

let i=0
imgs.forEach(function(){console.log(i++)});
imgs.forEach(() => console.log(i++));