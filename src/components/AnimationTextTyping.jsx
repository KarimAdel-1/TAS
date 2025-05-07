import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TypingBar = () => {
  const containerRef = useRef(null);
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);
  const barRef = useRef(null);

  const text2 = 'creativeocean';

  useEffect(() => {
    const t2Chars = txt2Ref.current.querySelectorAll('span');

    const color1 = '#fff';
    const color2 = '#17c0fd';

    const moveBar = () => {
      const txt1Width = txt1Ref.current.offsetWidth;
      gsap.set(barRef.current, { left: txt1Width + 1 });
    };

    const tl = gsap.timeline({ delay: 0.2 });

    tl.set(txt1Ref.current, { color: color1, fontWeight: '400' })
      .set(txt2Ref.current, {
        color: color2,
        fontWeight: '700',
        opacity: 0,
        x: txt1Ref.current.offsetWidth - 2,
      })
      .set(barRef.current, {
        left: 1,
        backgroundColor: color1,
      })
      .to(
        barRef.current,
        {
          duration: 0.1,
          opacity: 0,
          yoyo: true,
          repeat: 5,
          repeatDelay: 0.3,
        },
        0
      )
      .from(
        txt1Ref.current,
        {
          duration: 1.1,
          width: 0,
          ease: 'steps(14)',
          onUpdate: moveBar,
        },
        2.5
      )
      .to(barRef.current, { duration: 0.05, backgroundColor: color2 }, '+=0.15')
      .to(
        barRef.current,
        {
          duration: 1.0,
          width: 290,
          ease: 'power4.inOut',
        },
        '+=0.1'
      )
      .from(
        containerRef.current,
        {
          duration: 1.0,
          x: 135,
          ease: 'power4.inOut',
        },
        '-=1.0'
      )
      .to(txt2Ref.current, { duration: 0.01, opacity: 1 }, '-=0.1')
      .to(barRef.current, {
        duration: 0.4,
        x: 290,
        width: 0,
        ease: 'power4.in',
      })
      .from(
        t2Chars,
        {
          duration: 0.6,
          opacity: 0,
          ease: 'power3.inOut',
          stagger: 0.02,
        },
        '-=0.5'
      )
      .to(
        txt1Ref.current,
        {
          duration: 1.5,
          opacity: 0.25,
          ease: 'power3.inOut',
        },
        '-=1.2'
      )
      .timeScale(1.45);
  }, []);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="relative text-[40px] font-sans tracking-wide w-[600px] h-[40px]"
      >
        <span ref={txt1Ref} className="inline-block absolute overflow-hidden">
          www.codepen.io/
        </span>
        <span ref={txt2Ref} className="inline-block absolute overflow-hidden">
          {text2.split('').map((char, i) => (
            <span key={i} className="inline-block">
              {char}
            </span>
          ))}
        </span>
        <div
          ref={barRef}
          className="absolute top-[-4px] h-[49px] w-[3px]"
        ></div>
      </div>
    </div>
  );
};

export default TypingBar;
