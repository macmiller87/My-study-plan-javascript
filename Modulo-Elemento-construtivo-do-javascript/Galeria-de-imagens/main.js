const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 0; i < 5; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic1.jpg');
    thumbBar.appendChild(newImage);

    const newImage2 = document.createElement('img');
    newImage2.setAttribute('src', 'images/pic2.jpg');
    thumbBar.appendChild(newImage2);

    const newImage3 = document.createElement('img');
    newImage3.setAttribute('src', 'images/pic3.jpg');
    thumbBar.appendChild(newImage3);

    const newImage4 = document.createElement('img');
    newImage4.setAttribute('src', 'images/pic4.jpg');
    thumbBar.appendChild(newImage4);

    const newImage5 = document.createElement('img');
    newImage5.setAttribute('src', 'images/pic5.jpg');
    thumbBar.appendChild(newImage5);
    
}
 
btn.onclick = function(src, adressImage) {
    
    displayedImage =  adressImage;
    return adressImage;
    
}

btn.onclick = function(src, adressImage2) {
    
    displayedImage =  adressImage2;
    return adressImage2;
    
}

btn.onclick = function(src, adressImage3) {
    
    displayedImage =  adressImage3; 
    return adressImage3;
    
}

btn.onclick = function(src, adressImage4) {
    
    displayedImage =  adressImage4;
    return adressImage4;
    
}

btn.onclick = function(src, adressImage5) {
    
    displayedImage =  adressImage5;
    return adressImage5;
    
}

/* Wiring up the Darken/Lighten button */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);
