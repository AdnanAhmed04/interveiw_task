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
          <p className="max-w-[250px] text-gray-500 text-xl">
            What you say about how Setapp powers you up.
          </p>
          <div className="flex items-center gap-3">
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9" clip-path="url(#clip0_1_373)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM21.6185 18.504V21.0535H19.4991L19.5028 24.9065L22.0431 24.8769V33.3748H25.8591V24.8769H28.8258L29.2505 21.0554H25.8591V18.9305C25.8591 18.3249 25.9994 18.0812 26.7083 18.0812H29.2505L29.2062 14.4369C29.2062 14.4369 28.1686 14.2505 26.5477 14.2505C22.992 14.2505 21.6185 16.392 21.6185 18.504Z" fill="#3A5792"/>
</g>
<defs>
<clipPath id="clip0_1_373">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM28.6025 15.7495C26.2523 15.7495 24.3489 17.7138 24.3489 20.1342C24.3489 20.4775 24.3858 20.8117 24.4597 21.1329C20.9243 20.9502 17.7914 19.2055 15.6942 16.5526C15.3149 17.2253 15.1164 17.9847 15.1182 18.7569C15.1182 20.2763 15.8677 21.6185 17.0105 22.4049C16.3328 22.3829 15.6709 22.1946 15.0831 21.8566V21.912C15.0831 24.0351 16.5489 25.8074 18.4948 26.2117C17.8694 26.3862 17.2117 26.4115 16.5748 26.2855C17.1138 28.0265 18.6849 29.2948 20.5458 29.3317C19.6724 30.0418 18.6647 30.5685 17.583 30.8803C16.5013 31.1921 15.3679 31.2826 14.2505 31.1465C16.182 32.4306 18.4498 33.1159 20.7692 33.1163C28.5914 33.1163 32.8689 26.4351 32.8689 20.6418C32.8693 20.4529 32.8656 20.2639 32.8578 20.0751C33.6946 19.45 34.4135 18.6811 34.9809 17.8043C34.2065 18.159 33.3821 18.3925 32.5366 18.4966C33.4319 17.9397 34.096 17.0783 34.4068 16.0708C33.5753 16.58 32.6613 16.9398 31.7058 17.1342C31.3139 16.6994 30.8353 16.3516 30.3008 16.1132C29.7663 15.8747 29.1878 15.7508 28.6025 15.7495Z" fill="#2691D5"/>
</svg>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9" clip-path="url(#clip0_1_379)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM20.5385 15C19.0696 15 17.6608 15.5835 16.6222 16.6222C15.5835 17.6608 15 19.0696 15 20.5385V27.4615C15 28.9304 15.5835 30.3392 16.6222 31.3778C17.6608 32.4165 19.0696 33 20.5385 33H27.4615C28.9304 33 30.3392 32.4165 31.3778 31.3778C32.4165 30.3392 33 28.9304 33 27.4615V20.5385C33 19.0696 32.4165 17.6608 31.3778 16.6222C30.3392 15.5835 28.9304 15 27.4615 15H20.5385ZM28.1132 18.7828C28.1071 18.6312 28.1316 18.4799 28.1854 18.338C28.2392 18.1961 28.3211 18.0666 28.4262 17.9572C28.5313 17.8477 28.6574 17.7606 28.797 17.7012C28.9366 17.6417 29.0867 17.611 29.2385 17.611C29.3902 17.611 29.5403 17.6417 29.6799 17.7012C29.8195 17.7606 29.9456 17.8477 30.0507 17.9572C30.1558 18.0666 30.2377 18.1961 30.2915 18.338C30.3453 18.4799 30.3698 18.6312 30.3637 18.7828C30.3519 19.0733 30.2282 19.348 30.0185 19.5495C29.8088 19.7509 29.5292 19.8633 29.2385 19.8633C28.9477 19.8633 28.6682 19.7509 28.4584 19.5495C28.2487 19.348 28.125 19.0733 28.1132 18.7828ZM24.0111 28.5009C22.8174 28.5009 21.6725 28.0267 20.8284 27.1826C19.9844 26.3385 19.5102 25.1937 19.5102 24C19.5102 22.8063 19.9844 21.6615 20.8284 20.8174C21.6725 19.9733 22.8174 19.4991 24.0111 19.4991C25.2048 19.4991 26.3496 19.9733 27.1937 20.8174C28.0378 21.6615 28.512 22.8063 28.512 24C28.512 25.1937 28.0378 26.3385 27.1937 27.1826C26.3496 28.0267 25.2048 28.5009 24.0111 28.5009ZM24 27.0203C24.7957 27.0203 25.5587 26.7042 26.1213 26.1416C26.6839 25.579 27 24.816 27 24.0203C27 23.2247 26.6839 22.4616 26.1213 21.899C25.5587 21.3364 24.7957 21.0203 24 21.0203C23.2044 21.0203 22.4413 21.3364 21.8787 21.899C21.3161 22.4616 21 23.2247 21 24.0203C21 24.816 21.3161 25.579 21.8787 26.1416C22.4413 26.7042 23.2044 27.0203 24 27.0203Z" fill="#D41792"/>
</g>
<defs>
<clipPath id="clip0_1_379">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9" clip-path="url(#clip0_1_382)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C37.2554 0 48 10.7446 48 24C48 37.2554 37.2554 48 24 48C10.7446 48 0 37.2554 0 24C0 10.7446 10.7446 0 24 0ZM34.0615 18.8418C33.9449 18.3911 33.712 17.979 33.3861 17.6466C33.0601 17.3142 32.6526 17.0732 32.2043 16.9477C30.5668 16.5009 24 16.5009 24 16.5009C24 16.5009 17.4332 16.5009 15.7957 16.9477C15.3474 17.0732 14.9399 17.3142 14.6139 17.6466C14.288 17.979 14.0551 18.3911 13.9385 18.8418C13.5009 20.5126 13.5009 24 13.5009 24C13.5009 24 13.5009 27.4874 13.9385 29.1582C14.1785 30.0812 14.8911 30.8049 15.7957 31.0523C17.4332 31.4991 24 31.4991 24 31.4991C24 31.4991 30.5668 31.4991 32.2043 31.0523C32.6526 30.9268 33.0601 30.6858 33.3861 30.3534C33.712 30.021 33.9449 29.6089 34.0615 29.1582C34.5009 27.4874 34.5009 24 34.5009 24C34.5009 24 34.5009 20.5126 34.0615 18.8418ZM21.6794 27.4855V20.4148L27.9157 23.9502L21.6794 27.4855Z" fill="#EB0C19"/>
</g>
<defs>
<clipPath id="clip0_1_382">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
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
