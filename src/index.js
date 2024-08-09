const activeBullet = document.querySelector(".swiper-pagination-bullet-avtive");
const bullets = document.querySelectorAll(".swiper-pagination-bullet");
let links = document.getElementsByTagName("a");

// ## ## ## ## ## ## ** Swiper Control function  ** ## ## ## ## ## ## 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  autoplay: false,
  parallax: true,
  infinite: true,
  speed: 1300,
  autoplay: {
    delay: 3700,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    enabled: true,
  },

  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ## ## ## ## ******** **  The End Of it **  ********## ## ## ## ## ## 
// ## ## ## ## ## ## ** Swiper Bullets count-down effect function  ** ## ## ## ## ## ## 

const progress = () => {
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach((dot) => {
    let countdownEffect = document.createElement("span");
    countdownEffect.classList.add("count-down");
    if (dot.classList.contains("swiper-pagination-bullet-active")) {
      dot.appendChild(countdownEffect);
      countdownEffect.classList.add("bullet-follow");
      countdownEffect.style.cssText = `
        animation-name: progress;
        animation-duration: 3800ms;
        animation-iteration-count: infinite;
        display: block;
        width: 100%;
        animation-timing-function: ease-in-out;
        height: 3px;
      animation-fill-mode: forwards;
        background: white!important;
        pointer-events: none;
      `;
    }
    setTimeout(() => {
      dot.innerHTML=``
    }, 3200);
  });

};

// ## ## ## ## ******** **  The End Of it **  ********## ## ## ## ## ## 
// ## ## ## ## ## ## ** Connect the progress function with Swiper  ** ## ## ## ## ## ## 

let animationInterval;

swiper.on("slideChange", () => {
  // Clear any existing interval to avoid multiple intervals running at the same time
  if (animationInterval) {
    clearInterval(animationInterval);
  }

  // Set up a new interval
  animationInterval = setInterval(progress, 2800);
});

// Initialize the interval on the first load
animationInterval = setInterval(progress, 800);

// ## ## ## ## ******** **  The End Of it **  ********## ## ## ## ## ## 
// ## ## ## ## ## ## ** Disable page redirecting on clicking on any link  ** ## ## ## ## ## ## 

[...links].forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
});

// ** ** **  In case U wanna stop the autoplay feature. ** ** **
// swiper.autoplay.stop()
