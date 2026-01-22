const form = document.getElementById("bloodForm");

const hospitalInput = document.getElementById("hospital");
const cityInput = document.getElementById("city");
const bloodGroupInput = document.getElementById("bloodGroup");
const unitsInput = document.getElementById("units");

// Load existing stock
let stock = JSON.parse(localStorage.getItem("providerStock")) || [];

// Check edit mode
const editIndex = localStorage.getItem("editIndex");

if (editIndex !== null) {
  const item = stock[editIndex];

  hospitalInput.value = item.hospital;
  cityInput.value = item.city;
  bloodGroupInput.value = item.bloodGroup;
  unitsInput.value = item.units;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const entry = {
    hospital: hospitalInput.value,
    city: cityInput.value,
    bloodGroup: bloodGroupInput.value,
    units: unitsInput.value
  };

  if (editIndex !== null) {
    // UPDATE existing
    stock[editIndex] = entry;
    localStorage.removeItem("editIndex");
    alert("Blood stock updated successfully!");
  } else {
    // ADD new
    stock.push(entry);
    alert("Blood stock added successfully!");
  }

  localStorage.setItem("providerStock", JSON.stringify(stock));
  form.reset();

  window.location.href = "provider-view-stock.html";
});

function goDashboard() {
  localStorage.removeItem("editIndex");
  window.location.href = "provider-dashboard/dashboard.html";
}
