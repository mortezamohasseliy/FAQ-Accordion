const accTitle = document.querySelectorAll(".accordion-header");
const content = document.querySelectorAll(".accordion-content");

accTitle.forEach((title) => {
  title.addEventListener("click", () => {
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      title.lastElementChild.src = "./assets/images/icon-plus.svg";
    } else {
      title.classList.add("active");
      title.lastElementChild.src = "./assets/images/icon-minus.svg";
    }
  });
});


