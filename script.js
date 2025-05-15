const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");
const modalAvaliacoes = document.querySelector(".modal-avaliacoes");
const mascaraAvaliacoes = document.querySelector(".mascara-avaliacoes");

function mostrarModal(){
    modal.style.left = "50%";
    mascara.style.visibility = "visible";
}

function esconderModal() {
    modal.style.left = "-50%";
    mascara.style.visibility = "hidden";
}

function mostrarAvaliacoes(){
    modalAvaliacoes.classList.add("visible");
    mascaraAvaliacoes.classList.add("visible");
}

function esconderAvaliacoes() {
    modalAvaliacoes.classList.remove("visible");
    mascaraAvaliacoes.classList.remove("visible");
}


function filtrarBolos(categoria) {
  const bolos = document.querySelectorAll('.bolo-item');
  bolos.forEach(bolo => {
    const cat = bolo.getAttribute('data-categoria');
    if (categoria === 'todos' || cat === categoria) {
      bolo.style.display = 'block';
    } else {
      bolo.style.display = 'none';
    }
  });
}
