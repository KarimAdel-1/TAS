import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quote from '/assets/quote.png';

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
      className="flex flex-col items-center justify-center py-24 px-4 h-full"
      ref={containerRef}
    >
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-blue-600 text-lg font-mono uppercase">
            Why it matters for TAS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            What’s At Risk ?
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <div className="bg-blue-600 px-12 py-6 rounded-xl">
            <p className="text-white text-xl sm:text-xl lg:text-3xl font-bold fade-text">
              "You're losing clients silently — not because of your service, but
              because your digital presence doesn't build trust fast enough.
              You're seen as a vendor, not a strategic partner."
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="bg-red-100/30 border border-red-200 rounded-xl shadow p-6 flex flex-col gap-10 w-full fade-card">
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
                    <div className="bg-red-200/30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-red-500 text-xl sm:text-2xl font-medium">
                      !
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-mono text-sm sm:text-base mt-2">
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
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  The Business Impact
                </h3>
                <div className="w-full h-[1px] bg-gray-200 mb-4" />
                <p className="text-gray-600 font-mono text-sm sm:text-base">
                  This perception gap has real business consequences. Potential
                  clients might choose competitors for RFQs, new route planning
                  excludes TAS from consideration, and pricing leverage is
                  diminished when you're not positioned as a premium service
                  provider.
                </p>
              </div>

              <div className="fade-card">
                <h4 className="text-lg sm:text-xl font-bold mb-4">
                  Impact flow
                </h4>
                <div className="flex flex-col gap-6">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                        {step}
                      </div>
                      <div className="text-base sm:text-lg font-semibold">
                        Title of Something
                      </div>
                      <div className="flex-1 h-[30px] bg-gray-100 ml-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
