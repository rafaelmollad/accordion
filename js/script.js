const containerEl = document.querySelector(".container");
const accordionTabEls = document.querySelectorAll(".accordion__tab");

handleAccordions();

centerElementVertically(containerEl);

// Detect when viewport height changes
window.addEventListener("resize", () => {
  centerElementVertically(containerEl);
});
