export default function initAnimaNumbers() {
  const numberElements = document.querySelectorAll("[data-number]");

  if (numberElements) {
    function animationNumbers() {
      numberElements.forEach((valor) => {
        let start = 0;

        const total = +valor.innerText;
        const incremento = Math.round(total / 100);

        const timer = setInterval(() => {
          start = start + incremento;
          valor.innerText = start;

          if (start > total) {
            clearInterval(timer);
            valor.innerText = total;
          }
        }, 10 * Math.random());
      });
    }

    function mutationElement(mutation) {
      if (mutation[0].target.classList.contains("opacity-1")) {
        observer.disconnect();
        animationNumbers();
      }
    }

    const elementObserver = document.querySelector(".numeros");

    const observer = new MutationObserver(mutationElement);
    observer.observe(elementObserver, { attributes: true });
  }
}
