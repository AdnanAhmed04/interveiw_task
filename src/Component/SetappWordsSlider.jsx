import React from 'react'
import { useMemo, useState } from "react";

export default function SetappWordsSlider() {
  const cards = useMemo(
    () => [
      {
        text:
          "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
        name: "Arash Pourhabibi",
        handle: "@ArashPourhabibi",
        brand: "twitter",
        color: "#6B6E93",
      },
      {
        text:
          "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
        name: "Mauricio Sanchez",
        handle: "@m741s",
        brand: "instagram",
        color: "#D7B08E",
      },
      {
        text:
          "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
        name: "Meredith Sweet",
        handle: "@meredith.sweet.silberstein",
        brand: "facebook",
        color: "#6B4A63",
      },
      {
        text: "Setapp is a game changer. I stopped hunting for apps and started shipping work.",
        name: "Jamie Lee",
        handle: "@jamielee",
        brand: "twitter",
        color: "#5C6B8A",
      },
      {
        text: "One subscription, so many tools. It’s honestly become part of my daily workflow.",
        name: "Chris Patel",
        handle: "@chrispatel",
        brand: "instagram",
        color: "#C9A7A7",
      },
      ,
      {
        text: "One subscription, so many tools. It’s honestly become part of my daily workflow.",
        name: "Adnan Ahmed",
        handle: "@chrispatel",
        brand: "instagram",
        color: "#e37474",
      },
      {
        text: "One subscription, so many tools. It’s honestly become part of my daily workflow.",
        name: "Chris Patel",
        handle: "@chrispatel",
        brand: "instagram",
        color: "#C9A7A7",
      },
      ,
      {
        text: "One subscription, so many tools. It’s honestly become part of my daily workflow.",
        name: "Adnan Ahmed",
        handle: "@chrispatel",
        brand: "instagram",
        color: "#e37474",
      },
    ],
    []
  );

  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(cards.length / perPage);

  const start = page * perPage;
  const visible = cards.slice(start, start + perPage);

  const prev = () => setPage((p) => (p - 1 + pages) % pages);
  const next = () => setPage((p) => (p + 1) % pages);

  return (
    <section className="bg-white  px-6 py-12 mt-96">

      <div className="mx-auto max-w-6xl flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <h2 className="text-4xl w-[40%] font-bold text-gray-900">Setapp in your words.</h2>

        <div className="flex items-center justify-between jus gap-8 w-[45%] ">
          <p className="max-w-[250px] text-gray-700 text-xl">
            What you say about how Setapp powers you up.
          </p>
          <div className="flex items-center gap-3">
            <CircleIcon label="f" bg="#3B5998" />
            <CircleIcon label="t" bg="#1DA1F2" />
            <CircleIcon label="◎" bg="#E1306C" />
            <CircleIcon label="▶" bg="#FF0000" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-6 flex justify-end gap-3">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="h-10 w-10 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
          aria-label="Next"
        >
          ›
        </button>
      </div>
      <div className="mx-auto max-w-6xl mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {visible.map((c, idx) => (
          <div key={idx} className="rounded-2xl bg-[#F4F4F4] p-4">
            <div
              className="rounded-xl p-7 text-white min-h-[260px] flex items-start"
              style={{ backgroundColor: c.color }}
            >
              <p className="text-2xl leading-snug">{c.text}</p>
            </div>

            <div className="flex items-center justify-between px-1 pt-4">
              <div>
                <p className="font-semibold text-gray-900">{c.name}</p>
                <p className="text-gray-500 text-sm">{c.handle}</p>
              </div>
              <BrandIcon brand={c.brand} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === page ? "w-8 bg-gray-900" : "w-2.5 bg-gray-300"
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function CircleIcon({ label, bg }) {
  return (
    <div
      className="h-11 w-11 rounded-full grid place-items-center text-white font-semibold"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

function BrandIcon({ brand }) {
  const map = {
    twitter: { label: "t", color: "#1DA1F2" },
    instagram: { label: "◎", color: "#E1306C" },
    facebook: { label: "f", color: "#3B5998" },
    youtube: { label: "▶", color: "#FF0000" },
  };
  const v = map[brand] || { label: "•", color: "#111827" };

  return (
    <div
      className="h-9 w-9 rounded-full grid place-items-center text-white font-semibold"
      style={{ backgroundColor: v.color }}
      aria-hidden="true"
    >
      {v.label}
    </div>
  );
}
