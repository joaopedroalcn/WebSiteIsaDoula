let imagens = [
  "momentos/09e43ea4-b8bc-4518-b3d7-b8617d90f159.JPG",
  "momentos/29163909-7831-42da-9f5a-72b71aa8ded3.JPG",
  "momentos/591010a9-9326-4a72-ba5e-38f8a96e810e.JPG",
  "momentos/59575e8e-a04f-4869-ba44-1e3804b88c56.JPG",
  "momentos/6a71d15c-0fd0-48b2-89e5-32efe4ca66ef.JPG",
  "momentos/70afbc8b-9c5c-444a-b165-003347c9614c.JPG",
  "momentos/7356d535-cfd8-4b46-9734-d2c06d623a5d.JPG",
  "momentos/841b7b2c-a77d-433f-8bc6-240024d53206.JPG",
  "momentos/8beaa006-3bee-4e62-9835-7b882db87e10.JPG",
  "momentos/8c8046df-36b8-467c-be70-be199b724eab.JPG",
  "momentos/9870aa81-f6ad-47c2-994e-b62b570a28dd.JPG",
  "momentos/a03a632c-dc3d-4aee-bfb0-a587f52bd47e.JPG",
  "momentos/aefb1020-36ec-46ca-b00c-565f51768f73.JPG",
  "momentos/b373c69c-e48d-4194-a2a3-ebc60182ae3e.JPG",
  "momentos/bab6afaf-63db-4124-9bb1-fd7062ebce0a.JPG",
  "momentos/e3840dc5-0980-428f-873b-adcfdcc486af.JPG",
  "momentos/f6cf0d55-47e6-44c7-abab-024615ad0a29.JPG",
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