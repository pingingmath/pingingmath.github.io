const hamburger = document.querySelector(".hamburger img");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
  // console.log(document.documentElement.style.overflow);
  if (document.documentElement.style.overflow == "hidden") {
    hamburger.src = "";

    hamburger.src =
      "https://img.icons8.com/?size=30&id=8113&format=png&color=a8a8a8";
    document.documentElement.style.overflow = "";
  } else {
    hamburger.src = "";
    hamburger.src =
      "https://img.icons8.com/?size=32&id=71200&format=png&color=a8a8a8";
    document.documentElement.style.overflow = "hidden";
  }
});
