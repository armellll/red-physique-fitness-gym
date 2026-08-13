
const GALLERY_IMAGES = [
     { file: "wally.jpg"},
     { file: "cafe3.jpg"}, 
     { file: "download (3).jpg"}
];

const MIN_GALLERY_SLOTS = 3; // keeps the grid from looking empty before photos are added

function buildGallery(){
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  GALLERY_IMAGES.forEach(({ file }) => {
    const item = document.createElement("figure");
    item.className = "gallery-item";

    const img = document.createElement("img");
    img.src = `images/gallery/${file}`;
    img.alt = "Red Physique member at the gym";
    img.loading = "lazy";

    item.appendChild(img);
    grid.appendChild(item);
  });


  const remaining = Math.max(0, MIN_GALLERY_SLOTS - GALLERY_IMAGES.length);
  for (let i = 0; i < remaining; i++){
    const slot = document.createElement("div");
    slot.className = "gallery-placeholder";
    slot.textContent = "Photo coming soon";
    grid.appendChild(slot);
  }
}

  function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      lightbox.classList.remove("show");
    }
  });
}

function setupNavToggle(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setFooterYear(){
  const el = document.getElementById("footerYear");
  if (el) el.textContent = `© ${new Date().getFullYear()} Red Physique Fitness Gym`;
}

document.addEventListener("DOMContentLoaded", () => {
  buildGallery();
  setupLightbox();
  setupNavToggle();
  setFooterYear();
});