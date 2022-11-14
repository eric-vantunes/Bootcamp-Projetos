// news
const banners = [
  {
  title: "Dev Community",
  description:"Notícias sobre tecnologia e eventos tech.",
  image: "banner1.png"
},
  {
  title: "",
  description: "",
  image: "banner-evento.png"
},
]

class Banner {
  constructor(elementoCarousel, banners){
    this.elementoCarousel = elementoCarousel;
    this.banners = banners;
  }

  generateBanner(){
    let itensCarousel = '';
    let idx = 0;
  
    for(const banner of banners){
      let active = '';
      if(idx === 0 ) {
        active = "active";
      }
  
      itensCarousel += `
      <div class="carousel-item ${active}">
        <div class="content-news-banner">
          <img src="./assets/imgs/bannernews/${banner.image}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="animate__animated animate__heartBeat">${banner.title}</h5>
              <p>${banner.description}</p>
            </div>
        </div>
    </div>
      `;
  
      idx++;
  
    }
  
    this.elementoCarousel.innerHTML = itensCarousel
  }
}

const carousel = document.querySelector('#carousel-banner')
const banner = new Banner(carousel, banners);

document.addEventListener('DOMContentLoaded', () => {
  banner.generateBanner();
});





