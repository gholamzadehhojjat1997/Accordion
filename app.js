let accorionButton = document.getElementsByClassName("accorionButton");
let panel = document.getElementsByClassName("panel");
for (let i = 0; i < accorionButton.length; i++) {
  accorionButton[i].addEventListener("click", function () {
    accorionButton[i].classList.toggle("active");

    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
    } else {
      if (panel[i].scrollHeight > 200) {
        panel[i].style.maxHeight = "200px";
        panel[i].style.overflow = "scroll";
      } else {
        panel[i].style.maxHeight = panel[i].scrollHeight + "px";
      }
    }
  });
}
