// COMIC DATABASE
const allcomics = {
    "batman": { title: "Absolute Batman", image: "../image/batman.jpg", breadcrumb: "Absolute Batman" },
    "superman": { title: "Absolute Superman", image: "../image/superman.jpg", breadcrumb: "Absolute Superman" },
    "wonderwoman": { title: "Absolute Wonder Woman", image: "../image/wonderwoman.jpg", breadcrumb: "Absolute Wonder Woman" },
    "avengers": { title: "Avengers", image: "../image/avengers.jpg", breadcrumb: "Avengers" },
    "daredevil": { title: "Daredevil", image: "../image/daredevil.jpg", breadcrumb: "Daredevil" },
    "supermanspiderman": { title: "DC/Marvel Superman Spider-man", image: "../image/supermanspiderman.jpg", breadcrumb: "Superman/Spider-Man" },
    "fantasticfour": { title: "Fantastic Four", image: "../image/fantasticfour.jpg", breadcrumb: "Fantastic Four" },
    "flash": { title: "Flash", image: "../image/flash.jpg", breadcrumb: "Flash" },
    "ironman": { title: "Iron Man", image: "../image/ironman.jpg", breadcrumb: "Iron Man" },
    "justiceleague": { title: "Justice League", image: "../image/justiceleague.jpg", breadcrumb: "Justice League" },
    "nightwing": { title: "Nightwing", image: "../image/nightwing.jpg", breadcrumb: "Nightwing" },
    "rogue": { title: "Rogue", image: "../image/rogue.jpg", breadcrumb: "Rogue" },
    "sorcerersupreme": { title: "Sorcerer Supreme", image: "../image/sorcerersupreme.jpg", breadcrumb: "Sorcerer Supreme" },
    "ninjaturtles": { title: "Teenage Mutant Ninja Turtles", image: "../image/ninjaturtles.jpg", breadcrumb: "TMNT" },
    "transformers": { title: "Transformers", image: "../image/transformers.jpg", breadcrumb: "Transformers" },
    "spiderman": { title: "Ultimate Spider-Man", image: "../image/spiderman.jpg", breadcrumb: "Ultimate Spider-Man" },
    "uncannyxmen": { title: "Uncanny X-Men", image: "../image/uncannyxmen.jpg", breadcrumb: "Uncanny X-Men" },
    "wolverine": { title: "Wolverine", image: "../image/wolverine.jpg", breadcrumb: "Wolverine" }
};

// LOAD COMIC DATA INTO HTML
function loadpage() {
    let url = window.location.href;
    let parts = url.split("?id=");
    let id = parts[1];

    let data = allcomics[id];

    // INSERT DATA IF COMIC EXISTS
    if (data) {
        document.title = data.title;
        document.getElementById('comic-title').innerText = data.title;
        document.getElementById('breadcrumb-name').innerText = data.breadcrumb;

        let img = document.getElementById('comic-img');
        img.src = data.image;
        
        let btnarea = document.getElementById('button-container');
        btnarea.innerHTML = '<button onclick="addcomment(\'' + id + '\')">Post Review</button>';
    }
}

// LOAD THE PAGE
loadpage();