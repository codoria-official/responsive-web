window.addEventListener("scroll", () => {
  const progressBar = document.getElementById("progress-bar");

  // Total height of scrollable documents
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Current scroll position
  const scrollTop = window.scrollY;

  // Percentage of progress
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Set progress bar width
  progressBar.style.width = scrollPercent + "%";
});
