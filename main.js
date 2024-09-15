let url = 'https://coffee.alexflipnote.dev/random.json';
let container = document.getElementById("container");

function changingImage() {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
       
        let img = document.createElement("img");

        container.innerHTML = '';
        img.src = data.file;
        img.classList.add("image");
       
        container.appendChild(img);

    })
}

changingImage();
setInterval(changingImage, 2000); 
