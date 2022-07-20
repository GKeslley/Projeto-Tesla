export default function initSidebar() {
  const buttonSide = document.querySelector(".sidebar-element");
  const sideBar = document.querySelector(".sidebar");

  if (sideBar) {
    const html = document.documentElement;
    function showSidebar() {
      sideBar.classList.add("show-sidebar");
      outsideClick(sideBar, () => {
        sideBar.classList.remove("show-sidebar");
      });
    }

    function outsideClick(element, callback) {
      const outsideElement = "data-outside";
      if (!element.hasAttribute(outsideElement)) {
        element.setAttribute(outsideElement, "");
        setTimeout(() => {
          html.addEventListener("click", handleOutsideClick);
        });
      }

      function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
          element.removeAttribute(outsideElement);
          html.removeEventListener("click", handleOutsideClick);
          callback();
        }
      }
    }

    buttonSide.addEventListener("click", showSidebar);
  }
}
