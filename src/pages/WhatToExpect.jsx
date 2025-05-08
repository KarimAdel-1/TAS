import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
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
      id="what-to-expect"
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
          <div className="bg-[#E6E5FF] border border-blue-950 rounded-3xl flex flex-col gap-6">
            <div className="text-[#010F65] flex items-center justify-start gap-2 border-b py-4 px-6">
              <FontAwesomeIcon icon={faCircleCheck} className="text-2xl" />
              <h3 className="w-8 h-8 text-2xl md:text-3xl font-bold">WILL</h3>
            </div>
            <ul className="flex flex-col gap-4 text-lg px-6 py-4 items-start">
              <li className="flex gap-4 items-start">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl text-[#010F65] pt-1 "
                />
                <span>
                  Build trust & credibility fast through strategic design and
                  content
                </span>
              </li>
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl text-[#010F65] pt-1 "
                />
                <h3>
                  Strengthen brand reputation with professional presentation
                </h3>
              </li>
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl text-[#010F65] pt-1"
                />
                <h3>Support lead generation & conversions</h3>
              </li>
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-2xl text-[#010F65] pt-1"
                />
                <h3>
                  Boost global discoverability through SEO and performance
                </h3>
              </li>
            </ul>
          </div>

          {/* WON'T */}
          <div className="bg-orange-50 border border-[#F26430] rounded-3xl flex flex-col gap-6">
            <div className="text-[#F26430] flex items-center justify-start gap-2 border-b py-4 px-6">
              <FontAwesomeIcon icon={faCircleXmark} className="text-2xl" />
              <h3 className=" text-2xl md:text-3xl font-bold">WON'T</h3>
            </div>

            <ul className="flex flex-col gap-4 text-black text-lg px-6 py-4 items-start">
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-2xl text-[#F26430] pt-1"
                />
                <h3>
                  Replace human sales efforts, customer handling, and
                  relationship building
                </h3>
              </li>
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-2xl text-[#F26430] pt-1"
                />
                <h3>Fix operational delivery issues or service gaps</h3>
              </li>
              <li className="flex gap-4 items-start justify-center">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="text-2xl text-[#F26430] pt-1"
                />
                <h3>Eliminate need for ongoing content & SEO investment</h3>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-sky-100 border border-sky-600 rounded-3xl p-6 flex flex-col gap-4 fade-in">
          <h3 className="text-black font-bold flex items-center gap-2">
            <FontAwesomeIcon
              icon={faClock}
              className="text-2xl text-[#0F8DCD]"
            />
            <h3 className="text-2xl">Clear Expectations</h3>
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
