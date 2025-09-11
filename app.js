// Optional: Smooth font resize on window resize
window.addEventListener("resize", () => {
  const textDiv = document.querySelector("#text-div");
  if (window.innerWidth < 600) {
    textDiv.style.fontSize = "clamp(20px, 5vw, 40px)";
  } else {
    textDiv.style.fontSize = "clamp(40px, 6vw, 80px)";
  }
});
