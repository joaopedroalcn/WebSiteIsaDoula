let imagens = [
  "assets/Isadora Serra (119).JPG",
  "assets/Isadora Serra (123).JPG",
  "assets/Isadora Serra (348).JPG",
  "assets/Isadora Serra (367).JPG",
  "assets/Isadora Serra (373).JPG",
  "assets/Isadora Serra (455).JPG",
  "assets/Isadora Serra (56).JPG",
  "assets/Isadora Serra (6).JPG",
  "assets/Isadora Serra (7) (1).JPG",
  "assets/Isadora Serra (7).JPG",
  "assets/Isadora Serra (85).JPG",
  "assets/Isadora Serra (96).JPG",
  "assets/WhatsApp Image 2025-07-31 at 09.02.15 (1).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.15 (2).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.15 (3).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.15.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.16 (1).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.16 (2).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.16 (3).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.16.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.17 (1).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.17 (2).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.17 (3).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.17.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.18.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.20 (1).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.20.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.21 (1).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.21 (2).jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.21.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.23.jpeg",
  "assets/WhatsApp Image 2025-07-31 at 09.02.24.jpeg",
];

// Embaralhar
for (let i = imagens.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imagens[i], imagens[j]] = [imagens[j], imagens[i]];
}

const container = document.getElementById("carousel-slide");

imagens.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.loading = "lazy";
  container.appendChild(img);
});

const slides = container.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
  const width = slides[0].clientWidth;
  container.style.transform = `translateX(${-width * currentIndex}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();