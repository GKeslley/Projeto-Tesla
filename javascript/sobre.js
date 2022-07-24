export default function initSobre() {
  const liElement = document.querySelectorAll(".sobre-buttons button");
  const divElement = document.querySelectorAll(".sobre-descricoes div");
  const img = document.querySelector(".img-principal img");

  if (liElement.length) {
    divElement[0].classList.add("ativo");

    function handleClick(index) {
      divElement.forEach((div) => {
        div.classList.remove("ativo");
      });

      divElement[index].classList.add("ativo");

      if (
        divElement[index].classList.contains("ativo") &&
        divElement[index].attributes.id.value === "curiosidades"
      ) {
        img.setAttribute("src", "./imgs/sobre/curiosidades.jpg");
      } else if (
        divElement[index].classList.contains("ativo") &&
        divElement[index].attributes.id.value === "empresas"
      ) {
        img.setAttribute("src", "./imgs/sobre/empresas.jpg");
      } else {
        img.setAttribute("src", "./imgs/sobre/elon-musk-tesla-cybertruck.jpg");
      }
    }

    liElement.forEach((item, index) => {
      item.addEventListener("click", () => {
        handleClick(index);
      });
    });
  }
}
