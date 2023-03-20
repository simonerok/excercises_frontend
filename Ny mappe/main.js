import { animate, scroll, stagger, timeline, inView } from "https://cdn.skypack.dev/motion";

// PAGE PROGRESS AT TOP
scroll(animate(".progress", { scaleX: [0, 1] }));

// FADE PAGE IN ANIMATION
animate("body", { opacity: [0, 1] }, { duration: 5 });
// HUGE LETTER ANIMATION
const hugeLetterAni = timeline(
  [
    [".huge_letter", { rotate: 90 }, { duration: 1, easing: "linear" }],
    [".huge_letter", { x: 200 }, { duration: 3, delay: 1 }],
    [".huge_letter", { rotate: -90 }, { duration: 2, easing: "linear" }],
    [".huge_letter", { x: 0 }, { duration: 3, delay: 1 }],
    [".huge_letter", { rotate: 0 }, { duration: 1, easing: "linear" }],
  ],
  { repeat: Infinity }
);

// STAGGER
const staggerAni = animate(
  ".stagger_box",
  { transform: "translateX(calc(100vw - 21rem))" },
  { delay: stagger(1, { start: 0.5 }), easing: "ease-in-out", duration: 5, repeat: Infinity, direction: "alternate" }
);
staggerAni.stop();
inView(".stagger_box_container", (info) => {
  // and remove it again
  console.log("stagger_box_container INVIEW");
  staggerAni.play();
  return () => {
    staggerAni.cancel();
    console.log("stagger_box_container OUT OF VIEW");
  };
});
//
// SCROLL LINKED ROTATION
scroll(
  animate(".scroll_linked_rotation_box", {
    rotate: 90,
  }),
  { target: document.querySelector(".scroll_linked_rotation_box") }
);

// IN VIEW ANIMATION

inView(".in_view_animation_box_container", (info) => {
  document.querySelectorAll(".in_view_animation_box").forEach((each) => {
    console.log("each", each);
    animate(each, { x: [Math.floor(Math.random() * 2000), 0], backgroundColor: [null, `var(--color-palette${Math.ceil(Math.random() * 5)})`] }, { duration: 2 });
  });
  return () => {};
});

//
//
// SCROLL horisontal
const items = document.querySelectorAll(".scroll_section li");
scroll(
  animate(".scroll_section ul", {
    transform: `translateX(calc(-${items.length - 1}*(100vw - 20rem) ))`,
  }),
  { target: document.querySelector(".scroll_section") }
);
//

// BONUS:
//add scroll snap to elements on view. You'll have to do a powerscroll to get out of there again!
//Don't forget to comment in /* scroll-snap-type: y mandatory; */ in the CSS to get this to work
// const more_scroll_section = document.querySelectorAll(".more_scroll_section");

// inView(more_scroll_section, (info) => {
//   document.querySelectorAll(".more_scroll_section article").forEach((elm) => {
//     elm.style.scrollSnapAlign = "center";
//   });
//   // and remove it again
//   return () => {
//     document.querySelectorAll(".more_scroll_section article").forEach((elm) => {
//       elm.style.scrollSnapAlign = "none";
//     });
//   };
// });
/////////////////////////////////////////////
/////////////////////////////////////////////

//
// PARALLAX
document.querySelectorAll(".more_scroll_section article").forEach((article) => {
  const header = article.querySelector("h2");
  scroll(animate(header, { y: ["-50vh", "50vh"] }), {
    target: header,
  });
});

//  ELEMENT PARALLAX SCROLLING

scroll(animate(".shadow_element", { boxShadow: "100px 100px 10px 0px rgba(0,0,0,0.75)" }), {
  target: document.querySelector(".more_scroll_section"),
});
