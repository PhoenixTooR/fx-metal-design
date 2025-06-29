document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu");
  const menuItems = document.getElementById("menuItems");

  menuToggle.addEventListener("click", () => {
    menuItems.classList.toggle("show");
  });

  // Carrossel simples
  const slides = document.getElementById("slides");
  const images = slides.querySelectorAll("img");
  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    showSlide(index + 1);
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    showSlide(index - 1);
  });
});
