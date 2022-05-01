//------------------------------------------------------------------------------------------------------------------------------------------
//* ____________________________________________________________ Import ____________________________________________________________________
//------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------
//* ____________________________________________________________ Top Button ____________________________________________________________________
//------------------------------------------------------------------------------------------------------------------------------------------
let top_btn = document.querySelector(".ak_back_to_top_1");
// ___________________________________________
window.addEventListener("scroll", function () {
  if (window.scrollY >= 250) {
    top_btn.style.display = "block";
  } else {
    top_btn.style.display = "none";
  }
});
//------------------------------------------------------------------------------------------------------------------------------------------
//* ____________________________________________________________ Navbar ____________________________________________________________________
//------------------------------------------------------------------------------------------------------------------------------------------
let navbar = document.querySelector(".navbar");
// ___________________________________________
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100 && window.matchMedia("(min-width: 992px)").matches) {
    navbar.style.cssText = "background-color : #1C819E; box-shadow: 0rem 0.001rem 0.7rem  rgb(27, 27, 27)";
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    navbar.style.cssText = "background-color : #1C819E; box-shadow: 0rem 0.001rem 0.7rem  rgb(27, 27, 27)";
  } else {
    navbar.style.cssText = "background-color:transparent";
  }
});
//------------------------------------------------------------------------------------------------------------------------------------------
//* ____________________________________________________________ About Section ____________________________________________________________________
//------------------------------------------------------------------------------------------------------------------------------------------
let about_left = document.querySelector(".pg2_about_content_left");
let about_right = document.querySelector(".pg2_about_content_right");
// ___________________________________________
window.addEventListener("scroll", function () {
  let nav_about = document.querySelector("#nav_about");
  if (window.scrollY >= 280) {
    about_left.classList.add("animate__animated", "animate__backInDown");
    about_right.classList.add("animate__animated", "animate__backInUp");
  } else {
    about_left.classList.remove("animate__animated", "animate__backInDown");
    about_right.classList.remove("animate__animated", "animate__backInUp");
  }
});
//------------------------------------------------------------------------------------------------------------------------------------------
//* ____________________________________________________________ Active Class ____________________________________________________________________
//------------------------------------------------------------------------------------------------------------------------------------------

const sections = document.querySelectorAll(".section");
// ___________________________________________
window.addEventListener("scroll", function () {
  for (const section of sections) {
    // check wich section is in the viewPort
    bounding = section.getBoundingClientRect();
    if (bounding.top <= 300 && bounding.bottom >= 150) {
      // add active class to the active section
      section.classList.add("your-active-class");
      // add active class to the active Li
      document.querySelector(`.nav_li a[href='#${section.getAttribute("id")}']`).classList.add("ak_nav_active", "active");
    } else {
      // remove active class from un-active sections
      section.classList.remove("your-active-class");
      // remove active class from un-active LIs
      document.querySelector(`.nav_li a[href='#${section.getAttribute("id")}']`).classList.remove("ak_nav_active", "active");
    }
  }
});
