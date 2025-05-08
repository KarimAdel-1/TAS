import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import sales from '/assets/sales.png';
import sheild from '/assets/sheild.png';
import team from '/assets/team.png';
import blitz from '/assets/blitz.png';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

gsap.registerPlugin(ScrollTrigger);

export const RiskTwo = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate header and paragraph
      gsap.from('.fade-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Animate cards separately with a different effect
      gsap.from('.fade-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      });
    }, sectionRef);

    return () => ctx.revert(); // clean up
  }, []);

  const cards = [
    {
      icon: sales,
      title: '24/7 Sales Channel',
      description:
        'Continuously qualifies leads and educates prospects about your services, even during non-business hours and across time zones.',
    },
    {
      icon: sheild,
      title: 'Credibility Engine',
      description:
        'Establishes trust through professional presentation, client testimonials, certifications, and detailed service capabilities.',
    },
    {
      icon: blitz,
      title: 'Action Catalyst',
      description:
        'Converts interest into business inquiries through strategic calls-to-action at key decision points in the client journey.',
    },
    {
      icon: team,
      title: 'Team Confidence',
      description:
        'Continuously qualifies leads and educates prospects about your services, even during non-business hours and across time zones.',
    },
  ];

  return (
    <section
      id="when-does-it-matter"
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4 fade-text">
          <p className="text-[#0F8DCD] text-lg font-mono uppercase">
            WEbsite Delivery
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            What A Strategic Website Actually Delivers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="fade-card bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-[#0F8DCD] flex items-center justify-center h-52 relative">
                <img
                  src={card.icon}
                  alt={`Icon representing ${card.title}`}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="p-3 space-y-4">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 font-bold"
                >
                  {card.title}
                </h3>
                <div className="h-px w-full bg-gray-300" />
                <p
                  className="text-sm md:text-base lg:text-lg xl:text-xl
 text-gray-700 text-base"
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl p-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faRankingStar}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 text-[#0F8DCD]"
            />
            <div
              className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl
"
            >
              A proper site is not a brochure
            </div>
          </div>
          <p
            className="text-black text-sm md:text-base lg:text-lg xl:text-xl
"
          >
            it's your sales team, operations showcase, and credibility engine.
            It works before the phone rings. It proves capability, builds trust,
            and triggers action: Request Handling. Get a Permit. Contact Ops.
          </p>
        </div>
      </div>
    </section>
  );
};
