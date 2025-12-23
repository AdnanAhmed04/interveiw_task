import React from "react";
import left_hero from "../images/left_hero.png";
import right_hero from "../images/right_hero.png";

import work_with_pics from "../images/work_with_pics.png";

export default function HeroThreeCols() {
  return (
   <section className="bg-[#26262B] text-white min-h-screen flex items-center justify-center">
<div className="grid max-w-[1180px] w-full grid-cols-1 lg:grid-cols-3 items-center px-6 gap-10">


{/* LEFT */}

<div>
    <img src={left_hero} alt="" srcset="" />
</div>


{/* CENTER */}
<div className="flex flex-col items-center text-center">
<div className="mb-10 h-[78px] w-[78px] rounded-[18px] bg-[#26262B] shadow-[0_12px_32px_rgba(0,0,0,0.4)] grid place-items-center">
<div className="grid grid-cols-2 gap-[6px]">
{[1,2,3,4].map(i => (
<span key={i} className="h-[14px] w-[14px] rotate-45 rounded bg-[#E1C16E]" />
))}
</div>
</div>


<h1 className="font-extrabold leading-tight tracking-tight">
<div className="text-[58px]">Dozens of apps.</div>
<div className="text-[58px]">One subscription.</div>
<div className="text-[60px] mt-2">$9.99</div>
</h1>


<div className="mt-10 flex gap-3">
<button className="bg-white text-[#2B2C31] px-6 h-[44px] rounded-lg text-sm font-semibold shadow">Try free for 7 days</button>
<button className="bg-white text-[#2B2C31] h-[44px] w-[44px] rounded-lg shadow"></button>
<button className="bg-white text-[#2B2C31] h-[44px] w-[44px] rounded-lg shadow font-bold">G</button>
</div>


<p className="mt-8 text-sm text-white/70">Power up your workflow with Setapp, a<br/>smart way to get apps.</p>
</div>


{/* RIGHT */}

<div>
    <img src={right_hero} alt="" srcset="" />
</div>
</div>
</section>
  );
}

/* ---------- tiny parts ---------- */

function LogoMark() {
  return (
    <div className="grid grid-cols-2 gap-1">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="h-3 w-3 rotate-45 rounded-sm bg-[#E1C16E]" />
      ))}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M16.7 13.2c0-2 1.7-3 1.8-3.1-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.8-1.4 0-2.7.8-3.4 2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.1 2.8 2.1 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-.9 2.7-1.9.8-1.2 1.2-2.3 1.2-2.4-.1-.1-2.9-1.1-2.9-3.8z" />
      <path d="M14.7 6.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.7-1 1.7-.9 2.7 1 0 2-.6 2.6-1.3z" />
    </svg>
  );
}
