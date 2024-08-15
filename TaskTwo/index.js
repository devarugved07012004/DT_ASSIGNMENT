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
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl =
  "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";

let hold;

async function jsonData() {
  const response = await fetch(proxyUrl + apiUrl);
  const data = await response.json();
  hold = data;

  for (let i = 0; i < 5; i++) {
    const head = document.querySelectorAll(".bHeadtitle")[i];
    const description = document.querySelectorAll(".blockDescription")[i];
    const iframeContainer = document.querySelector(".block.one");
    const iframeElement = iframeContainer.querySelector("iframe");

    if (head && description) {
      head.innerHTML = hold.tasks[0].assets[i].asset_title;
      description.innerHTML =
        "<b> Description: </b>" + hold.tasks[0].assets[i].asset_description;
      iframeElement.src = hold.tasks[0].assets[0].asset_content;
    }
  }
}

jsonData();

const iframeSrc =
  "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878";
const fourholderElement = document.querySelector(".fourHolder");
fourholderElement.innerHTML = "";
const iframeElement = document.createElement("iframe");

iframeElement.src = iframeSrc;
iframeElement.style.width = "100%";
iframeElement.style.height = "28rem";

fourholderElement.appendChild(iframeElement);

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
