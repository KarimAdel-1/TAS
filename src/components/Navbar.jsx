import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  'About',
  'Contact',
  'Contact',
  'Contact',
  'Contact',
  'Contact',
  'Contact',
  'Contact',
  'Contact',
];

const NavBar = () => {
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

  return (
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
              <img src="/assets/logo.png" alt="logo" className="w-16 md:w-18" />
              <span className="hidden md:block w-px h-6 bg-white" />
              <div className="hidden md:flex flex-col">
                <h1 className="text-white text-xs font-bold">
                  Accelerating Ideas,
                </h1>
                <p className="text-white text-xs font-bold">
                  Elevating Brands.
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex gap-10">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-xs uppercase text-blue-100 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left dark:after:bg-blue-500"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Burger Icon */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden relative w-6 h-6 z-50 flex flex-col justify-between items-center"
            >
              <span
                className={`w-full h-1 bg-white rounded transition-transform duration-300 ${
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
          className={`mt-4 md:hidden absolute top-full left-0 w-full bg-[#07080de7] rounded-4xl py-8 flex flex-col items-center backdrop-blur-sm transform transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-white py-3 text-lg font-medium"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
