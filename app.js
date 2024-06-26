// menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// Scroll Section active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  // sections.forEach(sec => { 
  //   let top = window.scrollY;
  //   let offset = sec.offsetTop - 150;
  //   let height = sec.offsetHeight;
  //   let id = sec.getAttribute('id');

  //   if (top >= offset && top < offset + height) {
  //     navLinks.forEach(links => {
  //       links.classList.remove('active');
  //       document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
  //     });
  //   };
  // });

  // Sticky Navbar
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);


  // Remove menu icon navbar when click navbar link (Scroll)
  menuIcon.classList.toggle('bx-x');
  navbar.classList.remove('active');
};

//Dark mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}

//Scroll Reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


var readMore = document.getElementById('readMore');
var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];

readMore.addEventListener('click', function () {
  // Display the modal
  modal.style.display = 'block';
});

// Close the modal when the user clicks on the close button
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Email
// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "anuskhalil77@gmail.com",
//     Password: "mernstack@006",
//     To: 'anuskhalil77@gmail.com',
//     From: "sender@email_address.com",
//     Subject: "Sending Email using javascript",
//     Body: "Well that was easy!!",
//     Attachments: [
//       {
//         name: "File_Name_with_Extension",
//         path: "Full Path of the file"
//       }]
//   })
//     .then(function (message) {
//       alert("mail sent successfully", message)
//     });
// }

















//Swipper Code
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 50,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });