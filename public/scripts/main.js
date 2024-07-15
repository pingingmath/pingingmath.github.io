const hamburger = document.querySelector(".hamburger img");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  console.log(document.documentElement.style.overflow);
  if (document.documentElement.style.overflow == "hidden") {
    document.documentElement.style.overflow = "";
  } else {
    document.documentElement.style.overflow = "hidden";
  }
});
