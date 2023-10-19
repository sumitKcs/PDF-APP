const aside = document.querySelector("aside");
const sidebar_close_button = document.getElementById("sidebar_close_button");
const menu_icon = document.getElementById("menu_icon");
const dropdown = document.getElementById("dropdown");
const dropdown_card1 = document.getElementById("dropdown_card1");
const dropdown_card2 = document.getElementById("dropdown_card2");

menu_icon.addEventListener("click", () => {
  aside.style.display = "flex";

  document.body.classList.add("no-scroll");
});

sidebar_close_button.addEventListener("click", () => {
  aside.style.display = "none";
  menu_icon.style.display = "flex";
  document.body.classList.remove("no-scroll");
});

dropdown_card1.addEventListener("mouseleave", () => {
  dropdown_card1.style.display = "none";
});

dropdown_card2.addEventListener("mouseleave", () => {
  dropdown_card2.style.display = "none";
});

window.addEventListener("mouseover", (e) => {
  if (e.target.id === "dropdown1") {
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    dropdown1.innerHTML = `CONVERT PDF <span><i
    class="fa-solid fa-caret-down icon_lg fa-flip"></i></span></i>`;
    dropdown2.innerHTML = `ALL PDF TOOLS <span><i
    class="fa-solid fa-caret-down icon_lg"></i></span></i>`;
    if ((dropdown_card2.style.display = "flex")) {
      dropdown_card2.style.display = "none";
      dropdown_card1.style.display = "flex";
    }
  }
  if (e.target.id === "dropdown2") {
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    dropdown1.innerHTML = `CONVERT PDF <span><i
    class="fa-solid fa-caret-down icon_lg "></i></span></i>`;
    dropdown2.innerHTML = `ALL PDF TOOLS <span><i
    class="fa-solid fa-caret-down icon_lg fa-flip"></i></span></i>`;
    if ((dropdown_card1.style.display = "flex")) {
      dropdown_card1.style.display = "none";
      dropdown_card2.style.display = "flex";
    }
  }
  if (e.target.className === "menu_item") {
    dropdown_card1.style.display = "none";
    dropdown_card2.style.display = "none";
  }
  // if (e.target.className !== "dropdown") {
  //   dropdown_card1.style.display = "none";
  //   dropdown_card2.style.display = "none";
  //   dropdown1.innerHTML = `CONVERT PDF <span><i
  //   class="fa-solid fa-caret-down icon_lg "></i></span></i>`;
  //   dropdown2.innerHTML = `ALL PDF TOOLS <span><i
  //   class="fa-solid fa-caret-down icon_lg"></i></span></i>`;
  // }
});

// window.addEventListener("click", (e) => {
//   if ((e.target.className = "menu_expand")) {
//     let target = document.getElementById(e.target.id);
//     // target.nextElementSibling.style.display = "flex";

//     if (target.nextElementSibling.style.display === "flex") {
//       while (target.nextElementSibling) {
//         target.nextElementSibling.style.display = "none";
//         target = target.nextElementSibling;
//       }
//     } else {
//       while (target.nextElementSibling) {
//         target.nextElementSibling.style.display = "flex";
//         target = target.nextElementSibling;
//       }
//     }
//   }
// });

function handleExpandableMenu(e) {
  console.log(e);
  let target = document.getElementById(e.target.id);
  if (target.nextElementSibling.style.display === "flex") {
    while (target.nextElementSibling) {
      target.nextElementSibling.style.display = "none";
      target = target.nextElementSibling;
    }
  } else {
    while (target.nextElementSibling) {
      target.nextElementSibling.style.display = "flex";
      target = target.nextElementSibling;
    }
  }
}

const goto_top = document.getElementById("goto_top");

const windowHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > windowHeight / 2) {
    goto_top.style.display = "block";
  }
  if (scrollY < windowHeight / 4) {
    goto_top.style.display = "none";
  }
});

const service_card = document.querySelectorAll(".service_card");
service_card.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    card.firstElementChild.classList.add("rotate");
    console.log(card.firstElementChild.firstElementChild);
  });

  card.addEventListener("mouseleave", (e) => {
    card.firstElementChild.classList.remove("rotate");
  });
});
