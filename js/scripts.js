document.querySelectorAll(".svg-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const id = icon.id;
    console.log(`🔥 You clicked the icon with ID: ${id}`);
  });
});
