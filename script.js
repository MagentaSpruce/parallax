"use strict";

//scrollmagic allows us to trigger animations when scrolling. to init this we need a controller
const controller = new ScrollMagic.Controller();

//scenes can be added to the controller to handle multiple animations
const timeline = new TimelineMax(); //gsap allows simple animations but timeline allows us to chain multiple animations together so a runs then b then c ect. so timelines can be made

//Ex: timeline.to(".text", 5, { x: 500}) this will move the text at screen bottom then we can add on to that:

//   timeline.to(".text", 5, { x: 500}).to('.content__images, 2, {opacity: 0})  //this makes the text slide over right and then fades out the images after --- so we have linked animations together

// to run these animations simultaneously you can do as followS:
// timeline.to(".text", 2, { x: 500}).to('.content__images, 2, {opacity: 0}, '-=2');

//So we have full control over what we want to do. Can also use from to as well.

//timeline.fromTo(".text", { opacity:0}, {opacity: 1, duation: 3})        the first opacity is the start  point and the second the end point

timeline
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(".content__images", { opacity: 0 }, { opacity: 1, duration: 3 });

//hook up scrolling
const scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller); //hook up animation to scene

//pin the background page and let other content slide over top.
