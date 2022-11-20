const palestrantes = [
  {
    image: "person1.png",
    name: "Juliana - Desenvolvedora Fron End",
    title: "Juliana trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/aRJsdYC6zss"
  },
  {
    image: "person2.png",
    name: "João - Arquiteto de Software",
    title: "João trabalha no Ifood e vai participar da Code Con",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
  {
    image: "person3.png",
    name: "Luiz - Desenvolvedor Full Stack",
    title: "Luiz trabalha no Ifood e vai participar do Tdc Business",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
  {
    image: "person4.png",
    name: "Tiago - Tech Lead",
    title: "Tiago trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
  {
    image: "person4.png",
    name: "José - Desenvolvedor Back End",
    title: "José trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
  {
    image: "person1.png",
    name: "Lorena Devops",
    title: "Lorena trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
  {
    image: "person1.png",
    name: "Laura Desenvolvedora Front End",
    title: "Laura trabalha no Ifood e vai participar do Frontin Sampa",
    description: "Desenvolvedor Full Stack",
    video: "https://www.youtube.com/embed/zwv1hRMO7nU"
  },
];

function openModal(elemento, idx) {
  const palestranteModal = new bootstrap.Modal(elemento, {});
  palestranteModal.show();

  const palestranteItem = palestrantes[idx];
  document.querySelector(`${elemento} #palestranteModalLabel`).innerText = palestranteItem.title;
  document.querySelector(`${elemento} .modal-body`).innerHTML = `
    <iframe width="100%" height="300" src="${palestranteItem.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

  // Slick
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