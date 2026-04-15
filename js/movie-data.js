// MUSIC DATABASE
const allmusic = {
    "avatar": { title: "Avatar", image: "../movie-images/avatar.jpg", breadcrumb: "Avatar" },
    "avatar2": { title: "Avatar: The Way of Water", image: "../movie-images/avatar2.jpeg", breadcrumb: "Avatar: The Way of Water" },
    "avengers": { title: "Avengers: Endgame", image: "../movie-images/avengers.webp", breadcrumb: "Avengers: Endgame" },
    "infinitywar": { title: "Avengers: Infinity War", image: "../movie-images/infinitywar.jpg", breadcrumb: "Avengers: Infinity War" },
    "insideout": { title: "Inside Out 2", image: "../movie-images/insideout.jpg", breadcrumb: "Inside Out 2" },
    "jurassic": { title: "Jurassic World", image: "../movie-images/jurassic.jpg", breadcrumb: "Jurassic World" },
    "nezha2": { title: "Ne Zha 2", image: "../movie-images/nezha2.jpg", breadcrumb: "Ne Zha 2" },
    "spiderman": { title: "Spider-Man: No Way Home", image: "../movie-images/spiderman.jpg", breadcrumb: "Spider-Man: No Way Home" },
    "starwars": { title: "Star Wars: Episode VII - The Force Awakens", image: "../movie-images/starwars.jpg", breadcrumb: "Star Wars: Episode VII - The Force Awakens" },
    "thelionking": { title: "The Lion King", image: "../movie-images/thelionking.jpg", breadcrumb: "The Lion King" },
    "titanic": { title: "Titanic", image: "../movie-images/titanic.jpg", breadcrumb: "Titanic" },
    "zootopia": { title: "Zootopia 2", image: "../movie-images/zootopia.jpg", breadcrumb: "Zootopia 2" },
    
};

// LOAD MOVIE DATA INTO HTML
function loadpage() {
    let url = window.location.href;
    let parts = url.split("?id=");
    let id = parts[1];

    let data = allmusic[id];

    // INSERT DATA IF MOVIE EXISTS
    if (data) {
        document.title = data.title;
        document.getElementById('movies-title').innerText = data.title;
        document.getElementById('breadcrumb-name').innerText = data.breadcrumb;

        let img = document.getElementById('movies-img');
        img.src = data.image;
        
        let btnarea = document.getElementById('button-container');
        btnarea.innerHTML = '<button onclick="addcomment(\'' + id + '\')">Post Review</button>';
    }
}

// LOAD THE PAGE
loadpage();