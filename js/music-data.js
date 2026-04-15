// MUSIC DATABASE
const allmusic = {
    "realman": { title: "Beabadoobee", image: "../music-images/realman.jpg", breadcrumb: "Beabadoobee" },
    "badguy": { title: "Billie Eilish", image: "../music-images/badguy.jpg", breadcrumb: "Billie Eilish" },
    "thatswhatilike": { title: "Bruno Mars", image: "../music-images/thatswhatilike.jpg", breadcrumb: "Bruno Mars" },
    "dont": { title: "Bryson Tiller", image: "../music-images/dont.jpg", breadcrumb: "Bryson Tiller" },
    "toogood": { title: "Christian Kuria", image: "../music-images/toogood.jpg", breadcrumb: "Christian Kuria" },
    "herewithme": { title: "D4VD", image: "../music-images/herewithme.jpg", breadcrumb: "D4VD" },
    "bestpart": { title: "Daniel Caesar", image: "../music-images/bestpart.jpg", breadcrumb: "Daniel Caesar" },
    "superpower": { title: "Daniel Caesar", image: "../music-images/superpower.jpg", breadcrumb: "Daniel Caesar" },
    "doubletake": { title: "Dhruv", image: "../music-images/doubletake.jpg", breadcrumb: "Dhruv" },
    "photograph": { title: "Ed Sheeran", image: "../music-images/photograph.jpg", breadcrumb: "Ed Sheeran" },
    "comethru": { title: "Jeremy Zucker", image: "../music-images/comethru.jpg", breadcrumb: "Jeremy Zucker" },
    "fromthestart": { title: "Laufey", image: "../music-images/fromthestart.png", breadcrumb: "Laufey" },
    "easy": { title: "Mac Ayres", image: "../music-images/easy.jpg", breadcrumb: "Mac Ayres" },
    "tadow": { title: "Masego", image: "../music-images/tadow.jpg", breadcrumb: "Masego" },
    "snooze": { title: "Sza", image: "../music-images/snooze.jpg", breadcrumb: "Sza" },
    "blindinglights": { title: "The Weeknd", image: "../music-images/blindinglights.png", breadcrumb: "The Weeknd" },
    "ourspot": { title: "THE ANXIETY, WILLOW, Tyler Cole", image: "../music-images/ourspot.jpg", breadcrumb: "THE ANXIETY, WILLOW, Tyler Cole" },
    "riptide": { title: "Vance Joy", image: "../music-images/riptide.png", breadcrumb: "Vance Joy" },
    
};

// LOAD MUSIC DATA INTO HTML
function loadpage() {
    let url = window.location.href;
    let parts = url.split("?id=");
    let id = parts[1];

    let data = allmusic[id];

    // INSERT DATA IF MUSIC EXISTS
    if (data) {
        document.title = data.title;
        document.getElementById('music-title').innerText = data.title;
        document.getElementById('breadcrumb-name').innerText = data.breadcrumb;

        let img = document.getElementById('music-img');
        img.src = data.image;
        
        let btnarea = document.getElementById('button-container');
        btnarea.innerHTML = '<button onclick="addcomment(\'' + id + '\')">Post Review</button>';
    }
}

// LOAD THE PAGE
loadpage();