export default function initAccordionList() {
  const dtList = document.querySelectorAll("[data-accordion] dt");

  if (dtList.length) {
    const activeDD = "active";
    dtList[0].nextElementSibling.classList.add(activeDD);
    dtList[0].classList.add(activeDD);
    dtList[0].style.marginBottom = 15 + "px";

    function accordionList() {
      this.nextElementSibling.classList.toggle(activeDD);
      this.classList.toggle(activeDD);

      if (this.nextElementSibling.classList.contains(activeDD)) {
        this.style.marginBottom = 15 + "px";
      } else {
        this.style.marginBottom = 0 + "px";
      }
    }

    dtList.forEach((dt) => {
      dt.addEventListener("click", accordionList);
    });
  }
}
