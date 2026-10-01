"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".global-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    }
  });
}

document.querySelectorAll(".news-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".news-item");
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "詳細はこちら" : "閉じる";
    item.classList.toggle("is-expanded", !isExpanded);
  });
});
