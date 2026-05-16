const surveys = Array.from(document.querySelectorAll(".survey"));
const start = document.querySelector("#article-start");

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-next]");
  if (!button) return;

  const current = button.closest(".survey");
  const currentIndex = surveys.indexOf(current);
  current.classList.remove("active");

  const next = surveys[currentIndex + 1];
  if (next) {
    next.classList.add("active");
    next.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  start.scrollIntoView({ behavior: "smooth", block: "start" });
});
