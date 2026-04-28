function calculateFine() {


const vehicle = document.getElementById("vehicle").value.trim();
const zone = document.getElementById("zone").value;
const type = document.getElementById("vehicleType").value;
const speed = Number(document.getElementById("speed").value);
const limit = Number(document.getElementById("limit").value);
const lane = document.getElementById("lane").value;

if (!vehicle || isNaN(speed) || isNaN(limit)) {
    alert("Please enter valid inputs");
    return;
}

let overSpeed = speed - limit;
let fine = 0;

if (overSpeed > 0) {
    fine = overSpeed * 20;
}

const zoneFactor = {
    school: 2,
    residential: 1.5,
    highway: 1
};

fine *= zoneFactor[zone];

const typeCharge = {
    bike: 50,
    car: 100,
    truck: 300
};

fine += typeCharge[type];

if (lane === "yes") {
    fine += 500;
}

if (fine > 0 && fine < 200) {
    fine = 200;
}

document.getElementById("result").innerText =
    fine > 0 ? "Fine Calculated Successfully" : "No Violation";

document.getElementById("outVehicle").innerText = vehicle;
document.getElementById("outZone").innerText = zone;
document.getElementById("outSpeed").innerText =
    overSpeed > 0 ? overSpeed + " km/h" : "Within Limit";

document.getElementById("outFine").innerText = "₹" + Math.round(fine);


}
