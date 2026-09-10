const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".elem").forEach((box) => {
  const image = box.querySelector("img");

  const transformX = gsap.utils.random(-100, 100);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: "top 100%",
      end: "bottom 20%",
      scrub: true,
    },
  });

  tl.set(image, {
    transformOrigin: `${transformX < 0 ? "0%" : "100%"}`,
    scaleX: 0,
  })
    .to(
      image,
      {
        scaleX: 1,
        ease: "none",
      },
      ">",
    )
    .to(
      image,
      {
        xPercent: transformX,
        ease: "none",
      },
      ">",
    );
});
