import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import computer from '/assets/computer.png';
import home from '/assets/home.png';
import clock from '/assets/clock.png';
import document from '/assets/document.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhyDoesItMatter = () => {
  useEffect(() => {
    // GSAP animation on component mount
    gsap.from('.title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.subtitle', { opacity: 0, x: -50, duration: 1, delay: 0.2 });
    gsap.from('.frame', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.frame-4', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.description', { opacity: 0, x: 50, duration: 1, delay: 0.8 });
  }, []);

  return (
    <div className="flex flex-col items-centerw-full w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-[#0F8DCD] text-lg font-mono uppercase">
            When does it matter ?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            The Critical Decision Moments
          </h2>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Top two cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16"
                alt="Annual Planning Cycles"
                src={computer}
              />
              <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Annual Planning Cycles
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p
              className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
            >
              Airlines and operators conduct service reviews during Q4 and Q1.
              Your digital presence influences whether you make the shortlist.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Emergency Response" src={clock} />
              <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Emergency Response
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p
              className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
            >
              When contingency plans activate or a provider fails, operators
              make rapid decisions based on immediately available information.
            </p>
          </div>

          {/* Bottom two cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16"
                alt="Network Expansion"
                src={document}
              />
              <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Network Expansion
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p
              className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
            >
              New routes and destinations trigger research phases where
              operators evaluate ground handling options across your service
              regions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Digital Evaluation" src={home} />
              <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Digital Evaluation
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p
              className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
            >
              Aviation clients increasingly use digital presence as a proxy for
              operational professionalism and service capability.
            </p>
          </div>
        </div>
        <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl p-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 text-[#0F8DCD]"
            />
            <div
              className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl
"
            >
              Critical moments
            </div>
          </div>
          <p
            className="text-black font-be-vietnam-regular text-xs md:text-sm lg:text-md xl:text-lg
"
          >
            Decision-makers typically start searching when a new route opens,
            when a VIP trip needs urgent support, when an existing partner
            fails, or when a yearly RFQ (Request for Quotation) cycle begins.
            These moments are critical—and if your company isn’t clearly visible
            and trusted at that exact point, you’re out of the game.
          </p>
        </div>
      </div>
    </div>
  );
};
