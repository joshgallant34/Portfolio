// Alerts for contact form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function () {});
  }

  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });
});
