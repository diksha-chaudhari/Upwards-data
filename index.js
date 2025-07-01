// MAIN JS 

// Scroll effect on navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "none";
  }
});