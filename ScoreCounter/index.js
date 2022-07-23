let scoreGuest = 0;
let scoreHome = 0;

let home1 = document.getElementById("home-1")

let pointsHome = document.getElementById("points-home");
let pointsGuest = document.getElementById("points-guest");
let resetBtn  =  document.getElementById("reset-btn");


function add1Home () {
    scoreHome++;
    pointsHome.textContent = scoreHome;

}
function add2Home () {
    scoreHome+=2;
    pointsHome.textContent = scoreHome;

}
function add3Home () {
    scoreHome+=3;
    pointsHome.textContent = scoreHome;

}
function add1Guest () {
    scoreGuest++;
    pointsGuest.textContent = scoreGuest;

}
function add2Guest () {
    scoreGuest+=2;
    pointsGuest.textContent = scoreGuest;

}
function add3Guest () {
    scoreGuest+=3;
    pointsGuest.textContent = scoreGuest;

}

function reset() {
    scoreGuest = 0;
    scoreHome = 0;
    pointsGuest.textContent = scoreGuest;
    pointsHome.textContent = scoreHome;

}
