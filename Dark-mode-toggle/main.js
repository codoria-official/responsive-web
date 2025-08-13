const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector(".icon");
const label = toggleBtn.querySelector(".label");

// Load theme dari localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.textContent = "☀️";
  label.textContent = "Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  icon.classList.add("rotate");

  setTimeout(() => icon.classList.remove("rotate"), 500);

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    icon.textContent = "☀️";
    label.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    icon.textContent = "🌙";
    label.textContent = "Dark Mode";
  }
});
