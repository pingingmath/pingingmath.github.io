const experienceOptions = document.querySelectorAll(".option-bar .option");
const experiences = document.querySelectorAll(".experience");
const uiExp = document.querySelector(".experience.ui");
const websitesExp = document.querySelector(".experience.websites");

let current = uiExp;

experienceOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (!option.classList.contains("apps")) {
      experienceOptions.forEach((option) => option.classList.remove("active"));

      option.classList.add("active");

      if (option.classList.contains("websites")) current = websitesExp;
      else if (option.classList.contains("ui")) current = uiExp;

      experiences.forEach((experience) => {
        if (experience !== current) experience.classList.remove("show");
        else experience.classList.add("show");
      });
    }
    console.log(current);
  });
});
