function openNav() {
    if (document.getElementById("myNav").style.height == "100%") {
        document.getElementById("myNav").style.height = "0%";
    } else {
        document.getElementById("myNav").style.height = "100%";
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".revealy");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.background = "rgba(14,14,14,0.8)";
  } else {
    document.getElementById("navbar").style.background = "rgba(14,14,14,0)";
  }
}

function scrollaboutme() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('aboutme').scrollIntoView();
}

function scrollprojects() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('myprojects').scrollIntoView();
}

function scrollachievements() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('myachievements').scrollIntoView();
}

function scrollcontact() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('mycontactinfo').scrollIntoView();
}

function scrolltop() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById('top').scrollIntoView();
}

var button = document.getElementById('slide');
button.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container, 'right', 15, 200, 5);
};

var back = document.getElementById('slideBack');
back.onclick = function () {
    var container = document.getElementById('container');
    sideScroll(container, 'left', 15, 200, 5);
};

function sideScroll(element, direction, speed, distance, step) {
    scrollAmount = 0;
    var slideTimer = setInterval(function () {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}