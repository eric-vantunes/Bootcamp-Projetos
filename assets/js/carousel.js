const palestrantes = [
  {
    image: "person1.png",
    name: "Juliana",
    title: "Juliana trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person2.png",
    name: "João",
    title: "João trabalha no Ifood e vai participar da Code Con",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person3.png",
    name: "Luiz",
    title: "Luiz trabalha no Ifood e vai participar do Tdc Business",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person4.png",
    name: "Tiago",
    title: "Tiago trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person4.png",
    name: "José",
    title: "José trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person1.png",
    name: "Lorena",
    title: "Lorena trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack" 
  },
  {
    image: "person1.png",
    name: "Laura",
    title: "Laura trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack" 
  },
];

function openModal(elemento, idx) {
  const palestranteModal = new bootstrap.Modal(elemento, {});
  palestranteModal.show();

  const palestranteItem = palestrantes[idx];
  document.querySelector(`${elemento} #palestranteModalLabel`).innerText = palestranteItem.title;
  document.querySelector(`${elemento} .modal-body`).innerHTML = `
    <p>${palestranteItem.description}</p>
  `;
}

class Carousel{
  constructor(elementosCarousel, carousel){
    this.elementosCarousel = elementosCarousel;
    this.carousel = carousel;
  }

  generateCarousel(){
    let itensPalestrante = '';
    let idx = 0;

    for(let palestrante of palestrantes){
      itensPalestrante += `
        <div class="palestrante" data-toggle="tooltip" data-bs-placement="top" title="${palestrante.name}">
          <div class="container-palestrantes">
            <img class="img-palestrantes" src="./assets/imgs/imgcards/${palestrante.image}" />
            <button type="button" onclick="openModal('#palestranteModal', ${idx})"><i class="fa-solid fa-chevron-up"></i></button>
          </div>
        </div>
      `;

      idx++;
    }

    this.elementosCarousel.innerHTML = itensPalestrante;
  }

    initCarousel(){
      $(".palestrantes").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1199.9,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 991.9,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 767.9,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 575.9,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
} 

const palestrantesCarousel = document.querySelector(".palestrantes");
const carousel = new Carousel(palestrantesCarousel, palestrantes);

document.addEventListener("DOMContentLoaded", function() {
  $("body").tooltip({ selector: "[data-toggle=tooltip]" });
});