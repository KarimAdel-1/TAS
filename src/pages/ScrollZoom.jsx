import plane from '/assets/plane.mp4';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MarketAnalysis } from './MarketAnalysis';
import { Risk } from './Risk';
import { RiskTwo } from './RiskTwo';
import { WhyDoesItMatter } from './WhyDoesItMatter';
import { ROI } from './ROI';
import Lottie from 'lottie-react';
import scrollAnimation from '../lottieAnimation/scrollAnimationIcon.json';
import Timeline from './Timeline';
import WhatToExpect from './WhatToExpect';
import ExecutionPath from './ExecutionPath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const ScrollZoom = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.5, // smoother scroll
          // markers: true,
        },
      });

      tl.to(imageRef.current, {
        scale: 2,
        z: 350,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
        .to(
          heroRef.current,
          {
            scale: 1.1,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
          },
          '<'
        )
        .fromTo(
          textRef.current,
          { autoAlpha: 0, y: 100 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 2,
            ease: 'power2.out',
          },
          '+=1'
        )
        .to(
          lottieRef.current,
          {
            opacity: 0,
            // scale: 0.2,
            duration: 2,
            ease: 'power1.out',
          },
          0
        );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full z-[1]">
      <div className="relative w-full overflow-x-hidden">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className="relative w-full h-screen will-change-transform"
        >
          <video
            src={plane}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div
              ref={textRef}
              className="flex flex-col items-center justify-center gap-4 w-11/12 md:w-2/3 lg:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                Transforming TAS's Digital Presence
              </h1>
              <p className="text-xl md:text-3xl font-bold">
                Elevating Aviation Ground Handling Services with a Modern
                Website
              </p>
            </div>
          </div> */}
          <section
            id="company-overview"
            ref={textRef}
            className="absolute w-11/12 md:w-4/5 lg:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-4xl opacity-0 will-change-transform px-4 md:px-0"
          >
            <div className="flex flex-col items-start justify-center h-fit gap-4 md:gap-6">
              <img
                src="/assets/logoTasBlue.png"
                className="h-16 md:h-[4.5rem]"
                alt="Company Logo"
              />
              <div className="flex flex-col gap-1">
                <p className="text-[#0F8DCD] text-lg font-mono uppercase">
                  COMPANY OVERVIEW
                </p>
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                  Tiger Aviation Services
                </p>
              </div>
              <p className=" text-lg md:text-xl lg:text-2xl xl:text-3xl text-black">
                Tiger Aviation Services has established itself as one of Egypt's
                premier ground handling providers, delivering consistent quality
                and safety.
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-center items-stretch mt-6 gap-2">
              <div className="bg-[#010F65] md:w-1/3 hidden md:flex flex-col gap-4 px-4 py-6 rounded-tl-2xl rounded-bl-2xl">
                {[
                  'HISTORY',
                  'FULL-SERVICE',
                  'OPERATING LOCATIONS',
                  'CERTIFICATIONS',
                ].map((item, idx) => (
                  <div
                    className={`flex items-center gap-2 py-4  ${
                      idx < 3 ? 'border-b-3 border-gray-300 border-dotted' : ''
                    } `}
                  >
                    <p
                      key={idx}
                      className={` text-xs md:text-sm lg:text-md xl:text-lg
                      tracking-widest text-white text-sm py-3 font-mono uppercase`}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-white w-full md:w-full flex flex-col gap-4 px-4 py-6 rounded-2xl md:rounded-br-2xl md:rounded-tr-2xl md:rounded-none">
                {[
                  '35+ years of industry experience',
                  'Passenger, Cargo, VIP, Catering, Travel',
                  '11+ airports across Egypt + UAE branch',
                  'ISAGO-certified & NBAA member',
                ].map((desc, idx) => (
                  <div
                    className={`flex items-center gap-2 py-4  ${
                      idx < 3 ? 'border-b-3 border-gray-300 border-dotted' : ''
                    } `}
                    key={idx}
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-[#0F8DCD] text-lg md:text-2xl"
                    />
                    <p
                      // key={idx}
                      className={`text-black/60 text-xs md:text-sm lg:text-md xl:text-lg
 tracking-widest text-sm py-3 font-mono uppercase`}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Additional Sections */}
        <MarketAnalysis />
        <Risk />
        <RiskTwo />
        <WhyDoesItMatter />
        <ROI />
        <Timeline />
        <WhatToExpect />
        <ExecutionPath />

        {/* <section className="w-full h-screen bg-gradient-to-b from-blue-500 to-blue-700"></section> */}
        <section className="w-full h-screen bg-[url('/assets/cloudBackground.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center w-full py-24 px-4 sm:px-10 md:px-20 xl:px-36 h-full">
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <p
              className="text-[#010F65] text-3xl md:text-4xl lg:text-5xl xl:text-6xl
 font-bold"
            >
              Ready to Transform TAS's Digital Presence?
            </p>
            <p
              className="text-[#010F65] text-xl md:text-2xl lg:text-3xl xl:text-4xl
"
            >
              Let's build a website that truly represents TAS's leadership
              position in aviation ground handling services.
            </p>
          </div>
        </section>
      </div>

      {/* Scroll Layer */}
      <div className="absolute top-0 left-0 right-0 w-full h-screen z-[2] perspective-[500px] overflow-hidden">
        <img
          ref={imageRef}
          src="assets/windowBackground.png"
          alt="image"
          className="w-full h-full object-cover will-change-transform"
        />
        <div
          ref={lottieRef}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-100 flex items-center flex-col gap-3"
        >
          <Lottie animationData={scrollAnimation} loop className="w-10 h-10" />
          <span
            className="text-white uppercase tracking-widest text-xs md:text-sm lg:text-md xl:text-lg
"
          >
            Scroll to start
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollZoom;
