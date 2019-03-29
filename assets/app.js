const searchAnimals =_ =>{ 
  event.preventDefault()
  const animals = document.querySelector('#animals').value
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=GkGbZLcJVBofhQMYIwLsbbznmy1XhzA8&q=${animals}&limit=10&offset=0&rating=G&lang=en`)
 .then(r => r.json())
 .then(giF => {
    giF.data.forEach(gif => {
      let gifElem = document.createElement('img')
    gifElem.setAttribute('src', gif.images.fixed_height.url)
    document.querySelector('#gifDiv').append(gifElem)
    })
 })

 document.querySelector('#animals').value=''
}

// 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag'

// let toggle = false //false means still, true means animated
// document.addEventListener('click', e =>{
//     if (e.target.className === 'animal'){
//       let animal = e.target.dataset.animal
//       fetch (`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${animal}&rating=g`)
//         .then(r => r.json())
//         .then(r => {
//             let still = r.data.images.fixed_height_still.url
//             let animated = r.data.images.fixed_height.url
//             document.querySelector('#gifDiv').innerHTML =`
//             <img id="gif" src="${still}" alt="${animal}" 
//             data-still="${still}" data-animated="${animated}">`

//         })
//         .catch(e => console.error(e))
//     } else if (e.target.id ==='gif'){
//         toggle = !toggle

//         let still = e.target.dataset.still
//         let animated = e.target.dataset.animated
//         if (toggle){
//             e.target.setAttribute('src', animated)
//         }else{
//             e.target.setAttribute('src', still)
//         }

//     }
// })




