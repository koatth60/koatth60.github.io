//RESPONSIVE NAVBAR

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll')
})

//STICKY NAV
const nav = document.querySelector('nav');
const bttButton = document.querySelector('.btt-button');
const handleScroll = () => {
    if(window.scrollY > 0) {
        nav.classList.add('sticky-nav')
        bttButton.classList.add('show-btt-button')
    } else {
        nav.classList.remove('sticky-nav')
        bttButton.classList.remove('show-btt-button')
    }
}
window.addEventListener('scroll', handleScroll)

// ACTIVE LINKS 

const navLinks = document.querySelectorAll('.nav-menu li a')


navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
        navLinks.forEach((link) => {
            link.parentElement.classList.remove('active');
        });
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('no-scroll');
        this.parentElement.classList.add('active');
    });
});

// ANIMATIONS 
const animateElements = gsap.utils.toArray('.animate')
const animateImage = gsap.utils.toArray('.animateImage')
gsap.from(animateElements, {
    opacity: 0,
    x: 50,
    duration: 1,
    stagger:0.2,
});

gsap.from(animateImage, {
    opacity: 0,
    x: -50,
    duration: 1,
    stagger:0.2,
})


// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".close-btn");
  
   
    document.querySelectorAll(".project-button").forEach(button => {
      button.addEventListener("click", () => {
        // Populate modal with project details from data attributes
        modalTitle.textContent = button.getAttribute("data-project");
        modalDescription.textContent = button.getAttribute("data-description");
        modalLink.href = button.getAttribute("data-link");
  
        // Show modal
        modal.style.display = "block";
      });
    });
   
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
 
    window.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
