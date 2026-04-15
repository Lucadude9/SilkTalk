// GLOBAL VARIABLES
let rating = 0;
let comicid = "";

// INITIALIZE PAGE WHEN LOADING INTO IT
document.addEventListener("DOMContentLoaded", function () {
    let url = window.location.href;
    let parts = url.split("?id=");
    if (parts.length > 1) {
        comicid = parts[1];
    }

    let stardiv = document.getElementById("starRating");
    if (stardiv) {
        let stars = stardiv.getElementsByTagName("img");
        for (let i = 0; i < stars.length; i++) {
            stars[i].onclick = function () {
                rating = i + 1;
                updatestars(rating);
            };
        }
    }

    showcomments();
});

// UPDATE VISUAL OF STAR RATINGS
function updatestars(num) {
    let stars = document.getElementById("starRating").getElementsByTagName("img");
    for (let i = 0; i < stars.length; i++) {
        if (i < num) {
            stars[i].src = "../image/fullstar.png";
        } else {
            stars[i].src = "../image/blackstar.webp";
        }
    }
}

// SAVE REVIEW TO THE SESSION STORAGE
function addcomment(id) {
    let input = document.getElementById("commentInput");
    let text = input.value;

    if (text === "" || rating === 0) {
        alert("please add a rating and a comment");
        return;
    }

    let sessiondata = sessionStorage.getItem("myreviews");
    let mainstorage = {};
    
    if (sessiondata !== null) {
        mainstorage = JSON.parse(sessiondata);
    }

    if (mainstorage[id] === undefined) {
        mainstorage[id] = [];
    }

    let review = {
        text: text,
        stars: rating,
        votes: 0
    };
    mainstorage[id].push(review);

    sessionStorage.setItem("myreviews", JSON.stringify(mainstorage));

    input.value = "";
    rating = 0;
    updatestars(0);

    showcomments();
}

// DISPLAY ALL REVIEWS FOR THE SPECIFIC COMIC
function showcomments() {
    let display = document.getElementById("comments");
    if (display === null) return;
    
    display.innerHTML = "";

    let sessiondata = sessionStorage.getItem("myreviews");
    if (sessiondata === null) return;

    let mainstorage = JSON.parse(sessiondata);
    let reviews = mainstorage[comicid];

    if (reviews === undefined) return;

    for (let i = 0; i < reviews.length; i++) {
        let r = reviews[i];
        
        let starshtml = "";
        for (let s = 1; s <= 5; s++) {
            if (s <= r.stars) {
                starshtml += "<img src='../image/fullstar.png' class='comment-star' width='25'>";
            } else {
                starshtml += "<img src='../image/blackstar.webp' class='comment-star' width='25'>";
            }
        }

        display.innerHTML +=
            "<div class='comment-card'>" +
                "<div class='stars'>" + starshtml + "</div>" +
                "<p>" + r.text + "</p>" +
                "<div class='vote-section'>" +
                    "<img src='../image/arrowup.png' onclick='vote(" + i + ", 1)' class='vote-icon'>" +
                    " <span>" + r.votes + "</span> " +
                    "<img src='../image/arrowdown.png' onclick='vote(" + i + ", -1)' class='vote-icon'>" +
                "</div>" +
            "</div>";
    }
}

// UPVOTE AND DOWNVOTE SYSTEM
function vote(index, change) {
    let sessiondata = sessionStorage.getItem("myreviews");
    let mainstorage = JSON.parse(sessiondata);
    mainstorage[comicid][index].votes += change;
    sessionStorage.setItem("myreviews", JSON.stringify(mainstorage));
    showcomments();
}