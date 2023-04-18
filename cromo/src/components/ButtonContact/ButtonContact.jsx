import React, { useState, useEffect } from "react";

import logoImg from "./img/contact-floating.svg";
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
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>

  </BtnContact>

    </>
  );
}
