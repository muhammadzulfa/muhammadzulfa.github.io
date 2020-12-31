$(window).on("scroll", function () {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $(".navbar").css("background", "#014EAA");
   } else {
      $(".navbar").css("background", "transparent");
   }
});

$('.fireworks').fireworks({
   sound: true,
   opacity: 0.8,
   width: '100%',
   height: '100%'
});

// Set date
var countdownDate = new Date(
   "January 1, 2021 00:00:00"
).getTime(); /* hrs: min: sec */

// Update the count down every 1 second
var x = setInterval(function () {
   // Get todays date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countdownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element
   document.querySelector("#d").innerText = addZero(days);
   document.querySelector("#h").innerText = addZero(hours);
   document.querySelector("#m").innerText = addZero(minutes);
   document.querySelector("#s").innerText = addZero(seconds);

   // If the count down is finished, write some text
   if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-box").innerHTML =
         "<span class='cdi'>Happy New Year!!</span>";
      document.querySelector(".title").innerText = "";
   }
}, 1000);

function addZero(i) {
   if (i < 10) {
      i = "0" + i;
   }
   return i;
}

function isMobile() {
   if (window.innerWidth < 775) {
      return true;
   } else {
      return false;
   }
}

/********************
    Animation Frame
  ********************/

window.requestAnimFrame = (function () {
   return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
         window.setTimeout(callback, 1000 / 60);
      }
   );
})();

particlesJS("particles-js", {
   "particles": {
      "number": {
         "value": 180,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#ffffff"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 6,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": true,
            "mode": "grab"
         },
         "onclick": {
            "enable": true,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 140,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
   stats.begin();
   stats.end();
   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
   }
   requestAnimationFrame(update);
};
requestAnimationFrame(update);

$("#go-fb").click(function () {
   window.location.href = "https://www.facebook.com/muhammadzulfacom";
})

$("#go-tl").click(function () {
   window.location.href = "https://t.me/mhmmdzlfa";
})

$("#go-ig").click(function () {
   window.location.href = "https://www.instagram.com/mhmmd.zlfa";
})

$("#go-github").click(function () {
   window.location.href = "https://www.github.com/muhammadzulfa";
})

$(window).on("scroll", function () {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      $(".navbar").css("background", "#014EAA");
   } else {
      $(".navbar").css("background", "transparent");
   }
});

$("#go-fb").click(function () {
   window.location.href = "https://www.facebook.com/muhammadzulfacom";
})

$("#go-tl").click(function () {
   window.location.href = "https://t.me/mhmmdzlfa";
})

$("#go-ig").click(function () {
   window.location.href = "https://www.instagram.com/mhmmd.zlfa";
})

$("#go-github").click(function () {
   window.location.href = "https://www.github.com/muhammadzulfa";
})