import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MarketAnalysis = () => {
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
      id="market-analysis"
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col gap-4 fade-in">
          <h4 className="text-blue-600 text-xl font-mono">MARKET ANALYSIS</h4>
          <h2 className="text-black text-4xl sm:text-5xl font-bold">
            Research Findings
          </h2>
        </div>

        {/* Description */}
        <p className="text-black text-xl md:text-2xl max-w-5xl fade-in">
          Analysis of the current aviation service landscape reveals
          opportunities for <br /> digital improvement
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">
          {[
            {
              title: 'Market Position',
              text: 'Few competitors have started investing in digital presence.',
            },
            {
              title: 'Brand Perception',
              text: 'Observable market positioning suggests strong operational reputation with inconsistent digital representation.',
            },
            {
              title: 'Growth Potential',
              text: 'Strategic digital positioning could increase market visibility and lead generation based on industry standards.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`${
                    card.title === 'Market Position'
                      ? 'bg-blue-900'
                      : card.title === 'Brand Perception'
                        ? 'bg-blue-600'
                        : 'bg-orange-500'
                  } h-1.5 w-16 rounded-full transition-all duration-300 group-hover:w-24`}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-800">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Box */}
        {/* <div className="bg-yellow-100/30 border border-yellow-300 rounded-xl shadow-md p-6 fade-in transform transition-all duration-300 hover:scale-105 hover:shadow-xl group">
          <div className="flex flex-col gap-4">
            <div className="bg-yellow-400 h-1.5 w-16 transition-all duration-300 group-hover:w-24" />
            <h3 className="text-2xl font-bold text-black">SEO</h3>
            <p className="text-lg text-black">
              Is lagging for TAS; many companies rank higher.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
