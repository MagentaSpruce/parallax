# parallax
Part of my 1 clone per day project
This project is centered around creating a parralax effect using javascript plugins.

//Gains:
Knowledge of TweenMax which is an animation library.
Knowledge of ScrollMagic which allows the triggering of specific animations on scroll.
Knowledge of animation.gsap which combines the animations and scroll events. 
Practice with setting up chained timeline animation events.

//Improvements:

This page was laid out in a semi-responsive way. The design could be improved for better responsiveness.
Media queries.
Styling improvements

Interesting Project Code Below******

Start by creating a controller.
```JavaScript
const controller = new ScrollMagic.Controller();
```

This controller can have scenes/animations added to it. To be able to run these multiple animations together we need another method, TimelineMax() which lets animations be chained together. 
```JavaScript
const timeline = new TimelineMax();
```

On that timeline we added the animation events that we wanted to use which selected elements based on class.
```JavaScript
timeline
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .to(".bg1", 3, { y: -50 }, "-=3")
  
  
```

To hook up the animations to scrolling a scene is created using ScrollMagic. TriggerElement dictates when the animation will be triggered.
```JavaScript
const scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
```

Now the animations are connected to the scene using .setTween(timeine)
and then we add everything to the controller.
```JavaScript
const scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller); 
```

Lastly to fix the page-sliding movements .setPin('section') is used. Adjusting the position to absolute of the content is done and another timeline movement is created to move the background image.
```JavaScript
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
```

```JavaScript
const scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
```

This sets the effect. A few more changes were made to the timeline to fix the image scrolling behavior and margins. That code is below:
```JavaScript
timeline
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", 3, { y: -50 }, { y: 0, duration: 3 }, "-=3")
  .to(".content", 3, { top: "0%" }, "-=3")
  .fromTo(".content__images", { opacity: 0 }, { opacity: 1, duration: 3 });
```

***End Walkthrough
