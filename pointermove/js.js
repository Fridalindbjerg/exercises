window.addEventListener("mousemove", (event) => {
  console.log(event.clientX);
  const pct = (event.clientX / window.innerWidth) * 100;
  let hue = (pct / 100) * 35;
  document.body.style.setProperty("background", `hsl(${hue}, 100%, 50%)`);
});
