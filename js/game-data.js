// games DATABASE
const allgames = {
    "lop": { title: "Lies of P", image: "../games-images/lop.jpg", breadcrumb: "Lies of P" },
    "minecraft": { title: "Minecraft", image: "../games-images/mc.jpeg", breadcrumb: "Minecraft" },
    "pgr": { title: "Punishing Gray Raven", image: "../games-images/pgr.jpg", breadcrumb: "Punishing Gray Raven" },
    "subnautica": { title: "Subnautica", image: "../games-images/subnautica.png", breadcrumb: "Subnautica" },
    "gow": { title: "God of War", image: "../games-images/gow.jpg", breadcrumb: "God of War" },
    "wwm": { title: "Where Wind Meet", image: "../games-images/wwm.jpg", breadcrumb: "Where Wind Meet" },
    "warframe": { title: "Warframe", image: "../games-images/warframe.jpg", breadcrumb: "Warframe" },
    "miles": { title: "Marvel's Spider-Man: Miles Morales", image: "../games-images/miles.png", breadcrumb: "Marvel's SpiderMan" },
    "firered": { title: "Pokemon: Fire Red/Leaf Green", image: "../games-images/firered.png", breadcrumb: "Pokemon" },
    "rivals": { title: "Marvel Rivals", image: "../games-images/rivals.png", breadcrumb: "Marvel Rivals" },
    "noexistence": { title: "The NOexistenceN of you AND me", image: "../games-images/noexistence.png", breadcrumb: "The NOexistenceN of you AND me" },
    "roblox": { title: "Roblox", image: "../games-images/roblox.png", breadcrumb: "Roblox"},
};

// LOAD games DATA INTO HTML
function loadpage() {
    let url = window.location.href;
    let parts = url.split("?id=");
    let id = parts[1];

    let data = allgames[id];

    // INSERT DATA IF games EXISTS
    if (data) {
        document.title = data.title;
        document.getElementById('games-title').innerText = data.title;
        document.getElementById('breadcrumb-name').innerText = data.breadcrumb;

        let img = document.getElementById('games-img');
        img.src = data.image;
        
        let btnarea = document.getElementById('button-container');
        btnarea.innerHTML = '<button onclick="addcomment(\'' + id + '\')">Post Review</button>';
    }
}

// LOAD THE PAGE
loadpage();