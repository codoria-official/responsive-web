const overlay = document.getElementById("overlay");
const goBtn = document.getElementById("goBtn");
const closeOverlay = document.getElementById("closeOverlay");

// Check AdBlock when the page loads
detectAdBlock().then((isBlocked) => {
  if (isBlocked) {
    goBtn.disabled = true;
    overlay.classList.remove("hidden");
  } else {
    goBtn.disabled = false;
  }
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

// Click the button to countdown and redirect
goBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let seconds = 5;
  goBtn.disabled = true;

  goBtn.textContent = `Menuju dalam ${seconds}...`;

  const countdown = setInterval(() => {
    seconds--;
    goBtn.textContent = `Menuju dalam ${seconds}...`;
    if (seconds <= 0) {
      clearInterval(countdown);
      window.location.href = goBtn.dataset.href;
    }
  }, 1000);
});
