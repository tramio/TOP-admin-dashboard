const openNavBtn = document.getElementById("hamburger");
const closeNavBtn = document.getElementById("nav-closing-btn");
const nav = document.querySelector("nav");
// const screenIsLessWideThan800px = () => {
//   window.matchMedia("(max-width: 800px)").matches;
// };

const displayNav = () => {
  if (navIsHidden()) { nav.classList.toggle("MQ-hidden") };
}
const hideNav = () => {
  if (!navIsHidden()) { nav.classList.toggle("MQ-hidden") };
}
const navIsHidden = () => {
  return nav.classList.contains("MQ-hidden");
}
const activateBtns = () => {
  openNavBtn.addEventListener("click", displayNav);
  closeNavBtn.addEventListener("click", hideNav);
}

activateBtns();

