const popupOverlay = document.getElementById("popup-overlay");
const popupBox = document.getElementById("popup-box");
const closeBtn = document.getElementById("close-btn");

// Appears after 10 seconds
setTimeout(() => {
  popupOverlay.classList.add("show");
  popupBox.classList.add("show");
}, 10000);

// Close popup
closeBtn.addEventListener("click", () => {
  popupOverlay.classList.remove("show");
  popupBox.classList.remove("show");
});

popupOverlay.addEventListener("click", () => {
  popupOverlay.classList.remove("show");
  popupBox.classList.remove("show");
});
