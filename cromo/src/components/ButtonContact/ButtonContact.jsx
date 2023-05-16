import React, { useState, useEffect } from "react";

/* import logoImg from "./img/contact-floating.svg"; */
import {BtnContact} from "./Style";

export default function ButtonContact() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolling =
      window.scrollY >= (document.body.scrollHeight - window.innerHeight) / 2;
    setIsScrolled(isScrolling);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
  <BtnContact className={isScrolled ? "scrolled" : ""}>
        <a href="https://api.whatsapp.com/send?phone=5599992239558&fbclid=PAAaYzfGzqThcHiUYgs-pacqQkZwBOkyY6DhYptY2nQVo2lehJjUjlDPUolJ0" target="_Blanck">
{/*           <img src={logoImg} alt="logo" /> */}
          <svg width="82" height="76" viewBox="0 0 82 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.30768 0H75.6922C77.3651 0 78.9695 0.66726 80.1524 1.85499C81.3353 3.04272 81.9999 4.65363 81.9999 6.33333V69.6667C82.007 70.8738 81.6671 72.0574 81.021 73.0755C80.3749 74.0936 79.45 74.9028 78.3572 75.4063C77.5222 75.7955 76.6129 75.9981 75.6922 76C74.2115 75.9965 72.7798 75.4664 71.6513 74.5038C71.6325 74.4914 71.6153 74.4768 71.6001 74.4602L58.9374 63.3333H6.30768C4.63478 63.3333 3.0304 62.6661 1.84748 61.4783C0.664559 60.2906 4.40301e-07 58.6797 4.40301e-07 57V6.33333C4.40301e-07 4.65363 0.664559 3.04272 1.84748 1.85499C3.0304 0.66726 4.63478 0 6.30768 0ZM6.30768 57H58.9374C60.4228 56.9993 61.8608 57.525 62.998 58.4844L63.0453 58.5279L75.6922 69.6667V6.33333H6.30768V57ZM56.7692 25.3333C56.7692 24.4935 56.4369 23.688 55.8454 23.0942C55.254 22.5003 54.4518 22.1667 53.6153 22.1667H28.3846C27.5481 22.1667 26.7459 22.5003 26.1545 23.0942C25.563 23.688 25.2307 24.4935 25.2307 25.3333C25.2307 26.1732 25.563 26.9786 26.1545 27.5725C26.7459 28.1664 27.5481 28.5 28.3846 28.5H53.6153C54.4518 28.5 55.254 28.1664 55.8454 27.5725C56.4369 26.9786 56.7692 26.1732 56.7692 25.3333ZM56.7692 38C56.7692 37.1601 56.4369 36.3547 55.8454 35.7608C55.254 35.167 54.4518 34.8333 53.6153 34.8333H28.3846C27.5481 34.8333 26.7459 35.167 26.1545 35.7608C25.563 36.3547 25.2307 37.1601 25.2307 38C25.2307 38.8399 25.563 39.6453 26.1545 40.2392C26.7459 40.833 27.5481 41.1667 28.3846 41.1667H53.6153C54.4518 41.1667 55.254 40.833 55.8454 40.2392C56.4369 39.6453 56.7692 38.8399 56.7692 38Z" />
</svg>
        </a>

  </BtnContact>

    </>
  );
}
