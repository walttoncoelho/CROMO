import React from "react";
import { ButtonWhats } from "./Style";

import logoImg from "./img/contact-floating.svg";

export default function Whats() {
  return (
    <>
      <ButtonWhats>
        <a href="/">
          <img src={logoImg} alt="logo" />
        </a>
      </ButtonWhats>
    </>
  );
}
