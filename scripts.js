const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        navLinks.classList.remove('active');
    });
});

function toggleSocial() {
    const socialMenu = document.getElementById('social-menu');
    socialMenu.style.display =
        socialMenu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', (e) => {
    const socialBtn = document.querySelector('.social-btn');
    const socialMenu = document.getElementById('social-menu');

    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }

    if (!socialBtn.contains(e.target)) {
        socialMenu.style.display = 'none';
    }
});

// ---------
// CARRUSEL
// ---------
(function () {
  'use strict';

  window.addEventListener('load', function () {
    const container = document.getElementById('herramientas-carousel');
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    if (!track) return;

    track.innerHTML += track.innerHTML;

    const shift = track.scrollWidth / 2;
    track.style.setProperty('--shift', shift + 'px');

    track.style.animation = 'slide 12s linear infinite';

    container.addEventListener('mouseenter', () =>
      track.style.animationPlayState = 'paused'
    );
    container.addEventListener('mouseleave', () =>
      track.style.animationPlayState = 'running'
    );

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        track.style.setProperty('--shift', (track.scrollWidth / 2) + 'px');
      }, 200);
    });
  });
})();


(function () {
  'use strict';

  window.addEventListener('load', function () {
    const container = document.getElementById('lenguajes-carousel');
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    if (!track) return;

    track.innerHTML += track.innerHTML;

    const shift = track.scrollWidth / 2;
    track.style.setProperty('--shift', shift + 'px');

    track.style.animation = 'slide 12s linear infinite';

    container.addEventListener('mouseenter', () =>
      track.style.animationPlayState = 'paused'
    );
    container.addEventListener('mouseleave', () =>
      track.style.animationPlayState = 'running'
    );

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        track.style.setProperty('--shift', (track.scrollWidth / 2) + 'px');
      }, 200);
    });
  });
})();
