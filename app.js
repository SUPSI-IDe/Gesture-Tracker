const VIDEO_BASE_PATH = "optimized/";
const VIDEO_LIST = [
  "tracking_.0.mp4",
  "tracking_.1.mp4",
  "tracking_.10.mp4",
  "tracking_.11.mp4",
  "tracking_.12.mp4",
  "tracking_.13.mp4",
  "tracking_.14.mp4",
  "tracking_.15.mp4",
  "tracking_.16.mp4",
  "tracking_.17.mp4",
  "tracking_.18.mp4",
  "tracking_.19.mp4",
  "tracking_.2.mp4",
  "tracking_.20.mp4",
  "tracking_.21.mp4",
  "tracking_.22.mp4",
  "tracking_.23.mp4",
  "tracking_.24.mp4",
  "tracking_.25.mp4",
  "tracking_.26.mp4",
  "tracking_.3.mp4",
  "tracking_.34.mp4",
  "tracking_.35.mp4",
  "tracking_.36.mp4",
  "tracking_.37.mp4",
  "tracking_.38.mp4",
  "tracking_.39.mp4",
  "tracking_.4.mp4",
  "tracking_.40.mp4",
  "tracking_.41.mp4",
  "tracking_.5.mp4",
  "tracking_.6 2.mp4",
  "tracking_.6.mp4",
  "tracking_.7.mp4",
  "tracking_.8.mp4",
  "tracking_.9.mp4"
];

const GRID_CONTAINER  = document.getElementById("grid-container");
const TEMPLATE        = document.getElementById("camera-template");

function addVideoToGrid(filename) {
  const clone = TEMPLATE.content.cloneNode(true);
  const box = clone.querySelector(".camera-box");
  const videoTag = clone.querySelector(".camera-video");
  const overlay = clone.querySelector(".camera-overlay");

  videoTag.src = `${VIDEO_BASE_PATH}${encodeURIComponent(filename)}`;
  videoTag.setAttribute("playsinline", "");
  videoTag.setAttribute("muted", "");
  videoTag.setAttribute("loop", "");

  overlay.textContent = filename;
  box.dataset.filename = filename;

  GRID_CONTAINER.appendChild(clone);
}

function updateGrid() {
  GRID_CONTAINER.replaceChildren();
  VIDEO_LIST.forEach(addVideoToGrid);
}

window.addEventListener("DOMContentLoaded", () => {
  updateGrid();
});

// Alla fine di public/app.js

// Permette di entrare/uscire da fullscreen con la barra spaziatrice
window.addEventListener("keydown", e => {
  // Se stiamo editando un campo di testo (input, textarea), lo ignoriamo
  const tag = document.activeElement.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  if (e.code === "Space") {
    e.preventDefault();

    // Se siamo già in fullscreen, usciamo
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // Altrimenti entriamo in fullscreen sul container principale
      // Modo più “neutro”: full‐screen sull’intera pagina
      const root = document.documentElement; // <html>
      (root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen).call(root);
    }
  }
});
