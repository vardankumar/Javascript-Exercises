// unsplash api
const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

const count = 10;
const apiKey = '5IGVt17aFNWv3EaGGiIvWWG7yZZb91m4tqC57kWcXrE'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}



function displayPhotos(photosArray){
    photosArray.forEach((photo) => {
        const item = document.createElement('a')
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', '_blank')
        setAttributes(item, {
            href : photo.links.html,
            target : '_blank'
        })
        const img = document.createElement('img')
        // img.setAttribute('src', photo.urls.regular)
        // img.setAttribute('alt', photo.alt_description)
        // img.setAttribute('title', photo.alt_description)
        setAttributes(img, {
            src : photo.urls.regular,
            alt : photo.alt_description,
            title : photo.alt_description,
        })
        item.appendChild(img)
        imageContainer.appendChild(item);
        
        
    })
}

async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        const photosArray = await response.json()        
        displayPhotos(photosArray)
    } catch (error) {
        
    }

}

window.addEventListener("scroll", () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos()
        console.log('load more');
    }
    
})

getPhotos()