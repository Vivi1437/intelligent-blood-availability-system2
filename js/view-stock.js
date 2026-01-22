const container = document.getElementById("stockContainer");

// Get stock from localStorage
let stock = JSON.parse(localStorage.getItem("providerStock")) || [];

// If no stock
if (stock.length === 0) {
  container.innerHTML = `
    <p style="grid-column:1/-1;text-align:center;color:#555;">
      No stock added yet.
    </p>
  `;
} else {
  stock.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "stock-card";

    if (Number(item.units) < 5) {
      card.classList.add("low");
    }

    card.innerHTML = `
      <div class="stock-blood">${item.bloodGroup}</div>
      <div class="stock-units">Units: ${item.units}</div>
      <div class="stock-city">${item.hospital} • ${item.city}</div>

      <div style="margin-top:12px; display:flex; gap:10px;">
        <button class="btn-edit" onclick="editStock(${index})">Edit</button>
        <button class="btn-delete" onclick="deleteStock(${index})">Delete</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// ✅ DELETE STOCK
function deleteStock(index) {
  const confirmDelete = confirm("Are you sure you want to delete this stock?");
  if (!confirmDelete) return;

  stock.splice(index, 1);
  localStorage.setItem("providerStock", JSON.stringify(stock));
  location.reload();
}

// ✅ EDIT STOCK (THIS WAS MISSING)
function editStock(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "provider-add-update.html";
}

// Back to dashboard
function goDashboard() {
  window.location.href = "provider-dashboard/dashboard.html";
}
