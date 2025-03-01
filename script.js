document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector(".stars");

    function generateStars() {
        starsContainer.innerHTML = ""; // Clear existing stars

        let numStars;
        if (window.innerWidth > 1024) {
            numStars = 100; // More stars on large screens
        } else if (window.innerWidth > 768) {
            numStars = 60; // Moderate stars on tablets
        } else {
            numStars = 40; // Fewer stars on mobile for performance
        }

        for (let i = 0; i < numStars; i++) {
            let star = document.createElement("div");
            star.classList.add("star");

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let size = Math.random() * 3 + 1; // Random star size
            let duration = Math.random() * 3 + 2; // Random animation duration

            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;

            starsContainer.appendChild(star);
        }
    }

    function generateShootingStars() {
        setInterval(() => {
            let shootingStar = document.createElement("div");
            shootingStar.classList.add("shooting-star");

            let startX = Math.random() * window.innerWidth;
            let startY = Math.random() * window.innerHeight * 0.5; // Starts from top half

            shootingStar.style.left = `${startX}px`;
            shootingStar.style.top = `${startY}px`;

            document.body.appendChild(shootingStar);

            setTimeout(() => {
                shootingStar.remove(); // Remove after animation
            }, 6000);
        }, 4000); // New shooting star every 4s
    }

    generateStars();
    generateShootingStars();
    window.addEventListener("resize", generateStars); // Adjust on resize
});
