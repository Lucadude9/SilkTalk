// games DATABASE
const allgames = {
    "lop": { title: "Lies of P", image: "../games-images/lop.jpg", breadcrumb: "Lies of" },
    
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