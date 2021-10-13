gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "nav",
      start: "top 50%",
      end: "end 90%",
      //   markers: true,
    },
  })
  .to(".logo", {
    duration: 2,
    ease: "elastic",
    scale: 10,
    y: 80,
  })
  .to(".logo", {
    scale: 1,
    y: 2,
    x: -600,
  });

//Animartion alle fader ind
gsap.from("#splash img", {
  y: 100,
  delay: 1,
  stagger: 0.5,
  opacity: 0,
  duration: 2,
  markers: true,
});

window.addEventListener("load", videoScroll);
window.addEventListener("scroll", videoScroll);

function videoScroll() {
  if (document.querySelectorAll("video[autoplay]").length > 0) {
    var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll("video[autoplay]");

    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
        videoHeight = thisVideoEl.clientHeight,
        videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if (
        videoClientRect <= windowHeight - videoHeight * 0.5 &&
        videoClientRect >= 0 - videoHeight * 0.5
      ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
