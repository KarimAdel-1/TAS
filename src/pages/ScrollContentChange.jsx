import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { MarketAnalysis } from './MarketAnalysis';
import { Risk } from './Risk';
import { RiskTwo } from './RiskTwo';
import { RiskThree } from './RiskThree';

gsap.registerPlugin(ScrollTrigger);

const ScrollChangingContent = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const currentIndexRef = useRef(0); // Set to 0 for initial panel
  const animatingRef = useRef(false);
  const intentObserverRef = useRef(null);

  const contentComponents = [
    <MarketAnalysis key="market" />,
    <Risk key="risk" />,
    <RiskTwo key="risk2" />,
    <RiskThree key="risk3" />,
  ];

  useGSAP(() => {
    const panels = panelsRef.current;

    // Initial setup
    gsap.set(panels, {
      zIndex: (i) => i,
      opacity: (i) => (i === 0 ? 1 : 0),
    });

    function goToPanel(index, isScrollingDown) {
      const current = currentIndexRef.current;

      if (index < 0 || index >= panels.length) {
        if (isScrollingDown) intentObserverRef.current.disable();
        return;
      }

      animatingRef.current = true;

      const outgoing = panels[current];
      const incoming = panels[index];

      const tl = gsap.timeline({
        onComplete: () => {
          currentIndexRef.current = index;
          animatingRef.current = false;
        },
      });

      tl.to(outgoing, { opacity: 0, duration: 0.5 });
      tl.to(incoming, { opacity: 1, duration: 0.5 }, '<');

      // Reset all others to 0
      panels.forEach((panel, i) => {
        if (i !== index) gsap.set(panel, { opacity: 0 });
      });
    }

    // ScrollTrigger.observe
    const observer = ScrollTrigger.observe({
      type: 'wheel,touch',
      onUp: () =>
        !animatingRef.current && goToPanel(currentIndexRef.current + 1, true),
      onDown: () =>
        !animatingRef.current && goToPanel(currentIndexRef.current - 1, false),
      wheelSpeed: -1,
      tolerance: 10,
      preventDefault: true,
      onPress: (self) => {
        ScrollTrigger.isTouch && self.event.preventDefault();
      },
    });
    intentObserverRef.current = observer;
    observer.disable();

    // ScrollTrigger to pin and enable observer
    ScrollTrigger.create({
      trigger: containerRef.current,
      pin: true,
      start: 'top top',
      end: '+=1',
      onEnter: () => {
        observer.enable();
        goToPanel(currentIndexRef.current + 1, true);
      },
      onEnterBack: () => {
        observer.enable();
        goToPanel(currentIndexRef.current - 1, false);
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen flex justify-center items-center bg-white sticky top-0 overflow-hidden w-full"
    >
      {contentComponents.map((Component, i) => (
        <div
          key={i}
          ref={(el) => (panelsRef.current[i] = el)}
          className="absolute inset-0 w-full h-full"
        >
          {Component}
        </div>
      ))}
    </section>
  );
};

export default ScrollChangingContent;
