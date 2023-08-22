const imageContainer = document.querySelector('#image-container');
const count = 30;
const apiKey = 'RyMZqERA0vnrQOncXVwd8K071G7QQtvtVQ5uHmh96oE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;


const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
    }
}


const setAttributes = (element, attribute) => {
    for (const key in attribute) {
        element.setAttribute(key, attribute[key]);
    }
}

const displayPhoto = (photosArray) => {
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        img.addEventListener('load', imageLoaded)
        item.appendChild(img);
        imageContainer.appendChild(item)
    })
}

const getPhoto = async () => {
    try {
        const response = await fetch(apiUrl)
        const photosArray = await response.json();
        displayPhoto(photosArray);
    } catch (error) {
        // console.log(error);
    }
}
let counter = 0;
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        imagesLoaded = 0;
        getPhoto();
    }
    // console.log('scroll', counter++);
})
getPhoto()