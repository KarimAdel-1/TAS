const socialIcons = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27a0dcb3c08a59f3cc341071ab9695b3f4bc6894fef99ef441665e79970b01ba?placeholderIfAbsent=true&apiKey=922758b62aff4e588ac22362938fa23b',
    alt: 'Facebook',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9d4b3d770ce614033047fbd18ff3f3535658cf45f86ecc0ef34de0f4b3934d33?placeholderIfAbsent=true&apiKey=922758b62aff4e588ac22362938fa23b',
    alt: 'Twitter',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/45a3f68a9633e395a2e66c7af3c49bb124211135786b364493b9b940daa7b484?placeholderIfAbsent=true&apiKey=922758b62aff4e588ac22362938fa23b',
    alt: 'Instagram',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c0646f1c7cf3adb919f9dd62ad45abecf102a1e82b4de967b9e522c2a5a86b11?placeholderIfAbsent=true&apiKey=922758b62aff4e588ac22362938fa23b',
    alt: 'LinkedIn',
  },
];

const footerSections = [
  {
    title: 'Explore',
    links: [
      'Home',
      'Features',
      'Contact',
      'FAQs',
      'About',
      'Privacy Policy',
      'Terms of Service',
      'Blog',
      'Careers',
    ],
  },
  {
    title: 'Follow us',
    links: ['Facebook', 'X', 'Linkedin', 'Instagram'],
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#090B17] py-4 text-white">
      <div className="w-full lg:w-4/5 mx-auto text-center">
        <div className="flex text-black gap-6 md:gap-25 mx-auto my-5 md:mt-36 px-4 md:px-0 flex-col md:flex-row justify-between items-center md:items-start ">
          <img
            loading="lazy"
            src="/assets/footerLogo.png"
            alt="sherif logo"
            className="object-contain shrink-0 self-start aspect-square md:aspect-auto w-[200px] md:w-[300px]  "
          />
          <div className="grid grid-cols-2 grid-rows-2 gap-y-5 justify-between w-full">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col items-start">
                <h3 className="font-general text-xs md:text-xl text-white/60 uppercase mb-3 font-mono">
                  {section.title}
                </h3>
                {section.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="mt-2">
                    <a href="#" className="md:text-lg font-mono text-white">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-evenly w-full text-[10px] md:gap-10 md:justify-between md:text-sm">
          <p className="my-auto text-white/60 font-mono uppercase">
            Beily™ 2025. All Rights Reserved
          </p>
          <a className=" my-auto text-white/60 font-mono cursor-pointer uppercase">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
