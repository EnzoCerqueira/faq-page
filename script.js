const buttonFaqItems = document.querySelectorAll(".faq-item button");
const answerFaqItems = document.querySelectorAll(".faq-item p");
const iconPlusItems = document.querySelectorAll(".icon-plus");
const iconMinusItems = document.querySelectorAll(".icon-minus");

buttonFaqItems.forEach((button, index) => {
  button.addEventListener("click", () => {
    const answer = answerFaqItems[index];
    answer.classList.toggle("hidden");
    iconPlusItems[index].classList.toggle("hidden");
    iconMinusItems[index].classList.toggle("hidden");
  });
});
