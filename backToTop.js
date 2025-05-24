// Back to Top Button Functionality
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
