const kiloPound = document.getElementById("kilo-pound");
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");
const metersFeet = document.getElementById("meters-feet");
const litersGallons = document.getElementById("liters-gallons")

convertBtn.addEventListener("click", function() {
    let value = inputEl.value;
    let pounds = value * 0.45359237 
    let kilos = value * 2.2;
    let gallons = value * 3.785411784
    let liters = value * 0.264172
    let feet = value *  0.30 
    let meter = value * 3.28 
    
    kiloPound.innerHTML = `${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilos.toFixed(3)} kilos.`;
    litersGallons.innerHTML = `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`;
    metersFeet.innerHTML = `${value} meters = ${feet.toFixed(3)} feet | ${value} feet = ${meter.toFixed(3)} meters`;

})


