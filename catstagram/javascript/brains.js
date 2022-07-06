let user = {
    firstName: "Shivom",
    lastName: "Thanki",
    followerCount: 4,
    pfp: "https://cdn.dribbble.com/users/518512/screenshots/4389094/media/8da94f976d1886ed66d71ea57a234043.png",
}
const timer = 1;

setTimeout(function(){ document.getElementById("Name").innerHTML = "Name: " + user.firstName + " " + user.lastName;}, timer);
setTimeout(function(){ document.getElementById("followerCount").innerHTML = "Followers: " + user.followerCount;}, timer);
setTimeout(function(){ $("#pfp").attr("src", user.pfp);}, timer);

let likeCounter = 0;

function likePhoto(id){
    likeCounter++
    console.log("Photo liked " + likeCounter + " times!");
    document.getElementById(id).innerHTML = likeCounter;
    $("button").text("Likes: " + likeCounter);
}

