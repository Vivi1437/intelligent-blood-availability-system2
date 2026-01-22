// Get provider details from registration data
const provider = JSON.parse(localStorage.getItem("providerAccount"));

if (provider) {
  document.getElementById("hospitalName").innerText = provider.hospital;
  document.getElementById("city").innerText = provider.city;
  document.getElementById("email").innerText = provider.email;
} else {
  alert("Provider details not found. Please login again.");
  window.location.href = "provider-login.html";
}

function goBack() {
  window.location.href = "provider-dashboard/dashboard.html";
}
