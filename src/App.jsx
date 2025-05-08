import ScrollZoom from './pages/ScrollZoom';
import Footer from './components/Footer.jsx';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  'Company Overview',
  'Market Analysis',
  'Why it Matters?',
  'When does it Matter?',
  'ROI',
  'Process & Timeline',
  'What to Expect?',
  'Execution Paths',
];

function App() {
  const navContainerRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (e, target) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.6,
      scrollTo: {
        y: `#${target}`,
        offsetY: 80,
      },
      ease: 'power2.out',
    });
    closeMobileMenu();
  };

  const formatId = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, 'and') // Replace & with 'and'
      .replace(/[^\w-]/g, ''); // Remove all non-word characters except hyphens

  return (
    <div className="max-w-full overflow-hidden">
      <>
        {/* Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 backdrop-blur-sm bg-black/40"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Navigation Container */}
        <div
          ref={navContainerRef}
          className="fixed top-4 inset-x-0 mx-2 sm:inset-x-6 z-50 transition-all duration-700 bg-[#07080de7] backdrop-blur rounded-full"
        >
          <header className="relative top-1/2">
            <nav className="flex h-[65px] md:h-[75px] items-center justify-between px-7 md:px-10">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="w-16 md:w-18"
                />
              </div>

              {/* Desktop Nav */}
              <div className="hidden 2xl:flex gap-10">
                {navItems.map((item, idx) => {
                  const targetId = formatId(item);
                  return (
                    <a
                      key={idx}
                      href={`#${targetId}`}
                      onClick={(e) => scrollToSection(e, targetId)}
                      className="relative text-xs uppercase text-white after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left dark:after:bg-blue-500"
                    >
                      {item}
                    </a>
                  );
                })}
              </div>

              {/* Burger Icon */}
              <button
                onClick={toggleMobileMenu}
                className="2xl:hidden relative w-6 h-6 z-50 flex flex-col justify-between items-center"
              >
                <span
                  className={`w-full h-1 bg-white rounded transition-transform duration-300  ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''
                  }`}
                />
                <span
                  className={`w-full h-1 bg-white rounded transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-1 bg-white rounded transition-transform duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </nav>
          </header>

          {/* Mobile Menu */}
          <div
            className={`h-[750px] justify-between mt-4 2xl:hidden absolute top-full left-0 w-full bg-[#07080de7] rounded-4xl py-8 flex flex-col items-start px-6 backdrop-blur-sm transform transition-all duration-300 ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <span className="border-b-2 w-full py-4 border-white/10 text-white text-xl font-bold">
              Table of Content
            </span>
            {navItems.map((item, idx) => {
              const targetId = formatId(item);
              return (
                <a
                  key={idx}
                  href={`#${targetId}`}
                  onClick={(e) => scrollToSection(e, targetId)}
                  className="text-white py-3 text-lg font-medium"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </>
      <ScrollZoom />
      <Footer />
    </div>
  );
}

export default App;
