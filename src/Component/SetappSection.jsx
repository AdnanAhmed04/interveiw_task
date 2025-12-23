import React from "react";
import setup_icon from "../images/setup_icon.png";
import setup_img from "../images/setup_img.png";

export default function SetappSection() {
  return (
    <section className="bg-[#26262B] text-white">
      <div className="mx-auto max-w-7xl px-10 pt-[56px] ">
        <div className="flex items-start justify-between gap-10 mt-10 mb-15">
          <h1 className="text-[34px]  font-bold  ">
            What you get on Setapp.
          </h1>

          <p className="max-w-[425px] text-[18px] leading-[1.6] text-white pt-[6px]">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="mt-[34px] rounded-[24px] bg-gradient-to-b from-[#E39BB0] to-[#D693B0] shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
          <div className="px-[34px] pt-[26px] ">
            <div className="flex items-start gap-[18px]">
              <div className="w-[46px] h-[46px] rounded-[12px] bg-white/18 ring-1 ring-white/25 shadow-[0_10px_22px_rgba(0,0,0,0.18)] flex items-center justify-center">
                <img
                  src={setup_icon}
                  alt="Setapp"
                  className="w-[40px] h-[40px] object-contain"
                />
              </div>

              <div className="pt-[2px]">
                <h2 className="text-[18px] font-semibold text-[#1F2026]">
                  Keep your Mac clean
                </h2>
                <p className="mt-[6px] text-[12px] leading-[1.4] text-black/50">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>

            <div className="mt-[18px]  overflow-hidden ">
              <img
                src={setup_img}
                alt="Setapp preview"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
