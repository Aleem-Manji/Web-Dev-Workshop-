const welcomeButton = document.getElementById("welcomeButton");
const message = document.getElementById("message");

if (welcomeButton && message) {
  welcomeButton.addEventListener("click", () => {
    message.textContent = "Welcome to the workshop! Start editing this project.";
  });
}
