import React, { useRef, useEffect } from 'react';
import { TableRow } from '../components/TableRow.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ExecutionPath() {
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
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4 fade-in">
          <h4 className="text-blue-600 text-xl font-mono uppercase">
            Execution Path
          </h4>
          <h2 className="text-black text-4xl sm:text-5xl font-bold">
            Webflow Build vs. Custom Build
          </h2>
        </div>

        {/* Table Section */}
        <div className="w-full overflow-x-auto fade-in">
          <div className="w-[1200px] bg-white rounded-3xl outline-1 outline-offset-[-1px] outline-Fedral-blue-950 flex flex-col justify-start items-start overflow-hidden">
            <TableRow
              factor="Factor"
              webflow={
                <>
                  <img
                    src="https://placehold.co/32x32"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="text-Fedral-blue-950 font-bold">
                    Webflow
                  </span>
                </>
              }
              customCode={
                <>
                  <div className="w-7 h-7 bg-Orange-950 mr-2" />
                  <span className="text-Fedral-blue-950 font-bold">
                    Custom Code
                  </span>
                </>
              }
              isHeader
            />

            <TableRow
              factor="Upfront Cost"
              webflow={<span className="text-sky-600">Cheaper</span>}
              customCode={<span className="text-sky-blue-600">Premium</span>}
            />

            <TableRow
              factor="Time to Launch"
              webflow={<span className="text-green-700">Faster</span>}
              customCode={<span className="text-red-600">Takes longer</span>}
            />

            <TableRow
              factor="Long-Term Cost"
              webflow={<span className="text-red-600">High ongoing cost</span>}
              customCode={
                <span className="text-green-700">Low ongoing cost</span>
              }
            />

            <TableRow
              factor="Ownership"
              webflow={<span className="text-amber-500">Platform lock-in</span>}
              customCode={
                <span className="text-green-700">Full ownership</span>
              }
            />

            <TableRow
              factor="CMS"
              webflow={<span className="text-amber-500">Webflow CMS</span>}
              customCode={
                <span className="text-green-700">Fully tailored CMS</span>
              }
            />

            {/* Add more ExecutionRow entries as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExecutionPath;
