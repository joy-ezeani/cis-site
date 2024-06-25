function triggerBtnClick(){
  document.getElementsByClassName('reload-btn').click()
}

// Pre-loader js
window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
};

// -----------menu click js----------

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".menu-burger").toggleClass("active");
    $(".menu").toggleClass("active");
  });
});

// ****header scroll function****

$(() => {
  //On Scroll Functionality
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    windowTop > 50
      ? $("header").addClass("og-hf")
      : $("header").removeClass("og-hf");
  });
});

// -----------Owl js----------

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    navRewind: false,
    responsive: {
      0: {
        items: 1,
      },

      440: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

// -----------counting js----------

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

// tab in contact page
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


// footer stacked card
let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));

stack.addEventListener("click", swap);

function swap(e) {
  let card = document.querySelector(".card:last-child");
  if (e.target !== card) return;
  card.style.animation = "swap 700ms forwards";

  setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
  }, 700);
}

