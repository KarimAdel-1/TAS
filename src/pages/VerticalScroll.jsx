import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MarketAnalysis } from './MarketAnalysis';
import { Risk } from './Risk';
import { RiskTwo } from './RiskTwo';
import { RiskThree } from './RiskThree';
import { RiskFour } from './RiskFour';

gsap.registerPlugin(ScrollTrigger);

const VerticalScroll = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const items = section.querySelectorAll('.item');

    // Set initial positions
    items.forEach((item, index) => {
      if (index !== 0) gsap.set(item, { yPercent: 100 });
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: 'top top',
        end: `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        // markers: true, // enable for debugging
      },
      defaults: { ease: 'none' },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: '10px',
      });

      if (index + 1 < items.length) {
        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          '<'
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="vertical-section h-screen w-full overflow-hidden relative min-h-screen"
    >
      <div className="wrapper relative h-full w-full">
        {/* Individual items inside the wrapper */}
        <div className="item absolute inset-0 flex items-center justify-center border-4 border-gray-300 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <MarketAnalysis />
        </div>
        <div className="item absolute inset-0 flex items-center justify-center border-4 border-gray-300 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <Risk />
        </div>
        <div className="item absolute inset-0 flex items-center justify-center border-4 border-gray-300 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <RiskTwo />
        </div>
        <div className="item absolute inset-0 flex items-center justify-center border-4 border-gray-300 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <RiskThree />
        </div>
        <div className="item absolute inset-0 flex items-center justify-center border-4 border-gray-300 bg-white p-6 sm:p-8 md:p-10 lg:p-12">
          <RiskFour />
        </div>
      </div>
    </section>
  );
};

export default VerticalScroll;
