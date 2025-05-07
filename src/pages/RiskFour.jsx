import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import computer from '/assets/computer.png';
import home from '/assets/home.png';
import clock from '/assets/clock.png';
import document from '/assets/document.png';

export const RiskFour = () => {
  useEffect(() => {
    // GSAP animation on component mount
    gsap.from('.title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.subtitle', { opacity: 0, x: -50, duration: 1, delay: 0.2 });
    gsap.from('.frame', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.frame-4', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.description', { opacity: 0, x: 50, duration: 1, delay: 0.8 });
  }, []);

  return (
    <div className="flex flex-col items-center py-24 px-4 relative h-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-blue-600 text-lg font-mono uppercase">
            Why it matters for TAS
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
            The ROI: Business Impact
          </h2>
        </div>

        <div className="bg-blue-600 rounded-xl p-10 flex flex-col gap-6">
          <p className="text-white font-be-vietnam-regular text-xl">
            Website investment pays for itself with acquisition of just one new
            medium-sized client. Additional leads represent pure ROI.
          </p>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Top two cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16"
                alt="Annual Planning Cycles"
                src={document}
              />
              <div className="font-inter-bold text-2xl">
                Lead Generation & Conversion
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Strategic design and clear calls-to-action will drive more
              qualified inquiries.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Emergency Response" src={clock} />
              <div className="font-inter-bold text-2xl">Faster Deal Cycles</div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Clear information and trust signals reduce buyer hesitation and
              questions.
            </p>
          </div>

          {/* Bottom two cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Network Expansion" src={home} />
              <div className="font-inter-bold text-2xl">
                Brand Value & Premium Positioning
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Professional digital presence supports premium pricing and client
              acquisition and retention.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16"
                alt="Digital Evaluation"
                src={computer}
              />
              <div className="font-inter-bold text-2xl">
                Operational Efficiency
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Your OPS team gain more confidence, gets clearer communication and
              better-qualified leads, cutting wasted time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
