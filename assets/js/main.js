// Header & Navigation
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* ============= Menu Show ============= */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Adds the class to show the menu
    });
}

/* ============= Menu Hidden ============= */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Removes the class to hide the menu
    });
}

/* ============= Remove Menu Mobile ============= */
const navLink = document.querySelectorAll('.nav__link'); // Collects all elements with the class 'nav__link'

const linkAction = () => {
    // Removes the 'show-menu' class when a nav link is clicked
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction)); // Adds the click event to each nav link




/* ============= Add Blur Header ============= */
const blurHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the scroll position is greater than or equal to 50
    window.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header');
}

window.addEventListener('scroll', blurHeader);





/*=============== ADD BLUR HEADER ===============*/


/*=============== EMAIL JS ===============*/
// Initialize EmailJS with your public key
emailjs.init('tca-h4EoAwFUwER5-'); // Replace with your actual public key from EmailJS

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message');
    
    // Function to send email
    const sendEmail = (e) => {
        e.preventDefault();
        
        // Show loading or sending message
        contactMessage.textContent = 'Sending message...';

        // Send email via EmailJS
        emailjs.sendForm('service_yx6gli9', 'template_tt5zt84', contactForm)
            .then(() => {
                // Show success message
                contactMessage.textContent = 'Message sent successfully ✅';

                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);

                // Clear the form fields
                contactForm.reset();
            })
            .catch((error) => {
                // Show error message and log error
                contactMessage.textContent = 'Message not sent (service error) ❌';
                console.error('Error in sending email:', error);
            });
    };

    // Add event listener to the form submit event
    contactForm.addEventListener('submit', sendEmail);
});

/*              Active navigation link      */
/* ================= Scroll Up ====================== */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When scroll is higher than 350 viewport height, add the class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ============== Scroll Section Active Link =================== */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =============== Animation Scroll ============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true  //Animation repeat 
})

sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', { delay: 600 })
sr.reveal('.home__scroll, .services__card', { delay: 800 })
sr.reveal('.work__card', { interval: 100 })
sr.reveal('.about__content', { origin: 'right' })
sr.reveal('.about__img', { origin: 'left' })


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/