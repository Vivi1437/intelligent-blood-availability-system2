// -------- REGISTER --------
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const provider = {
      hospital: document.getElementById("regHospital").value.trim(),
      city: document.getElementById("regCity").value.trim(),
      email: document.getElementById("regEmail").value.trim(),
      password: document.getElementById("regPassword").value
    };

    if (!provider.hospital || !provider.city || !provider.email || !provider.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("providerAccount", JSON.stringify(provider));

    alert("Registration successful. Please login.");
    window.location.href = "provider-login.html";
  });
}

// -------- LOGIN --------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const stored = JSON.parse(localStorage.getItem("providerAccount"));

    if (!stored || email !== stored.email || password !== stored.password) {
      alert("Invalid login credentials");
      return;
    }

    localStorage.setItem("providerLoggedIn", "true");

    alert("Login successful");
    window.location.href = "provider-dashboard/dashboard.html";
  });
}
function goToSearch() {
  window.location.href = "search.html";
}

