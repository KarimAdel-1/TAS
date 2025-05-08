import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  faCircleCheck,
  faClock,
  faGear,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(ScrollTrigger);

function Timeline() {
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

  const steps = [
    {
      title: '1. Discovery & Strategy',
      duration: '2 weeks',
      description:
        'Comprehensive audit of current site, user persona development, content planning, and sitemap creation to align with TAS’s business goals.',
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    },
    {
      title: '2. Design & Content',
      duration: '3–4 weeks',
      description:
        'Creation of wireframes, visual design concepts, UX writing, and content strategy. Multiple review iterations to ensure perfect alignment with TAS vision.',
      icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
      title: '3. Development',
      duration: '4–8 weeks',
      description:
        'Responsive development of the approved design, CMS implementation, and integration of all required functionality. Regular progress updates and demos.',
      icon: <FontAwesomeIcon icon={faDev} />,
    },
    {
      title: '4. Testing & Launch',
      duration: '2 weeks',
      description:
        'Comprehensive QA across devices, browsers, and user flows. Content loading, SEO optimization, team training, and coordinated launch planning.',
      icon: <FontAwesomeIcon icon={faCircleCheck} />,
    },
  ];

  return (
    <section
      id="process-and-timeline"
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 fade-in">
          <h4 className="text-[#0F8DCD] text-lg font-mono uppercase">
            Process & Timeline
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            From Discovery to Launch
          </h2>
        </div>

        {/* Timeline Steps */}
        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="fade-in p-8 rounded-3xl border border-blue-200 bg-white shadow-md flex flex-col gap-6"
            >
              <div className="flex items-center justify-between gap-2 md:gap-4">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 font-bold text-black"
                >
                  {step.title}
                </h3>
                <span
                  className="p-1 md:px-6 md:py-2 rounded-2xl md:rounded-full bg-orange-100 text-orange-900 text-xs md:text-sm lg:text-md xl:text-lg
"
                >
                  {step.duration}
                </span>
              </div>
              <p
                className="text-sm md:text-base lg:text-lg xl:text-xl
 text-black"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Total Timeline */}
        <div className="bg-[#E2F1FC] border border-[#0F8DCD] rounded-xl p-10 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faClock}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
 text-[#0F8DCD]"
            />
            <h3
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl
            font-bold text-black flex items-center gap-3"
            >
              Total Estimated Timeline
            </h3>
          </div>
          <div>
            <span className="text-sm md:text-base lg:text-lg xl:text-xl text-black font-bold">
              10–16 weeks{' '}
            </span>
            <span
              className="text-sm md:text-base lg:text-lg xl:text-xl
            "
            >
              from project kickoff to full website launch, with regular
              milestones and review points throughout the process.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
