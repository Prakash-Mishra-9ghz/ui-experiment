const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Friend";

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("celebrate");

const sound = new Audio("birthday.mp3");

// Typewriter function
function typeText(element, text, speed = 50, callback) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

// Step-by-step reveal
setTimeout(() => {
  typeText(title, `Hey ${name} ✨`, 70);
}, 500);

setTimeout(() => {
  typeText(
    subtitle,
    "Just wanted to remind you… today is a little special 🎂",
    40,
    () => {
      button.classList.add("show");
    }
  );
}, 1800);

// Button click magic
button.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.volume = 0.4;
  sound.play();

  typeText(
    subtitle,
    "Happy Birthday ✨ May this year bring calm days, bright moments, and reasons to smile.",
    35
  );

  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });
});
