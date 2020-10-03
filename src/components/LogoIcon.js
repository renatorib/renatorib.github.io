import React from "react";

import normalIconLogo from "~/images/icon-logo.png";
import blackIconLogo from "~/images/icon-logo-outline.png";
import whiteIconLogo from "~/images/icon-logo-outline-white.png";

export const LogoIcon = ({ size = 80, type = "color" }) => {
  let url = "";

  switch (type) {
    case "white":
      url = whiteIconLogo;
      break;
    case "black":
      url = blackIconLogo;
      break;
    case "color":
    default:
      url = normalIconLogo;
  }

  return <img src={url} alt="" css={{ width: size }} />;
};
