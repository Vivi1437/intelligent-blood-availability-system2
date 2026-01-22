// Get search values
const city = localStorage.getItem("searchCity");
const bloodGroup = localStorage.getItem("searchBlood");

// Elements
const info = document.getElementById("searchInfo");
const body = document.getElementById("resultBody");

// Show search info
info.innerText = `Results for ${city} - ${bloodGroup}`;

// Get provider-added stock
const stock = JSON.parse(localStorage.getItem("providerStock")) || [];

// Filter stock based on search
const filteredData = stock.filter(item =>
  item.city.toLowerCase() === city.toLowerCase() &&
  item.bloodGroup === bloodGroup &&
  Number(item.units) > 0
);

// Clear table body first
body.innerHTML = "";

// Render results
if (filteredData.length === 0) {
  body.innerHTML = `
    <tr>
      <td colspan="4">No blood available</td>
    </tr>
  `;
} else {
  filteredData.forEach(item => {
    const row = `
      <tr>
        <td>${item.hospital}</td>
        <td>${item.bloodGroup}</td>
        <td>${item.units}</td>
        <td>${item.city}</td>
      </tr>
    `;
    body.innerHTML += row;
  });
}

// Back to search
function goBack() {
  window.location.href = "search.html";
}
