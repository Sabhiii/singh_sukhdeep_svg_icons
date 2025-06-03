const icons = document.querySelectorAll(".svg-icon");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const iconId = icon.id;
    console.log(`🖱️ You clicked the icon with ID: ${iconId}`);
  });
});
