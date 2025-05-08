import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import computer from '/assets/computer.png';
import home from '/assets/home.png';
import clock from '/assets/clock.png';
import document from '/assets/document.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendUp,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const data = [
  { label: 'Lead Generation Increase', value: '+20%', percent: 20 },
  { label: 'Proposal Conversion Rate', value: '+25%', percent: 25 },
  { label: 'Client Retention', value: '+15%', percent: 15 },
];

const returns = {
  short: [
    'Immediate credibility boost with prospects',
    'Reduced sales cycle with better qualified leads',
  ],
  mid: [
    'Improved inclusion rate in RFQs and tenders',
    'Higher conversions from proposals to contracts',
  ],
  long: [
    'Market leadership positioning',
    'Enhanced recruitment power for top operational talent',
  ],
};

export const ROI = () => {
  useEffect(() => {
    // GSAP animation on component mount
    gsap.from('.title', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.subtitle', { opacity: 0, x: -50, duration: 1, delay: 0.2 });
    gsap.from('.frame', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.frame-4', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.description', { opacity: 0, x: 50, duration: 1, delay: 0.8 });
  }, []);

  return (
    <section
      id="roi"
      className="flex flex-col items-center w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full relative h-full bg-gray-50"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-blue-600 text-lg font-mono uppercase">ROI</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
            Business Impact
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
                src={document}
              />
              <div className="font-bold text-2xl md:text-3xl">
                Lead Generation & Conversion
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 w-32 md:w-86 md:w-86 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Strategic design and clear calls-to-action will drive more
              qualified inquiries.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Emergency Response" src={clock} />
              <div className="font-bold text-2xl">Faster Deal Cycles</div>
            </div>
            <div className="h-[1px] bg-gray-300  w-32 md:w-86 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Clear information and trust signals reduce buyer hesitation and
              questions.
            </p>
          </div>

          {/* Bottom two cards */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <img className="w-16 h-16" alt="Network Expansion" src={home} />
              <div className="font-bold text-2xl">
                Brand Value & Premium Positioning
              </div>
            </div>
            <div className="h-[1px] bg-gray-300  w-32 md:w-86 my-4"></div>
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
              <div className="font-bold text-2xl">Operational Efficiency</div>
            </div>
            <div className="h-[1px] bg-gray-300  w-32 md:w-86 my-4"></div>
            <p className="text-black font-inter-regular text-xl">
              Your OPS team gain more confidence, gets clearer communication and
              better-qualified leads, cutting wasted time.
            </p>
          </div>
        </div>

        <div className="mx-auto gap-5 flex flex-col mt-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-md ">
            <div className="bg-[#010F65] text-white text-lg md:text-xl font-semibold px-4 py-2 rounded-t py-4">
              Business Impact Projections
            </div>
            <div className="bg-white px-4 py-4 space-y-4 rounded-b">
              {data.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between font-medium text-sm">
                    <span className="text-base md:text-lg">{item.label}</span>
                    <span className="text-[#0F8DCD] text-base md:text-lg font-bold">
                      {item.value}
                    </span>
                  </div>
                  <div className="w-full bg-blue-100 h-1.5 rounded">
                    <div
                      className="bg-[#0F8DCD] h-1.5 rounded"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {/* Short-Term Returns */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group gap-4 flex flex-col">
              <div
                className={`bg-[#010F65] h-1.5 w-16 rounded-full transition-all duration-300 group-hover:w-24`}
              />
              <h3 className="text-black text-2xl font-bold mb-2">
                Short-Term Returns
              </h3>
              <ul className="space-y-2 text-sm">
                {returns.short.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 ">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-[#010F65] text-base md:text-xl"
                    />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mid-Term Returns */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group gap-4 flex flex-col">
              <div
                className={`bg-[#0F8DCD] h-1.5 w-16 rounded-full transition-all duration-300 group-hover:w-24`}
              />
              <h3 className="ttext-black text-2xl font-bold mb-2">
                Med-Term Returns
              </h3>
              <ul className="space-y-2 text-sm">
                {returns.mid.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-[#0F8DCD] text-base md:text-xl"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-Term Returns */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group gap-4 flex flex-col">
              <div
                className={`bg-orange-500 h-1.5 w-16 rounded-full transition-all duration-300 group-hover:w-24`}
              />
              <h3 className="text-black text-2xl font-bold mb-2">
                Long-Term Returns
              </h3>
              <ul className="space-y-2 text-sm">
                {returns.long.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-orange-500 text-base md:text-xl"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl p-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-2xl text-[#0F8DCD]"
            />
            <span className="text-2xl font-bold">High ROI</span>
          </div>
          <p className="text-black font-be-vietnam-regular text-xl">
            Website investment pays for itself with acquisition of just one new
            medium-sized client. Additional leads represent pure ROI.
          </p>
        </div>
      </div>
    </section>
  );
};
