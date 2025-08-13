document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  // Display banner if no consent yet
  if (localStorage.getItem("cookieConsent") !== "true") {
    setTimeout(() => {
      banner.classList.add("show");
    }, 500); // Delay for smoothness
  }

  acceptBtn.addEventListener("click", function () {
    banner.classList.remove("show");
    setTimeout(() => {
      banner.style.display = "none";
    }, 500); // Wait for the fade out animation
    localStorage.setItem("cookieConsent", "true");
  });
});
