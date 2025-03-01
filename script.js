document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars");
    const numStars = 100; // Number of stars
    const numShootingStars = 5; // Shooting stars count

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");

        let x = Math.random() * window.innerWidth; 
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 3 + 1; 
        let duration = Math.random() * 2 + 1; 

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }

    // Shooting Stars
    for (let i = 0; i < numShootingStars; i++) {
        let shootingStar = document.createElement("div");
        shootingStar.classList.add("shooting-star");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        shootingStar.style.left = `${x}px`;
        shootingStar.style.top = `${y}px`;
        shootingStar.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(shootingStar);
    }
});
