const navBtn = document.querySelector(".nav-btn");
const nav = document.getElementById("nav");

let navOpen = false;

navBtn.addEventListener("click", (e) => {
  const ev = e || window.event;
  ev.stopPropagation();

  if (!navOpen) {
    navBtn.classList.add("open");
    nav.style.transform = "translateX(" + 0 + "px)";
    navOpen = true;
  } else {
    navBtn.classList.remove("open");
    nav.style.transform = "translateX(" + -360 + "px)";
    navOpen = false;
  }
});

nav.addEventListener("click", (e) => {
  const ev = e || window.event;
  ev.stopPropagation();
});

document.addEventListener("click", (e) => {
  nav.style.transform = "translateX(" + -360 + "px)";
  navBtn.classList.remove("open");
});

$(".menu-btn").hover(
  function () {
    $(".arrow").attr("src", "image/menu/menu-arrow-icon-white.png");
  },
  function () {
    $(".arrow").attr("src", "image/menu/menu-arrow-icon.png");
  }
);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 500,
  // reset: true,
});

sr.reveal(`.main-visual .title-1`);
sr.reveal(`.main-visual .title-2`, { delay: 1500, distance: "100px" });
sr.reveal(`.main-visual .main-img`, { origin: "left", delay: 2200 });
sr.reveal(`.main-visual .article`, { origin: "right", delay: 2900 });
sr.reveal(
  `.food-intro .item1 .food-image,
  .food-intro .item2 .food-image,
  .food-intro .item3 .food-image,
  .food-intro .item4 .food-image`,
  { origin: "left", delay: 800 }
);

sr.reveal(
  `.food-intro .item1 .intro h2,
  .food-intro .item2 .intro h2,
  .food-intro .item3 .intro h2,
  .food-intro .item4 .intro h2`,
  { delay: 1200 }
);

sr.reveal(
  `.food-intro .item1 .intro .word,
  .food-intro .item3 .intro .word`,

  { origin: "right", delay: 2000 }
);

sr.reveal(
  `.food-intro .item2 .intro .word,
.food-intro .item4 .intro .word`,

  { origin: "left", delay: 2000 }
);

sr.reveal(`.cafe .coffee-img img`, { interval: 500, delay: 1200 });
sr.reveal(`.cafe .content .article, .menu .article`, { delay: 600 });
sr.reveal(`.main-visual .article`, { origin: "right", delay: 2900 });
// sr.reveal(`.main-visual .title-1,.main-visual .title-2`);
