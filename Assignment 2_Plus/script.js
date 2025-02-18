document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingText = document.getElementById("rating-text");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      let value = this.getAttribute("data-value");
      ratingText.textContent = `You rated us ${value} stars!`;
      stars.forEach((s) => s.classList.remove("active"));
      for (let i = 0; i < value; i++) {
        stars[i].classList.add("active");
      }
    });
  });
});
