import "./style.css";
import showHome from "./home.js";
import showMenu from "./menu.js";
import showAbout from "./about.js";

const navigate = () => {
  const container = document.getElementById("content");
  const buttons = document.getElementsByTagName("button"); //returns html collections
  //turn into array and loop
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
      container.innerHTML = ""; // empty the container each click
      switch (button.id) {
        case "home":
          showHome(container);
          break;
        case "menu":
          showMenu(container);
          break;
        case "about":
          showAbout(container);
          break;
      }
    });
  });
};

navigate();
