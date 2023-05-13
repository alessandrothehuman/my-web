console.log("Hi! Welcome to My Portfiolio Site");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
} else {
    x.className = 'navtoggle';
}
}
