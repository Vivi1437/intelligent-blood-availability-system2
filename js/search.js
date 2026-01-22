document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const city = document.getElementById("city").value;
  const bloodGroup = document.getElementById("bloodGroup").value;

  // pass data to result page
  localStorage.setItem("searchCity", city);
  localStorage.setItem("searchBlood", bloodGroup);

  window.location.href = "result.html";
});

function goHome() {
  window.location.href = "index.html";
}
