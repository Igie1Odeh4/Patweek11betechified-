// Mobile Navbar Toggle
const navLinks = document.querySelector(".nav-links");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navItems = document.querySelectorAll(".nav-links a");

// OPEN MENU
openBtn.addEventListener("click", () => {
  navLinks.classList.add("active");

  openBtn.style.display = "none";
  closeBtn.style.display = "block";

  document.body.style.overflow = "hidden"; // prevent background scroll
});

// CLOSE MENU
closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");

  openBtn.style.display = "block";
  closeBtn.style.display = "none";

  document.body.style.overflow = "auto";
});

// AUTO-CLOSE WHEN CLICKING A LINK
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    openBtn.style.display = "block";
    closeBtn.style.display = "none";

    document.body.style.overflow = "auto";
  });
});

const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach((item) => {
  const head = item.querySelector(".head");
  const content = item.querySelector(".items");
  const icon = item.querySelector(".head i.fa-arrow-down");

  head.addEventListener("click", () => {

    const isOpen = content.style.maxHeight;

    // close all
    document.querySelectorAll(".items").forEach(el => {
      el.style.maxHeight = null;
    });

    document.querySelectorAll(".fa-arrow-down").forEach(el => {
      el.style.transform = "rotate(0deg)";
    });

    // toggle current
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    } else {
      content.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    }

  });
});

// SELECT ELEMENTS
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");

// CLICK EVENT
readMoreBtn.addEventListener("click", function (e) {

  e.preventDefault();

  // TOGGLE CONTENT
  if (readMoreContent.style.display === "block") {

    readMoreContent.style.display = "none";
    readMoreBtn.textContent = "Show More";

  } else {

    readMoreContent.style.display = "block";
    readMoreBtn.textContent = "Show Less";

  }

});
