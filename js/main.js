// Alerts for contact form
document.addEventListener("DOMContentLoaded", function(){
  const contactForm = document.getElementById("contact-form");
  if(contactForm){
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();
      alert("This is a demo form — replace with your form handler or email link.");
    });
  }

  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if(link.getAttribute("href") === currentPage) link.classList.add("active");
  });
});
