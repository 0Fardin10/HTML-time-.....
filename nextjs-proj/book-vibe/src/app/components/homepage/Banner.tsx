import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="relative px-4 py-12 md:py-20 lg:py-24">
      {/* Background Decorator / Ambient Light */}
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle Background Glows */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />

          <div className="relative z-10 grid items-center gap-10 p-8 sm:p-12 md:grid-cols-12 lg:p-16">
            
            {/* Content Column */}
            <div className="flex flex-col items-center text-center md:col-span-7 md:items-start md:text-left">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-400 backdrop-blur-md">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                📚 Discover your next favorite book
              </div>

              {/* Main Heading */}
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl/tight">
                Books to freshen up{" "}
                <span className="mt-1 block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  your bookshelf
                </span>
              </h1>

              {/* Subheading */}
              <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
                Explore a handpicked collection of extraordinary titles and find something 
                extraordinary for your next reading adventure.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
                <button className="btn btn-emerald border-none bg-emerald-500 font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0">
                  Explore Books
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <button className="btn btn-outline border-slate-700 font-medium text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/60 hover:text-white hover:-translate-y-0.5 active:translate-y-0">
                  Learn More
                </button>
              </div>

              {/* Quick Stats / Social Proof */}
              <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6 text-slate-400">
                <div>
                  <p className="text-xl font-bold text-white">10,000+</p>
                  <p className="text-xs">Curated Titles</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="text-xl font-bold text-white">4.9/5</p>
                  <p className="text-xs">Reader Rating</p>
                </div>
              </div>

            </div>

            {/* Image Column */}
            <div className="relative flex justify-center md:col-span-5">
              
              {/* Backing Card Accent */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500 to-cyan-500 opacity-20 blur-xl transition duration-500 group-hover:opacity-40" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-2xl backdrop-blur-sm">
                <Image
                  src={bannerImg}
                  alt="Curated book collection"
                  priority
                  quality={90}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;