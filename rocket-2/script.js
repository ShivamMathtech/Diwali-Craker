const container = document.querySelector(".container");

// Generate multiple lights for skirting
function createSkirtingLights() {
  const lights = document.querySelector(".lights");
  for (let i = 0; i < 100; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.top = `${Math.random() * 100}%`;
    light.style.left = `${Math.random() * 100}%`;
    lights.appendChild(light);
  }
}

// Generate rocket explosion (firework effect)
function createFirework(x, y) {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.position = "absolute";
    sparkle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    sparkle.style.width = "4px";
    sparkle.style.height = "4px";
    sparkle.style.borderRadius = "50%";
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    sparkle.style.animation = `sparkle 1s ease-out`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}

// Rocket launching and firework explosion logic
function launchRocket() {
  const rockets = document.querySelectorAll(".rocket");
  rockets.forEach((rocket) => {
    rocket.addEventListener("animationiteration", (e) => {
      const rect = e.target.getBoundingClientRect();
      createFirework(rect.left + 5, 150); // Approx position for explosion
    });
  });
}

createSkirtingLights();
launchRocket();
