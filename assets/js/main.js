window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("stickyheader");
    } else {
        header.classList.remove("stickyheader");
    }
});


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide("#property", {
      type: "loop",
      arrows: true,
      gap: 0,
      perPage: 1,
      pagination: true,
      focus: "start",
      autoplay: false,
      speed: 800,
      interval: 3000,
      rewind: true,
      rewindSpeed: 500,
      breakpoints: {
        1024: { perPage: 1, gap: 0 },
        768: { perPage: 1, gap: 0},
        400: { perPage: 1, gap: 10 },
      },
    });
  
    let progressBar = document.getElementById("progress-bar");
  
    splide.on("move", function () {
      let totalSlides = splide.length - 1;
      let currentSlide = splide.index;
      let progress = ((currentSlide + 1) / (totalSlides + 1)) * 100;
  
      progressBar.style.width = progress + "%";
    });
  
    splide.mount();
  });

