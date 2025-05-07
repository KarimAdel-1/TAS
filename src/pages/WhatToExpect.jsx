import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function WhatToExpect() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.fade-in').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-2 fade-in">
          <h4 className="text-sky-600 text-xl font-mono uppercase">
            What to Expect?
          </h4>
          <h2 className="text-black text-4xl sm:text-5xl font-bold">
            TAS New Website
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
          {/* WILL */}
          <div className="bg-blue-100 border border-blue-950 rounded-3xl p-6 flex flex-col gap-6">
            <h3 className="text-blue-950 text-3xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-950" /> WILL
            </h3>
            <ul className="flex flex-col gap-4 text-black text-lg">
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-blue-950 mt-1" /> Build trust &
                credibility fast through strategic design and content
              </li>
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-blue-950 mt-1" /> Strengthen brand
                reputation with professional presentation
              </li>
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-blue-950 mt-1" /> Support lead
                generation & conversions
              </li>
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-blue-950 mt-1" /> Boost global
                discoverability through SEO and performance
              </li>
            </ul>
          </div>

          {/* WON'T */}
          <div className="bg-orange-50 border border-orange-950 rounded-3xl p-6 flex flex-col gap-6">
            <h3 className="text-orange-950 text-3xl font-bold flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-950" /> WON'T
            </h3>
            <ul className="flex flex-col gap-4 text-black text-lg">
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-orange-950 mt-1" /> Replace human
                sales efforts, customer handling, and relationship building
              </li>
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-orange-950 mt-1" /> Fix operational
                delivery issues or service gaps
              </li>
              <li className="flex gap-2 items-start">
                <div className="w-4 h-4 bg-orange-950 mt-1" /> Eliminate need
                for ongoing content & SEO investment
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-sky-100 border border-sky-600 rounded-3xl p-6 flex flex-col gap-4 fade-in">
          <h3 className="text-sky-600 text-3xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600" /> Clear Expectations
          </h3>
          <p className="text-black text-xl">
            We're committed to transparent communication throughout the project.
            Your new website will be a powerful business tool, but it's most
            effective when part of your broader marketing and sales strategy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatToExpect;
