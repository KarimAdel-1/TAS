import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const webflowFeatures = [
  { label: 'Upfront Cost', value: 'Cheaper' },
  { label: 'Time to Launch', value: 'Faster' },
  { label: 'Long-Term Cost', value: 'High ongoing cost' },
  { label: 'Ownership', value: 'Platform lock-in' },
  { label: 'CMS', value: 'Webflow CMS' },
  { label: 'Flexibility', value: 'Limited' },
  { label: 'Scalability', value: 'Medium' },
  { label: 'Security', value: 'Webflow-managed' },
];

const customCodeFeatures = [
  { label: 'Upfront Cost', value: 'Premium' },
  { label: 'Time to Launch', value: 'Takes longer' },
  { label: 'Long-Term Cost', value: 'Low ongoing cost' },
  { label: 'Ownership', value: 'Full ownership' },
  { label: 'CMS', value: 'Fully tailored CMS' },
  { label: 'Flexibility', value: 'Unlimited' },
  { label: 'Scalability', value: 'High' },
  { label: 'Security', value: 'Full Responsibility' },
];

export function ExecutionPath() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('webflow');

  useGSAP(
    () => {
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
    },
    { scope: sectionRef }
  );

  const features =
    activeTab === 'webflow' ? webflowFeatures : customCodeFeatures;

  return (
    <section
      id="execution-paths"
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 fade-in justify-center items-center text-center">
          <h4 className="text-[#0F8DCD] text-lg  font-mono uppercase">
            Execution Path
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            Webflow Build vs. Custom Build
          </h2>
        </div>

        {/* Tabs */}
        <div
          className={`relative flex gap-4 fade-in justify-center px-2 py-2 rounded-full overflow-hidden w-fit mx-auto
    border-2 ${
      activeTab === 'custom'
        ? 'border-[#F26430] bg-orange-50'
        : 'border-[#010F65] bg-white'
    }`}
        >
          {/* Sliding background indicator */}
          <div
            className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-transform duration-300 ease-in-out ${
              activeTab === 'custom'
                ? 'translate-x-full bg-[#F26430]'
                : 'bg-[#010F65]'
            }`}
          />
          <button
            onClick={() => setActiveTab('webflow')}
            className={`text-lg md:text-xl lg:text-2xl xl:text-3xl
relative z-10 px-10 py-2 transition-colors duration-200 ${
              activeTab === 'webflow' ? 'text-white' : 'text-gray-500'
            }`}
          >
            Webflow
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`text-lg md:text-xl lg:text-2xl xl:text-3xl
 relative z-10 px-6 py-2 transition-colors duration-200 ${
   activeTab === 'custom' ? 'text-white' : 'text-gray-500'
 }`}
          >
            Custom Code
          </button>
        </div>

        {/* Feature List */}
        <div
          className={`flex flex-col gap-6 fade-in p-[32px] rounded-4xl shadow-md border
    ${
      activeTab === 'custom'
        ? 'border-[#F26430] bg-orange-50'
        : 'border-[#010F65] bg-[#E2F1FC]'
    }`}
        >
          {features.map(({ label, value }, idx) => {
            const isLast = idx === features.length - 1;
            const borderColor =
              activeTab === 'custom' ? 'border-[#f7a97a]' : 'border-[#242b5e]';

            return (
              <div
                key={idx}
                className={`flex justify-between py-3 ${
                  !isLast ? `border-b ${borderColor}` : ''
                }`}
              >
                <span
                  className="font-semibold text-sm md:text-base lg:text-lg xl:text-xl
 text-gray-700"
                >
                  {label}
                </span>
                <span
                  className="font-mono text-sm md:text-base lg:text-lg xl:text-xl
 uppercase text-black/50"
                >
                  {value}
                </span>
              </div>
            );
          })}
        </div>
        <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl  p-6 md:p-10  flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
         text-[#0F8DCD]"
            />
            <div
              className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl
        "
            >
              Our Recommendation
            </div>
          </div>
          <p
            className="text-black text-xs md:text-sm lg:text-md xl:text-lg
        "
          >
            <span>
              Based on TAS's global presence, premium positioning, and long-term
              growth plans, we recommend the 
              <span className="font-bold text-[#0F8DCD]"> Custom Build </span>
               approach for maximum flexibility and ownership. However, both
              paths will deliver a professional, high-quality website.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExecutionPath;
