const jboard = document.querySelector(".JBoard");
const rwindow = document.querySelector(".jboradhead");
const rcontent = document.querySelector(".content");
const rnumber = document.querySelector(".collapseJboard");
const jboardhead = document.querySelector(".innerHeader");
const closenoticeBoard = document.querySelector(".close");
const noticeBoard = document.querySelector(".noticeBoard");
const innerNoticeBoard = document.querySelector(".innerNoticeBoard");
const arrowHeadOne = document.querySelector(".arrowHeadOne");
const headOne = document.querySelector(".HeadOne");

rwindow.addEventListener("click", function () {
  jboard.style.width = jboard.style.width === "10%" ? "25%" : "10%";
  rcontent.classList.toggle("display");
  rnumber.classList.toggle("display");
  jboardhead.classList.toggle("display");
  rwindow.classList.toggle("rotate");
});

closenoticeBoard.addEventListener("click", function () {
  closenoticeBoard.style.color =
    closenoticeBoard.style.color === "black" ? "white" : "black";
  noticeBoard.style.width = noticeBoard.style.width === "3%" ? "6%" : "3%";
  innerNoticeBoard.style.width =
    innerNoticeBoard.style.width === "100%" ? "50%" : "100%";
});

arrowHeadOne.addEventListener("click", function () {
  headOne.classList.toggle("display");
  arrowHeadOne.classList.toggle("rotate");
});

document.querySelector(".infoOne").addEventListener("click", function () {
  document.querySelector(".blOne").classList.toggle("display");
});

document.querySelector(".infoTwo").addEventListener("click", function () {
  headOne.classList.toggle("display");
});
document.querySelector(".infoThree").addEventListener("click", function () {
  document.querySelector(".blThree").classList.toggle("display");
});
document.querySelector(".infoFour").addEventListener("click", function () {
  document.querySelector(".blFour").classList.toggle("display");
});
