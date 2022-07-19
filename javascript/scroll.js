export default function initAnimationScroll() {
  const dataElements = document.querySelectorAll("[data-scroll]");
  const windowHeight = window.innerHeight * 0.6;

  if (dataElements) {
    function animationScroll() {
      dataElements.forEach((element) => {
        const elementTopHight =
          element.getBoundingClientRect().top - windowHeight;
        element.classList.add("opacity-0");
        if (elementTopHight < 0) {
          element.classList.add("opacity-1");
          element.classList.add("rightMovie");
        } else if (element.classList.contains("opacity-1")) {
          element.classList.remove("opacity-1");
          element.classList.remove("rightMovie");
        }
        leftRight(element);
      });
    }

    function leftRight(element) {
      if (
        element.hasAttribute("data-left") &&
        element.classList.contains("opacity-1")
      ) {
        element.classList.add("leftMove");
        element.classList.remove("rightMovie");
      } else if (
        element.hasAttribute("data-left") &&
        !element.classList.contains("opacity-1")
      ) {
        element.classList.remove("leftMove");
      }
    }

    window.addEventListener("scroll", animationScroll);
  }
}
