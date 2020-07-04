window.addEventListener("resize", resizeFunction);
var mq = window.matchMedia("(max-width:1200px)");
landtext = document.getElementsByClassName("landing-title");
landsub = document.getElementsByClassName("landing-subtitle");
x = document.getElementsByClassName("navbar")[0];
b1 = document.getElementsByClassName("brand-logo1")[0];
b2 = document.getElementsByClassName("brand-logo2")[0];
var i;

function resizeFunction() {
  if (!mq.matches) {
    window.onscroll = function () {
      scrollFunction();
    };
    for (i = 0; i < landtext.length; i++) {
      landtext[i].classList.remove("display-4");
      landtext[i].classList.add("display-3");
      landsub[i].style.fontSize = "1.5rem";
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        x.classList.remove("navbar-dark");
        x.classList.add("navbar-light");
        x.classList.add("floatingNav");
        x.style.backgroundColor = "white";
        document.getElementById("menu-icon").style.color = "black";
        b2.classList.add("d-inline-block");
        b1.classList.add("d-none");
        b1.classList.remove("d-inline-block");
        b2.classList.remove("d-none");
      } else {
        x.classList.remove("navbar-light");
        x.classList.add("navbar-dark");
        x.classList.remove("floatingNav");
        x.style.backgroundColor = "transparent";
        document.getElementById("menu-icon").style.color = "white";
        b1.classList.add("d-inline-block");
        b2.classList.add("d-none");
        b2.classList.remove("d-inline-block");
        b1.classList.remove("d-none");
      }
    }

    scrollFunction();
  } else {
    for (i = 0; i < landtext.length; i++) {
      landtext[i].classList.add("display-4");
      landtext[i].classList.remove("display-3");
      landsub[i].style.fontSize = "1rem";
    }

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        x.classList.remove("navbar-dark");
        x.classList.add("navbar-light");
        x.classList.add("floatingNav");
        x.style.backgroundColor = "white";
        document.getElementById("menu-icon").style.color = "black";
        b2.classList.add("d-inline-block");
        b1.classList.add("d-none");
        b1.classList.remove("d-inline-block");
        b2.classList.remove("d-none");
      } else {
        x.classList.remove("navbar-light");
        x.classList.add("navbar-dark");
        x.classList.remove("floatingNav");
        x.style.backgroundColor = "#00171f";
        document.getElementById("menu-icon").style.color = "white";
        b1.classList.add("d-inline-block");
        b2.classList.add("d-none");
        b2.classList.remove("d-inline-block");
        b1.classList.remove("d-none");
      }
    }

    scrollFunction();
  }
}

resizeFunction();

function closeMenu() {
  document.getElementById("navbar").style.width = "0%";
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "";
}
function openMenu() {
  document.getElementById("navbar").style.width = "20vw";
}

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("is-open");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}

$(".count").counterUp({
  delay: 50,
  time: 2000,
});
