function logout() {
    localStorage.removeItem("room_name") ;
    localStorage.removeItem("user_name") ;
    window.location = "index.html" ;
}

function home() {
    localStorage.removeItem("room_name") ;
    localStorage.removeItem("user_name") ;
    window.location = "piano.html" ;
}