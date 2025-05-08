/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const menuRef = useRef(null);
  const subMenuRefs = useRef([]);

  // Toggle menu drawer visibility
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  // Scroll animations for sub-menu items
  const handleSubMenuClick = (i) => {
    setClicked(clicked === i ? null : i);
  };

  useEffect(() => {
    // GSAP animation for sliding menu
    gsap.to(menuRef.current, {
      x: isOpen ? '0%' : '-100%',
      duration: 0.3,
      ease: 'power3.out',
    });

    // GSAP animation for sub-menu visibility
    Menus.forEach((menu, index) => {
      const subMenu = subMenuRefs.current[index];
      if (subMenu) {
        gsap.to(subMenu, {
          height: clicked === index ? 'auto' : 0,
          opacity: clicked === index ? 1 : 0,
          duration: 0.2,
          ease: 'power3.out',
        });
      }
    });
  }, [isOpen, clicked, Menus]);

  return (
    <div>
      {/* Button for opening and closing the menu */}
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? (
          <span className="text-white">X</span>
        ) : (
          <span className="text-white">Menu</span>
        )}
      </button>

      {/* Side Menu */}
      <div
        ref={menuRef}
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isSubMenuVisible = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => handleSubMenuClick(i)}
                >
                  {name}
                  {hasSubMenu && (
                    <span
                      className={`ml-auto ${isSubMenuVisible && 'rotate-180'}`}
                      style={{ transition: 'transform 0.2s' }}
                    >
                      &#9660;
                    </span>
                  )}
                </span>

                {hasSubMenu && (
                  <ul
                    ref={(el) => (subMenuRefs.current[i] = el)}
                    className="ml-5 overflow-hidden"
                  >
                    {subMenu.map(({ name, icon }, index) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <span>{icon}</span>
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
