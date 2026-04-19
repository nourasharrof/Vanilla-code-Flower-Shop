document.getElementById("bx-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
document.forms[0].onsubmit = function (event) {
  let yourName = document.getElementsByClassName("text-Email")[0].value;
  let yourEmail = document.getElementsByClassName("text-Email")[1].value;
  if (yourName === "") {
    event.preventDefault();
    alert("pleas enter your name");
  }
  if (yourEmail === "") {
    event.preventDefault();
    alert("pleas enter your Email");
  }
};
