// Centers an element vertically on the page
const centerElementVertically = (element) => {
  const viewportHeight = window.innerHeight;
  const elementHeight = element.getBoundingClientRect().height;

  element.style.top = `calc(${viewportHeight / 2 - elementHeight / 2}px)`;
};

// Get previous accordionContentEl that was opened
const getPreviousAccordionContentEl = (currentAccordionContentEl) => {
  const previousAccordionContentEl = [
    ...document.querySelectorAll(".accordion__content"),
  ].find((accordionContentEl) => {
    return (
      accordionContentEl !== currentAccordionContentEl &&
      accordionContentEl.classList.contains("accordion__content--open")
    );
  });

  return previousAccordionContentEl;
};

// Close Accordion
const closeAccordionContentEl = (accordionContentEl) => {
  accordionContentEl.classList.remove("accordion__content--open");
};

// Handles the opening and closing of accordions
const handleAccordions = () => {
  accordionTabEls.forEach((accordionTabEl) => {
    accordionTabEl.addEventListener("click", function () {
      // Select current accordion content element
      const currentAccordionContentEl = this.nextElementSibling;

      // Get the previous accordion content element
      const previousAccordionContentEl = getPreviousAccordionContentEl(
        currentAccordionContentEl
      );

      // Close the previous accordion content element (if any)
      // Change accordion icon from + to - for the previous accordion
      if (previousAccordionContentEl) {
        closeAccordionContentEl(previousAccordionContentEl);
        previousAccordionContentEl.previousElementSibling.children[1].children[1].classList.toggle(
          "icon-line--active"
        );
      }

      // Open/close current accordionContentEl
      currentAccordionContentEl.classList.toggle("accordion__content--open");

      // Change accordion icon from + to - for the current accordion
      this.children[0].nextElementSibling.children[1].classList.toggle(
        "icon-line--active"
      );
    });
  });
};
