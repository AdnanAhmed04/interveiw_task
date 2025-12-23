import React from 'react'
import { useEffect, useMemo, useState } from "react";
import person1 from "../images/slider_1.png";
import person2 from "../images/slider_2.png";
import person3 from "../images/slider_3.png";

export default function TestimonialSlider() {
  const slides = useMemo(
    () => [
      {
        quote:
          "Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.",
        name: "Jason Staczek",
        image: person1,
        bg: "#765070",
      },
      {
        quote:
          "Freelancers use Setapp to stay organized and keep their workflow moving smoothly.",
        name: "Alicia Stone",
        image: person2,
        bg: "#765070",
      },
      {
        quote:
          "Teams use Setapp to speed up daily tasks and focus on the work that matters.",
        name: "Sam Rivera",
        image: person3,
        bg: "#765070",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1); 

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  };
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);

}, []);

  const slide = slides[index];

  return (
    <div className="w-full bg-[#26262B] h-[500px]   p-6 md:p-10">
      <div
        className="relative mx-auto max-w-7xl mt-20 p-20 overflow-hidden rounded-2xl"
        style={{ backgroundColor: slide.bg }}
      >

        <button
          onClick={prev}
          className="absolute top-6 right-16 z-20 grid h-10 w-10 place-items-center rounded-full cursor-pointer text-white text-2xl hover:bg-white/25"
          aria-label="Previous"
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_362)">
            <path d="M12 22L2 12L12 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_362">
            <rect width="14" height="24" fill="white" transform="matrix(-1 0 0 1 14 0)"/>
            </clipPath>
            </defs>
          </svg>

        </button>
        <button
          onClick={next}
          className="absolute top-6 right-6 z-20 grid h-10 w-10 place-items-center rounded-full cursor-pointer text-white text-2xl hover:bg-white/25"
          aria-label="Next"
        >
          <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_359)">
            <path d="M2 2L12 12L2 22" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1_359">
            <rect width="14" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)"/>
            </clipPath>
            </defs>
          </svg>

        </button>

        <div className="relative h-[420px] md:h-[520px]">
          {slides.map((s, i) => {
            const active = i === index;

            const pos =
              i === index
                ? "translate-x-0 opacity-100"
                : dir === 1
                ? i === (index - 1 + slides.length) % slides.length
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
                : i === (index + 1) % slides.length
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0";

            return (
              <div
                key={i}
                className={[
                  "absolute inset-0 transition-all duration-500 ease-out",
                  active ? "z-10" : "z-0",
                  pos,
                ].join(" ")}
                style={{ backgroundColor: s.bg }}
              >
                <div className="h-full grid grid-cols-1 md:grid-cols-2">

                  <div className="flex flex-col justify-center px-8 md:px-16">
                    <p className="text-white text-2xl md:text-3xl leading-snug max-w-lg">
                      {s.quote}
                    </p>
                    <p className="text-white/70 mt-8">{s.name}</p>

                    <button
                      className="mt-12 grid h-16 w-16 place-items-center rounded-full bg-white"
                      aria-label="Play"
                      onClick={() => alert(`Play video for: ${s.name}`)}
                    >
                      <span className="text-gray-800 text-xl ml-1">▶</span>
                    </button>
                  </div>
                  <div className="relative flex items-end justify-center">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="h-[100%] object-contain"
                      />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={[
                "h-2.5 rounded-full transition-all",
                i === index ? "w-8 bg-white" : "w-2.5 bg-white/40",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
