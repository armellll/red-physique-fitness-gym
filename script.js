
const GALLERY_IMAGES = [
     { file: "community1.jpg"},
     { file: "community2.jpg"}, 
     { file: "community3.jpg"}
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
  setupNavToggle();
  setFooterYear();
});