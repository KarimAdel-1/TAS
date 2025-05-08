import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowTrendDown,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

export const Risk = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate text content
      gsap.from('.fade-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Animate cards or block elements
      gsap.from('.fade-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-it-matters"
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-[#0F8DCD] text-lg font-mono uppercase">
            Why It Matters
          </p>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            What’s At Risk ?
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="bg-red-100/30 border border-red-200 rounded-xl shadow p-6 flex flex-col gap-10 w-full fade-card ">
              {[
                {
                  title: 'Lost Leads',
                  desc: '68% OF B2B BUYERS JUDGE TRUST VIA DIGITAL PRESENCE BEFORE INITIAL CONTACT',
                },
                {
                  title: 'Reputation Erosion',
                  desc: 'A DATED SITE DAMAGES BRAND PERCEPTION, ESPECIALLY WITH VIP CLIENTS WHO EXPECT EXCELLENCE',
                },
                {
                  title: 'Competitive Loss',
                  desc: 'COMPETITORS APPEAR MORE CREDIBLE ONLINE, WILL CAPTURE LEADS AND CONTRACTS THAT SHOULD GO TO TAS',
                },
                {
                  title: 'Longer Sales Cycles',
                  desc: 'MISSING CONVERSION-FOCUSED UX EXTENDS TIME FROM FIRST CONTACT TO CONTRACT',
                },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex gap-4 items-start">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-red-900 rounded-full text-[#FBD0CF]"
                    />
                    <div>
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 font-bold"
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl mt-2 font-mono">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-10 w-full">
              <div className="p-6 border border-gray-300 rounded-xl shadow fade-card">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 font-bold mb-2"
                >
                  The Business Impact
                </h3>
                <div className="w-full h-[1px] bg-gray-200 mb-4" />
                <p
                  className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl
font-mono"
                >
                  This perception gap has real business consequences, potential
                  clients might choose competitors for RFQs, new route planning
                  excludes TAS from consideration, and pricing leverage is
                  diminished when you're not positioned as a premium service
                  provider.
                </p>
              </div>

              <div className="fade-card">
                <h4
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 font-bold mb-4"
                >
                  Impact flow
                </h4>
                <div className="flex flex-col gap-6">
                  {[
                    'Website Weakness',
                    'Trust & Credibility Gap',
                    'Competitive Disadvantage',
                    'Lost Business Value',
                  ].map((step, index) => {
                    const colorConfigs = [
                      { bg: 'bg-[#FEF9E6]', text: 'text-[#F8C51D]' },
                      { bg: 'bg-[#FFE4D2]', text: 'text-[#FF8F17]' },
                      { bg: 'bg-[#FDABA4]', text: 'text-[#EF4345]' },
                      { bg: 'bg-[#EF4345]', text: 'text-white' },
                    ];

                    const { bg, text } = colorConfigs[index];

                    return (
                      <div key={step} className="flex items-center gap-4">
                        <div
                          className={`p-5 w-10 h-10 rounded-full ${bg} ${text} flex items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl`}
                        >
                          {index + 1}
                        </div>
                        <div className="text-sm md:text-base lg:text-lg xl:text-xl bg-gray-100 px-4 py-1 w-full">
                          <span>{step}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl p-6 md:p-10 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faArrowTrendDown}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 text-[#0F8DCD]"
              />
              <div
                className="text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl
                font-bold"
              >
                You're losing clients silently
              </div>
            </div>
            <p
              className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
            >
              Not because of your service, but because your digital presence
              doesn't build trust fast enough. You're seen as a vendor, not a
              strategic partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
