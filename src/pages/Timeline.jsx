import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    },
    {
      title: '2. Design & Content',
      duration: '3–4 weeks',
      description:
        'Creation of wireframes, visual design concepts, UX writing, and content strategy. Multiple review iterations to ensure perfect alignment with TAS vision.',
    },
    {
      title: '3. Development',
      duration: '4–8 weeks',
      description:
        'Responsive development of the approved design, CMS implementation, and integration of all required functionality. Regular progress updates and demos.',
    },
    {
      title: '4. Testing & Launch',
      duration: '2 weeks',
      description:
        'Comprehensive QA across devices, browsers, and user flows. Content loading, SEO optimization, team training, and coordinated launch planning.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 fade-in">
          <h4 className="text-blue-600 text-xl font-mono uppercase">
            Process & Timeline
          </h4>
          <h2 className="text-black text-4xl sm:text-5xl font-bold">
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
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  {step.title}
                </h3>
                <span className="px-6 py-2 rounded-full bg-orange-100 text-orange-900 text-lg">
                  {step.duration}
                </span>
              </div>
              <p className="text-lg text-black">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Total Timeline */}
        <div className="fade-in p-8 rounded-3xl border border-blue-600 bg-blue-100 flex flex-col gap-4">
          <h3 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-3">
            <div className="w-4 h-4 bg-blue-600 rounded-full" />
            Total Estimated Timeline
          </h3>
          <p className="text-2xl font-black text-black">
            10–16 weeks{' '}
            <span className="font-normal">
              from project kickoff to full website launch, with regular
              milestones and review points throughout the process.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
