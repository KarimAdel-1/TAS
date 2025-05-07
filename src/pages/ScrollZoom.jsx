import clouds from '/assets/clouds.mp4';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MarketAnalysis } from './MarketAnalysis';
import { Risk } from './Risk';
import { RiskTwo } from './RiskTwo';
import { RiskThree } from './RiskThree';
import { RiskFour } from './RiskFour';
import Lottie from 'lottie-react';
import scrollAnimation from '../lottieAnimation/scrollAnimationIcon.json';
import Timeline from './Timeline';
import WhatToExpect from './WhatToExpect';
import ExecutionPath from './ExecutionPath';

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
            scale: 0.2,
            duration: 1,
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
            src={clouds}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div
            ref={textRef}
            className="absolute w-3/4 md:w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-4xl font-bold opacity-0 will-change-transform"
          >
            <div className="flex flex-col items-start justify-center h-full gap-3 md:gap-6">
              <img src="/assets/logo-tas.png" className="h-10 md:h-18" />
              <div className="flex flex-col gap-1">
                <p className="text-[12px] md:text-lg text-blue-600 font-mono uppercase">
                  COMPANY OVERVIEW
                </p>
                <p className="text-[16px] font-bold md:text-5xl">
                  Tiger Aviation Service
                </p>
              </div>
              <p className="text-[14px] md:text-2xl">
                Tiger Aviation services has established itself as one of Egypt's
                premier ground handling providers, delivering consistent quality
                and safety.
              </p>
            </div>

            <div className="flex w-full justify-center items-center mt-4">
              <div className="bg-blue-600 w-1/2 h-[412px] rounded-3xl hidden md:flex flex-col gap-4 px-10 py-10">
                <p className="text-white text-lg border-b-3 border-gray-300 py-4 border-dotted font-mono uppercase">
                  HISTORY
                </p>
                <p className="text-white text-lg border-b-3 border-gray-300 py-4 border-dotted font-mono uppercase">
                  FULL-SERVICE
                </p>
                <p className="text-white text-lg border-b-3 border-gray-300 py-4 border-dotted font-mono uppercase">
                  OPERATING LOCATIONS
                </p>
                <p className="text-white text-lg py-4 font-mono uppercase">
                  CERTIFICATIONS
                </p>
              </div>

              <div className="h-[370px] border-2 border-dotted border-gray-50 hidden md:flex"></div>

              <div className="bg-white w-full h-full md:h-[412px] rounded-3xl flex flex-col gap-4 px-3 py-3 md:px-10 md:py-10">
                <p className="text-black/60 text-[13px] md:text-lg border-b-2 md:border-b-3 border-gray-300 py-3 md:py-4 border-dotted font-mono uppercase">
                  35+ years of industry experience
                </p>
                <p className="text-black/60 text-[13px] md:text-lg border-b-2 md:border-b-3 border-gray-300 py-3 md:py-4 border-dotted font-mono uppercase">
                  Passenger, Cargo, VIP, Catering, Travel
                </p>
                <p className="text-black/60 text-[13px] md:text-lg border-b-2 md:border-b-3 border-gray-300 py-3 md:py-4 border-dotted font-mono uppercase">
                  11+ airports across Egypt + UAE branch
                </p>
                <p className="text-black/60 text-[13px] md:text-lg py-3 md:py-4 border-dotted font-mono uppercase">
                  ISAGO-certified & NBAA member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <MarketAnalysis />
        <Risk />
        <RiskTwo />
        <RiskThree />
        <RiskFour />
        <Timeline />
        <WhatToExpect />
        <ExecutionPath />

        {/* <section className="w-full h-screen bg-gradient-to-b from-blue-500 to-blue-700"></section> */}
        <section className="w-full h-screen bg-[url('/assets/cloudBackground.png')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 w-11/12 md:w-2/3 lg:w-1/2 text-center">
            <p className="text-blue-950 text-4xl md:text-6xl font-bold">
              Ready to Transform TAS's Digital Presence?
            </p>
            <p className="text-blue-800 text-xl md:text-3xl font-bold">
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-100 flex items-center flex-col gap-3"
        >
          <Lottie animationData={scrollAnimation} loop className="w-10 h-10" />
          <span className="text-white uppercase tracking-widest">
            Scroll to start
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollZoom;
