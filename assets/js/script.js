"use strict";
// navbar variables
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");
// add eventlistener
navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
