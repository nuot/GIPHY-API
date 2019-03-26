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


