function menuOpen() {
    var x = document.getElementById("menu-top-element") //lấy các giá trị theo  id
    if (x.className === "menu-top") { // neu class rong them  call responsive
        x.className += " responsive";
    } else {
        x.className = "menu-top";
    }
}

function menuOpen2() {
    var y = document.getElementById("search-form") //lấy các giá trị theo  id
    if (y.className === "search-form") { // neu class rong them  call responsive
        y.className += " responsive";
    } else {
        y.className = "search-form";
    }
}

$('.carousel').carousel({
    interval: 10000,
    pause: "false"
});