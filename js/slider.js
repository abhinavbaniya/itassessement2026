// Image Slider

let images = [
    "images/h1.jpeg",
    "images/h2.jpeg",
    "images/h3.jpeg"
];

let index = 0;

function changeImage() {

    document.getElementById("slide").src = images[index];

    index++;

    if (index >= images.length) {
        index = 0;
    }
}

setInterval(changeImage, 3000);