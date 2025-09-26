import "./components/layout/App-router.js";
import "./components/pages/Home-page.js";
import "./components/pages/Projects-page.js";
import "./components/pages/About-page.js";
import "./components/layout/Menu.js";

window.app = {
  showSection: function (seccionId) {
    document.querySelectorAll(".component").forEach((sec) => {
      sec.classList.remove("active");
    });

    document.getElementById(seccionId).classList.add("active");
  },
};
