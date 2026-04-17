// GLOBAL VARIABLES
let rating = 0;
let comicid = "";

// INITIALIZE PAGE WHEN LOADING INTO IT
document.addEventListener("DOMContentLoaded", function () {
    let url = window.location.href;
    let parts = url.split("?id=");

    // Get the comic/game/movie/music id from the URL
    if (parts.length > 1) {
        comicid = parts[1];
    }

    // Find the star rating area
    let stardiv = document.getElementById("starRating");

    // If stars exist, let user click them
    if (stardiv) {
        let stars = stardiv.getElementsByTagName("img");

        for (let i = 0; i < stars.length; i++) {
            stars[i].onclick = function () {
                rating = i + 1;
                updatestars(rating);
            };
        }
    }

    // Show saved comments when page loads
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

// SAVE REVIEW TO SESSION STORAGE
function addcomment(id) {
    let input = document.getElementById("commentInput");
    let text = input.value.trim();

    // Get the username of the currently logged in user
    let username = localStorage.getItem("loggedInUser");

    // Stop user if not logged in
    if (username === null || username === "") {
        alert("Please log in first before posting a review.");
        return;
    }

    // Make sure comment and rating are both filled
    if (text === "" || rating === 0) {
        alert("Please add a rating and a comment.");
        return;
    }

    // Get old review data from session storage
    let sessiondata = sessionStorage.getItem("myreviews");
    let mainstorage = {};

    if (sessiondata !== null) {
        mainstorage = JSON.parse(sessiondata);
    }

    // If this item does not have reviews yet, create empty array
    if (mainstorage[id] === undefined) {
        mainstorage[id] = [];
    }

    // Create one review object
    let review = {
        username: username, // save logged in username with review
        text: text,
        stars: rating,
        votes: 0
    };

    // Add review into correct item array
    mainstorage[id].push(review);

    // Save updated reviews back into session storage
    sessionStorage.setItem("myreviews", JSON.stringify(mainstorage));

    // Clear input and reset stars after posting
    input.value = "";
    rating = 0;
    updatestars(0);

    // Refresh displayed comments
    showcomments();
}

// DISPLAY ALL REVIEWS FOR THE SPECIFIC COMIC/GAME/MOVIE/MUSIC
function showcomments() {
    let display = document.getElementById("comments");

    // Stop if comments box does not exist
    if (display === null) return;

    display.innerHTML = "";

    // Get saved reviews
    let sessiondata = sessionStorage.getItem("myreviews");
    if (sessiondata === null) return;

    let mainstorage = JSON.parse(sessiondata);
    let reviews = mainstorage[comicid];

    // Stop if no reviews for this item
    if (reviews === undefined) return;

    // Loop through each review
    for (let i = 0; i < reviews.length; i++) {
        let r = reviews[i];

        // Build stars HTML
        let starshtml = "";
        for (let s = 1; s <= 5; s++) {
            if (s <= r.stars) {
                starshtml += "<img src='../image/fullstar.png' class='comment-star' width='25'>";
            } else {
                starshtml += "<img src='../image/blackstar.webp' class='comment-star' width='25'>";
            }
        }

        // If old reviews don't have username saved, show Guest
        let userdisplay = r.username ? r.username : "Guest";

        // Show username, stars, comment text, and vote system
        display.innerHTML +=
            "<div class='comment-card'>" +
                "<p><strong>" + userdisplay + "</strong></p>" +
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

    // Stop if no review data exists
    if (sessiondata === null) return;

    let mainstorage = JSON.parse(sessiondata);

    // Change vote number for chosen review
    mainstorage[comicid][index].votes += change;

    // Save updated votes
    sessionStorage.setItem("myreviews", JSON.stringify(mainstorage));

    // Refresh comments on screen
    showcomments();
}