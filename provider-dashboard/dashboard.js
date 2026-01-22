function openProfile() {
  window.location.href = "../provider-profile.html";
}

function openAddUpdate() {
  window.location.href = "../provider-add-update.html";
}

function openStock() {
  window.location.href = "../provider-view-stock.html";
}

function logout() {
  // clear login session (demo)
  localStorage.removeItem("providerLoggedIn");

  alert("Logged out successfully");
  window.location.href = "../provider-login.html";
}
