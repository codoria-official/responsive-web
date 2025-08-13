const text = "Welcome to our website 🚀";
const typingElement = document.getElementById("typing");

function typeText(text, delay = 100) {
  typingElement.innerHTML = ""; // clear first
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    // If there is a space, replace it with &nbsp;
    span.innerHTML = char === " " ? "&nbsp;" : char;
    span.classList.add("letter");
    span.style.animationDelay = `${(index * delay) / 1000}s`;
    typingElement.appendChild(span);
  });
}

typeText(text, 80);
