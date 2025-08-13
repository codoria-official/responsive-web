function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000);
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  showPopup("Right-click disabled!");
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key.toLowerCase() === "c") {
    event.preventDefault();
    showPopup("Copy disabled!");
  }
});

document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("dragstart", function (event) {
    event.preventDefault();
    showPopup("Drag images disabled!");
  });
});
