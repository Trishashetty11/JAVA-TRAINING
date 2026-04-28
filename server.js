function calculateFine() {
const vehicle = document.getElementById("vehicle").value;
const zone = document.getElementById("zone").value;
const type = document.getElementById("vehicleType").value;
const speed = parseInt(document.getElementById("speed").value);
const limit = parseInt(document.getElementById("limit").value);
const lane = document.getElementById("lane").value;


if (!vehicle || !speed || !limit) {
    alert("Please fill all required fields");
    return;
}

let overSpeed = speed - limit;
let fine = 0;

if (overSpeed > 0) {
    fine += overSpeed * 10;
}

/* Zone multiplier */
if (zone === "school") fine *= 2;
else if (zone === "residential") fine *= 1.5;
else fine *= 1;

/* Vehicle type */
if (type === "truck") fine += 200;
else if (type === "car") fine += 100;
else fine += 50;

/* Lane violation */
if (lane === "yes") fine += 300;

/* Minimum fine */
if (fine < 100 && overSpeed > 0) fine = 100;

/* Output */
document.getElementById("result").innerText =
    "Fine calculated successfully";

document.getElementById("outVehicle").innerText = vehicle;
document.getElementById("outZone").innerText = zone;
document.getElementById("outSpeed").innerText =
    overSpeed > 0 ? overSpeed + " km/h" : "No violation";
document.getElementById("outFine").innerText = "₹" + Math.round(fine);


}
