import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
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
  };

  const formatId = (str) =>
    str
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, 'and') // Replace & with 'and'
      .replace(/[^\w-]/g, ''); // Remove all non-word characters except hyphens

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'Company Overview' },
        { label: 'Market Analysis' },
        { label: 'Why it Matters?' },
        { label: 'When does it Matter?' },
        { label: 'ROI' },
        { label: 'Process & Timeline' },
        { label: 'What to Expect?' },
        { label: 'Execution Paths' },
      ],
    },
    {
      title: 'Follow us',
      links: [
        {
          icon: <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-2xl" />,
          href: 'https://www.linkedin.com/in/sherif-beily/',
        },
      ],
    },
  ];

  return (
    <footer className="w-screen bg-[#090B17] py-4 text-white">
      <div className="w-full lg:w-4/5 mx-auto text-center">
        <div className="flex text-black gap-6 md:gap-25 mx-auto my-5 md:mt-36 px-4 md:px-0 flex-col md:flex-row justify-between items-center md:items-start">
          <img
            loading="lazy"
            src="/assets/footerLogo.png"
            alt="sherif logo"
            className="object-contain shrink-0 self-start aspect-square md:aspect-auto w-[200px] md:w-[300px]"
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-y-5 justify-between w-full">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col items-start">
                <h3
                  className="text-sm md:text-base lg:text-lg xl:text-xl
 text-white/60 uppercase mb-3 font-mono"
                >
                  {section.title}
                </h3>
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="mt-2">
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base lg:text-lg xl:text-xl
 font-mono text-white flex items-center gap-2 pb-1 w-fit"
                      >
                        {link.icon && link.icon}
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={`#${formatId(link.label)}`}
                        onClick={(e) =>
                          scrollToSection(e, formatId(link.label))
                        }
                        className="text-sm md:text-base lg:text-lg xl:text-xl
 font-mono text-white flex items-center gap-2 pb-1 w-fit cursor-pointer"
                      >
                        {link.icon && link.icon}
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-evenly w-full text-[11px] md:gap-10 md:justify-between md:text-sm flex-col gap-2 border-t border-white/10 pt-4 mt-4">
          <p
            className="my-auto text-sm md:text-base lg:text-lg xl:text-xl
 text-white/60 font-mono uppercase"
          >
            Copyright © 2025 Beily Design Consultancy. All rights reserved.
          </p>
          <a
            className="text-white/60 font-mono cursor-pointer uppercase text-sm md:text-base lg:text-lg xl:text-xl
"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
