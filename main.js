document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const hearts = 30;

    for (let i = 0; i < hearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.opacity = Math.random();
        container.appendChild(heart);
    }

    // Play background music
    const music = document.getElementById('background-music');
    music.play();
});