// let current = 0;
// let target = 0;
// let ease = 0.1;

// let windowWidth, containerHeight, imageHeight, skewDiff;
// let container = document.querySelector(".content");
// const scrollWrapper = document.querySelector(".smooth-scroll-wrapper");

// function lerp(start, end, t) {
//   return start * (1 - t) + end * t;
// }

// function setTransform(el, transform) {
//   el.style.transform = transform;
// }

// function setupAnimation() {
//   windowWidth = window.innerWidth;
//   console.log(windowWidth);
//   containerHeight = container.getBoundingClientRect().height;
//   console.log(containerHeight);
//   imageHeight =
//     containerHeight / (windowWidth > 760 ? images.length / 2 : images.length);

//   document.body.style.height = `${containerHeight}px`;

//   smoothScroll();
// }

// function smoothScroll() {
//   current = lerp(current, target, ease);
//   current = parseFloat(current.toFixed(2));
//   target = window.scrollY;
//   setTransform(container, `translateY(${-current}px)`);
//   requestAnimationFrame(smoothScroll);
// }

// if (window.matchMedia("(min-width: 1024px)").matches) {
// scrollWrapper.classList.add("active");

// } else {
//   scrollWrapper.classList.remove("active");
// }

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

// add header styles on scroll
const headerScroll = () => {
  const headerElement = document.querySelector(".header");
  window.scrollY >= 30
    ? headerElement.classList.add("active")
    : headerElement.classList.remove("active");
};
// window.addEventListener("scroll", headerScroll);

// add secondLogo styles on scroll
const logoScroll = () => {
  const sideLogo = document.querySelector(".navbar__side-logo");
  window.scrollY >= 100
    ? sideLogo.classList.add("active")
    : sideLogo.classList.remove("active");
};
window.addEventListener("scroll", logoScroll);

// open and close the menu on click btn
// const menuToggler = document.querySelector("#menu-toggler");
// const navbarMenu = document.querySelector(".navbar__menu");
// const toggleMenu = () => {
//   navbarMenu.classList.toggle("active");
//   menuToggler.classList.toggle("active");
// };
// menuToggler.addEventListener("click", toggleMenu);

// const linksToggleMenu = (e) => {
//   if (e.target.classList.contains("navbar__list-link")) {
//     navbarMenu.classList.remove("active");
//     menuToggler.classList.remove("active");
//   }
// };

// window.addEventListener("click", linksToggleMenu);

// // Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure that ${selector} exists or is typed correctly`
  );
};

// swiper
// const swiper = new Swiper(".myswiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// swiper
const swiper2 = new Swiper(".myswiper2", {
  speed: 800,
  effect: "fade",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  fadeEffect: { crossFade: true },
});

// Switch theme/add to local storage

const bodyElement = document.body;
// const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");
const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
if (currentTheme) {
  bodyElement.classList.add("dark-theme");
}
console.log(themeToggleBtns);

themeToggleBtns.forEach((themeToggleBtn) => {
  themeToggleBtn.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-theme");

    if (bodyElement.classList.contains("dark-theme")) {
      localStorage.setItem("currentTheme", "themeActive");
    } else {
      localStorage.removeItem("currentTheme");
    }
  });
});

// const letters = "ABCDEFGHIJKMNOPQRSTUVWXYZ";
// document.querySelector(".showcase__title").onmouseover = (event) => {
//   let iterations = 0;
//   setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter) => letters[Math.floor(Math.random() * 26)])
//       .join("");
//     if (iterations >= 9) clearInterval(interval);
//     iterations += 1;
//   }, 30);
// };

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function meshLetters(event) {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 22);
}
document.querySelector(".text-effect2").onmouseover = (event) => {
  meshLetters(event);
};

document.querySelector(".text-effect").onmouseover = (event) => {
  meshLetters(event);
  // let iteration = 0;
  // clearInterval(interval);
  // interval = setInterval(() => {
  //   event.target.innerText = event.target.innerText
  //     .split("")
  //     .map((letter, index) => {
  //       if (index < iteration) {
  //         return event.target.dataset.value[index];
  //       }
  //       return letters[Math.floor(Math.random() * 26)];
  //     })
  //     .join("");
  //   if (iteration >= event.target.dataset.value.length) {
  //     clearInterval(interval);
  //   }
  //   iteration += 1 / 3;
  // }, 22);
};

const blob = document.getElementById("blob");
console.log(blob);

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 6000, fill: "forwards" }
  );
};

// scroll reveal

const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
});

sr.reveal(
  ".showcase__title,.showcase__title2,  .showcase__image, .section-metadata, .swiper",
  {
    origin: "top",
    interval: 150,
  }
);

sr.reveal(".services__image-wrapper,.about__information, .post--left", {
  origin: "left",
});

sr.reveal(
  ".services__list,.about__images, .post--left, .post--right, .projects-wrapper, .prices__list",
  {
    origin: "right",
  }
);

sr.reveal(".projects__container", {
  origin: "top",
});

// var scroll = new SmoothScroll('a[href*="#"]');

// ------------------------------------------------------------
// second menu
// ------------------------------------------------------------
let menuToggles = document.querySelectorAll(".menu-toggle");
let menuClose = document.querySelector(".menu-close");
let menu = document.querySelector(".second-menu");

let navLinks = Array.from(document.querySelectorAll(".nav-link"));

menuToggles.forEach((menuToggle) => {
  menuToggle.addEventListener("click", openMenu);
});

menuClose.addEventListener("click", closeMenu);

function openMenu() {
  menu.classList.add("active");
  navLinks.forEach((link, idx) => {
    setTimeout(() => {
      link.classList.add("active");
    }, (idx + 1) * 170);
  });
}

const linksToggleMenu2 = (e) => {
  if (e.target.classList.contains("nav-link")) {
    menu.classList.remove("active");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }
};

window.addEventListener("click", linksToggleMenu2);

function closeMenu() {
  menu.classList.remove("active");

  setTimeout(() => {
    navLinks.forEach((link) => {
      setTimeout(() => {
        link.classList.remove("active");
      }, 100);
    });
  });
}

// ------------------------------------------------------------
// filtering posts animation
// ------------------------------------------------------------
const btns = document.querySelectorAll(".btn--project");
const activeBtn = document.querySelector(".btn--project.active");
const imgs = [...document.querySelectorAll(".projects-wrapper img")];
const imgWrapper = document.querySelector(".projects-wrapper");

let imgsCopy = [...imgs];
function delay(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function adjustActives() {
  console.log(imgsCopy);
  for (let img of imgs) {
    removingImage(img);
  }
  imgWrapper.innerHTML = "";
  imgsCopy = imgs.filter((img) => +img.dataset.img === +activeBtn.dataset.btn);

  imgWrapper.append(...imgsCopy);
  for (let img of imgsCopy) {
    addingImage(img);
  }
}

adjustActives();

function removingImage(img) {
  img.classList.remove("img-expand");
  img.classList.add("img-shrink");
}

function addingImage(img) {
  img.classList.remove("img-shrink");
  img.classList.add("img-expand");
}

async function filterImg(e) {
  setActiveBtns(e);
  const btnType = parseInt(e.target.dataset.btn);
  const reverseArray = imgsCopy.slice().reverse();
  console.log(reverseArray);
  for (let img of reverseArray) {
    await removingImage(img);
    await delay(50);
  }

  imgWrapper.innerHTML = "";
  console.log(imgsCopy);
  imgsCopy = imgs.filter((img) => +img.dataset.img === btnType);

  imgWrapper.append(...imgsCopy);

  for (let img of imgsCopy) {
    await delay(50);
    await addingImage(img);
    await delay(50);
  }
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", filterImg);
}

function setActiveBtns(e) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");
}

// add zoom and zoom out pictures

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imgs.forEach((img) => {
  img.addEventListener("click", zoomImg);
});

function zoomImg() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  img01.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    img01.className = "modal-content";
  }, 400);
};

// btns[0].addEventListener("click", async (e) => {
//   setActiveBtns(e);
//   const reverseArray = imgsCopy.slice().reverse();

//   for (let img of reverseArray) {
//     await removingImage(img);
//     await delay(100);
//   }
//   imgsCopy = [...imgs];
//   imgWrapper.innerHTML = "";
//   imgWrapper.append(...imgsCopy);
//   await delay(100);
//   imgs.forEach((img, idx) => {
//     setTimeout(() => {
//       img.classList.remove("img-shrink");
//       img.classList.add("img-expand");
//     }, idx * 100);
//   });
// });

// window.addEventListener(
//   "load",
//   function () {
//     setTimeout(() => {
//       setupAnimation();
//     });
//   },
//   50
// );

// --------------------------------------------------------------
// 3d hover effect
// --------------------------------------------------------------

/* Store the element in el */
// let el = document.getElementById("tilt");
const elements = document.querySelectorAll(".tilt");

/* Get the height and width of the element */

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
console.log(window.innerWidth);
if (window.innerWidth >= 992) {
  elements.forEach((el) => {
    const height = el.clientHeight;
    const width = el.clientWidth;
    el.addEventListener("mousemove", handleMove.bind(null, height, width, el));

    el.addEventListener("mouseout", function () {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });

    /* Add listener for mousedown event, to simulate click */
    el.addEventListener("mousedown", function () {
      el.style.transform =
        "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });

    /* Add listener for mouseup, simulate release of mouse click */
    el.addEventListener("mouseup", function () {
      el.style.transform =
        "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    });
  });
}

/* Define function a */
function handleMove(height, width, el, e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX;
  /* Store the y position */
  const yVal = e.layerY;

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 20 * ((xVal - width / 2) / width);

  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height);

  /* Generate string for CSS transform property */
  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  /* Apply the calculated transformation */
  el.style.transform = string;
}

// intersection observer

const projectsSection = document.querySelector("#projects");
const pricesSection = document.querySelector("#prices");

const sideNavbar = document.querySelector(
  ".navbar__side-logo .navbar__btn-group"
);
const sideLogo = document.querySelectorAll(
  ".navbar__side-logo .navbar__logo .navbar__logo-image"
);

const observer = new IntersectionObserver(
  function (entries, self) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.boundingClientRect.top < 0) {
        if (!entry.isIntersecting) {
          console.log("na biały");

          sideLogo[1].src = "./assets/images/AMP_logotyp_oko_White.svg";
        } else {
          sideLogo[1].src = "./assets/images/oko_kolor.svg";
          console.log("na kolorowy");
        }
      }
    });
  },
  {
    root: null,
    rootMargin: "-150px",
    threshold: 0,
  }
);
const observer2 = new IntersectionObserver(
  function (entries, self) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.boundingClientRect.top < 0) {
        if (!entry.isIntersecting) {
          sideLogo[1].src = "./assets/images/oko_kolor.svg";
        } else {
          sideLogo[1].src = "./assets/images/AMP_logotyp_oko_White.svg";
        }
      }
    });
  },
  {
    root: null,
    rootMargin: "-50px",
    threshold: 0,
  }
);

const observer3 = new IntersectionObserver(
  function (entries, self) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.boundingClientRect.top < 0) {
        if (!entry.isIntersecting) {
          console.log("na biały");

          sideNavbar.classList.add("active");
        } else {
          sideNavbar.classList.remove("active");
          console.log("na kolorowy");
        }
      }
    });
  },
  {
    root: null,
    rootMargin: "-70px",
    threshold: 0,
  }
);
const observer4 = new IntersectionObserver(
  function (entries, self) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.boundingClientRect.top < 0) {
        if (!entry.isIntersecting) {
          sideNavbar.classList.remove("active");
        } else {
          sideNavbar.classList.add("active");
        }
      }
    });
  },
  {
    root: null,
    rootMargin: "-50px",
    threshold: 0,
  }
);

// observer.observe(projectsSection);
observer.observe(pricesSection);
observer2.observe(projectsSection);
observer3.observe(pricesSection);
observer4.observe(projectsSection);
