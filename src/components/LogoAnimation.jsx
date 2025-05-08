import React, { useEffect } from 'react';
import gsap from 'gsap';

const LogoAnimation = () => {
  useEffect(() => {
    const t1 = new gsap.timeline();

    t1.from(['#top-gradient', '#bottom-gradient'], 0.7, {
      ease: 'power3.inOut',
      filter: 'blur(0px)',
      opacity: 0,
    })
      .from('#green-filter', 0.8, { opacity: 0, scale: 3 }, '-=50%')
      .to('#green-filter', 0.25, { opacity: 0, scale: 3 })
      .to(
        ['#top-gradient', '#bottom-gradient'],
        0.3,
        { filter: 'blur(0px)', opacity: 0 },
        '-=100%'
      )
      .set('#logo', { opacity: 1 })
      .from('#logo', 0.6, {
        ease: 'back',
        filter: 'blur(0.3em)',
        opacity: 0,
        scale: 1.5,
      })
      .from(
        '#logo-border',
        0.4,
        { ease: 'power3.out', opacity: 0, scale: 0.75 },
        '-=100%'
      )
      .from(
        '#logo-border-inner',
        0.4,
        { ease: 'power3.out', scale: 0.75 },
        '-=100%'
      )
      .to('#logo', 1.5, { scale: 1.1 }, '-=20%')
      .to(
        ['#logo-border', '#logo-border-inner'],
        1.5,
        { ease: 'power3.out', scale: 1.1 },
        '-=100%'
      )
      .to('#logo-border', 1.25, { ease: 'power4.in', scale: 8 }, '-=50%')
      .to('#logo-border-inner', 0.5, { ease: 'power4.in', scale: 8 }, '-=60%')
      .to('#logo', 0.25, { opacity: 0, scale: 1.2 }, '-=50%');

    document.getElementById('restart-button').onclick = () => t1.restart();
  }, []);

  return (
    <div className="relative w-full h-[1200px] bg-black flex items-center justify-center overflow-hidden">
      {/* Green Filter */}
      <div
        id="green-filter"
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(32,147,127,0.05),rgba(32,147,127,0.4)80%)] z-10"
      ></div>

      {/* Gradients */}
      <div
        id="top-gradient"
        className="absolute top-[-50px] left-[-5%] w-[110%] h-[80px] bg-gradient-to-r from-[#7f75edc0] to-[#ab6fda80] blur-[3em] z-20"
      ></div>
      <div
        id="bottom-gradient"
        className="absolute bottom-[-50px] left-[-5%] w-[110%] h-[80px] bg-gradient-to-r from-[#7f75edc0] to-[#ab6fda80] blur-[3em] z-20"
      ></div>

      {/* Logo Wrapper */}
      <div
        id="logo-wrapper"
        className="flex items-center justify-center w-full h-full relative z-30"
      >
        <div id="logo" className="opacity-0">
          <div
            id="logo-border"
            className="absolute w-[140%] h-[160%] bg-[#1bd17c] rounded-[2.25em] z-1"
          ></div>
          <div
            id="logo-border-inner"
            className="absolute w-[calc(140%-0.5em)] h-[calc(160%-0.5em)] bg-black rounded-[2em] z-2"
          ></div>

          {/* Logo Image */}
          <img
            id="logo-image"
            src="/path/to/logoTasBlue.png" // Make sure to replace this with the correct path
            alt="TasBlue Logo"
            className="w-auto h-auto max-w-[70%] max-h-[70%]"
          />
        </div>
      </div>

      {/* Restart Button */}
      <button
        id="restart-button"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 backdrop-blur-sm bg-white/5 border-none rounded-lg text-white font-[Rubik] text-[0.9em] py-2 px-4 z-100"
      >
        Restart
      </button>
    </div>
  );
};

export default LogoAnimation;
