const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const mobileLinks = document.querySelectorAll("#mobileMenu a");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
