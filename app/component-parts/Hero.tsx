import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto">
      <div className="pt-20 flex items-center justify-center flex-col gap-6">
        <div className="bg-slate-200 rounded-3xl px-4 py-2 flex items-center gap-2 font-ibm-plex-serif">
          <span className="w-2 h-2 bg-black-1 rounded-full">.</span>
          <p>Build wealth with automated investing</p>
        </div>
        <div className="flex flex-col text-center gap-2 text-6xl font-inter font-semibold">
          <h1>Save and invest for your</h1>
          <h1>long term retirement</h1>
        </div>
        <div className="max-w-xl text-center font-inter font-light">
          <p>
            We are committed to providing our clients with personalized
            investment solutions that are tailored to their unique financial
            goals and objectives.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-success-600 text-white font-medium border-none rounded-lg">
            Open an account now
          </button>
          <button className="px-6 py-3 bg-success-50 text-black font-medium border-none rounded-lg">
            Learn more
          </button>
        </div>
        <div className="mt-10">
          <Image
            src="/imgs/hero-img.webp"
            alt="hero-banner"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
