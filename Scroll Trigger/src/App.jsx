import { useEffect } from "react";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


 gsap.registerPlugin(useGSAP, ScrollTrigger);


const positions = [
  { col: 2, row: 3 },
  { col: 7, row: 1 },
  { col: 4, row: 8 },
  { col: 1, row: 5 },
  { col: 6, row: 10 },
  { col: 3, row: 14 },
  { col: 8, row: 6 },
  { col: 5, row: 18 },
  { col: 2, row: 12 },
  { col: 7, row: 9 },
  { col: 4, row: 16 },
  { col: 6, row: 2 },
  { col: 3, row: 7 },
  { col: 8, row: 13 },
  { col: 5, row: 4 },
  { col: 2, row: 17 },
  { col: 7, row: 15 },
  { col: 4, row: 11 },
];

const App = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
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
        .to(image,{
            scaleX: 1,
            ease: "none",
          },">")

        .to(image,{
            xPercent: transformX,
            ease: "none",
          },">");
    });
  });

  return (
    <div className="w-full bg-zinc-900">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 min-h-screen w-full overflow-hidden">
        {positions.map((pos, i) => (
          <div
            key={i}
            className="elem col-span-1 row-span-1"
            style={{ gridColumn: pos.col, gridRow: pos.row }}
          >
            <img
              src={`https://picsum.photos/300/400?random=${i + 1}`}
              className="object-cover h-30 w-30"
            />
          </div>
        ))}
      </div>
      <div className="fixed left-0 top-0 w-full h-full flex justify-center items-center z-50">
        <h1  style={{ WebkitTextStroke: "1.5px white" }} className="text-8xl text-transparent font-bold">Hello Bacchooo!!!</h1>
      </div>
    </div>
  );
};

export default App;
