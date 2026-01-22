// List of Indian cities (can expand later)
const cities = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Mumbai",
  "Pune",
  "Kolkata",
  "Ahmedabad",
  "Jaipur",
  "Vijayawada",
  "Visakhapatnam",
  "Guntur",
  "Warangal",
  "Nellore",
  "Tirupati"
];

const cityInput = document.getElementById("cityInput");
const suggestionBox = document.getElementById("suggestions");

cityInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (value === "") {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = cities.filter(city =>
    city.toLowerCase().startsWith(value)
  );

  if (matches.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  matches.forEach(city => {
    const div = document.createElement("div");
    div.innerText = city;
    div.style.padding = "10px 15px";
    div.style.cursor = "pointer";
    div.style.color = "#0f172a";

    div.addEventListener("mouseover", () => {
      div.style.background = "#e0f2fe";
    });

    div.addEventListener("mouseout", () => {
      div.style.background = "#ffffff";
    });

    div.addEventListener("click", () => {
      cityInput.value = city;
      suggestionBox.style.display = "none";
    });

    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = "block";
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (e) {
  if (!cityInput.contains(e.target)) {
    suggestionBox.style.display = "none";
  }
});
