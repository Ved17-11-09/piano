function next() {
    document.getElementById("song").innerHTML = "SEE THE TUTORIAL" ;
    window.location = "piano_song.html" ;
}

function next2() {
    document.getElementById("song2").innerHTML = "SEE THE TUTORIAL" ;
    window.location = "piano_song_2.html" ;
}

function next3() {
    document.getElementById("song3").innerHTML = "SEE THE TUTORIAL" ;
    window.location = "piano_song_3.html" ;
}

function next4() {
    document.getElementById("song4").innerHTML = "SEE THE TUTORIAL" ;
    window.location = "piano_song_4.html" ;
}

function next5() {
    document.getElementById("song5").innerHTML = "SEE THE TUTORIAL" ;
    window.location = "piano_song_5.html" ;
}

function logout() {
    localStorage.removeItem("room_name") ;
    localStorage.removeItem("user_name") ;
    window.location = "index.html" ;
}