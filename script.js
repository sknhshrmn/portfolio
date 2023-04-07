console.log("start");
// declare DOM variable
let navItemDOM = document.querySelectorAll(".nav-item");
let hamburgerIconDOM = document.querySelector("#hamburger-icon");
let rightHeaderDOM = document.querySelector("#right-header");
let hamburgerDOM = document.querySelector("#hamburger");
let hamburgerSVGDOM = document.querySelector("#hamburger-icon");
let deleteIconDOM = document.querySelector("#delete-icon");
let headerDOM = document.querySelector("#header");
let messageDOM = document.querySelector("#message");
let replyToDOM = document.querySelector("#_replyto");
let nameDOM = document.querySelector("#name");
let sendEmailButtonDOM = document.querySelector("#sendEmailButton");

// Create a media condition that targets viewports at least 800px wide
const desktopMediaQuery = window.matchMedia("(min-width: 800px)");

// Header
// When the screen size change, hide/show the navbar
window.addEventListener("resize", () => {
  hideShowNav;
});

// When click on hamburger icon, expand the nav menu item
hamburgerIconDOM.addEventListener("click", () => {
  rightHeaderDOM.style.display = "flex";
  rightHeaderDOM.style.justifyContent = "start";
  headerDOM.style.height = "auto";
  headerDOM.style.padding = "25px 0";
  deleteIconDOM.style.display = "block";
  deleteIconDOM.style.width = "40px";
  deleteIconDOM.style.position = "absolute";
  hamburgerIconDOM.style.display = "none";
});

// When click on delete icon, collapse the nav menu item
deleteIconDOM.addEventListener("click", () => {
  rightHeaderDOM.style.display = "none";
  headerDOM.style.height = "80px";
  deleteIconDOM.style.display = "none";
  hamburgerIconDOM.style.display = "block";
  hamburgerIconDOM.style.width = "40px";
});

// Contact section
// Check the inputs when user click button "Contact me"
// Send alert, if there are inputs not entered yet
sendEmailButtonDOM.addEventListener("click", () => {
  // safe guard
  if (
    nameDOM.value === "" &&
    replyToDOM.value === "" &&
    messageDOM.value === ""
  ) {
    alert("Can you fill in your name, email and message. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value === "" &&
    replyToDOM.value === "" &&
    messageDOM.value != ""
  ) {
    alert("Can you fill in your name, and email. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value === "" &&
    replyToDOM.value != "" &&
    messageDOM.value === ""
  ) {
    alert("Can you fill in your name, and message. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value != "" &&
    replyToDOM.value === "" &&
    messageDOM.value === ""
  ) {
    alert("Can you fill in your email, and message. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value === "" &&
    replyToDOM.value != "" &&
    messageDOM.value != ""
  ) {
    alert("Can you fill in your name. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value != "" &&
    replyToDOM.value === "" &&
    messageDOM.value != ""
  ) {
    alert("Can you fill in your email. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  } else if (
    nameDOM.value != "" &&
    replyToDOM.value != "" &&
    messageDOM.value === ""
  ) {
    alert("Can you fill in your mesage. Thank you!");
    sendEmailButtonDOM.setAttribute("href", "#!");
  }
});
// Set the new href when message is entered/changed
messageDOM.addEventListener("change", function (e) {
  let href =
    "mailto:sakinahshahriman@gmail.com?subject=Hello, I'm from your website!&body=";

  let message = e.target.value;
  let newHref =
    href + message + "%0A%0A" + nameDOM.value + "%0A" + replyToDOM.value;
  sendEmailButtonDOM.setAttribute("href", newHref);
});

// declare function
// 1. When not in mobile media screen, Set display of right header to flex
function hideShowNav() {
  if (window.innerWidth > 800) {
    console.log("desktop");
    rightHeaderDOM.style.display = "flex";
  } else if (window.innerWidth <= 800) {
    console.log("not desktop");
    rightHeaderDOM.style.display = "none";
  }
}
