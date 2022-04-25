const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelector('.nav-item');
const navItemLink = document.querySelectorAll('.nav-item-link');
const header = document.querySelector('.header');
const scrollup = document.querySelector('.scrollup');
const counters = document.querySelectorAll('.value');
const body = document.getElementById('#body');

// Toggling the menu by clicking hamburger icon or links
const toggle = () => {
    navList.classList.toggle('active'),
    menuToggle.classList.toggle('active')
};

menuToggle.addEventListener('click', toggle);
navItemLink.forEach(e => e.addEventListener('click', toggle));

// Add a border to the header when scrolling
const headerBorderScroll = () => {
    if (this.scrollY >= 30) header.classList.add('active-scroll'); else header.classList.remove('active-scroll');
};

window.addEventListener('scroll', headerBorderScroll);

// Make the scrollup button appear after scrolling a certain distance
const scrollTop = () => {
    if (this.scrollY >= 800) scrollup.classList.add('active-scrollup'); else scrollup.classList.remove('active-scrollup');
};

window.addEventListener('scroll', scrollTop);

// Animate the statistics number counter
window.onscroll = function() { 
    let windowPos = window.scrollY;
    let counterPos = document.querySelector('.content').offsetTop;
    let scrollTrigger = counterPos - window.innerHeight + 200;
    if (windowPos >= scrollTrigger) {
      const counters = document.querySelectorAll('.value');
      const speed = 400; // The lower the slower

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('akhi');
          const count = +counter.innerText;
          const inc = target / speed;

          // Check if target is reached
          if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 100);
          } else {
            counter.innerText = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        };

        updateCount();
      });
    }
  }

// Toggle dark mode on the body when button is pressed
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

//Scroll Reveal animations
window.sr = new ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
});

sr.reveal('.main-container, .community-right');
sr.reveal('.plans-left, .contact-left, .contact-img', {origin: 'left'});
sr.reveal('.plans-right', {origin: 'right'});
sr.reveal('.community-img, .network-info, .portfolio-swiper', {origin: 'bottom'});
sr.reveal('.card, .testimonial-item, .footer-item', {interval: 100});