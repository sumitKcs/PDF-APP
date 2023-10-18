const aside = document.querySelector("aside");
const sidebar_close_button = document.getElementById("sidebar_close_button");
const menu_icon = document.getElementById("menu_icon");
const dropdown = document.getElementById("dropdown");
const dropdown_card1 = document.getElementById("dropdown_card1");
const dropdown_card2 = document.getElementById("dropdown_card2");

// console.log(dropdown);
menu_icon.addEventListener("click", () => {
  aside.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  aside.style.display = "none";
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
  if (e.target.className !== "dropdown") {
    dropdown_card1.style.display = "none";
    dropdown_card2.style.display = "none";
  }
});
