import brightnessWhite from "./components/Icons/brightnessWhite.svg";
import brightnessBlack from "./components/Icons/brightnessBlack.svg";

const breakpoint = {
  desktopMax: "1368px",
  ipod: "1024px",
  small: "767px",
  mini: "420px",
};

export const lightTheme = {
  icon: {
    brightnessIcon: brightnessWhite,
  },
  color: {
    background: "#FBFBFE", //whiteLilac
    backgroundCard: "#ffffff", //white:
    headers: "#252525", //black
    text: "#6E7E91", //slateGray
    horLine: "#D1D5DA", //iron
    additives: "#0366D6", //blue LM
    border: "rgba(209, 213, 218, 0.30)",
    brightnessSun: "#ffffff",
    brightnessIconBorder: "#6E7E91",
    labelBorder: "#6E7E91",
    labelBackground: "#E5E5E5",
    hoverborder: "rgba(3, 102, 214, 0.20)",
    activeBorder: "#0366D6",
    buttonText: "#ffffff", //white:
    spinner: "#252525", //black
  },
  breakpoint: breakpoint,
};

export const darkTheme = {
  icon: {
    brightnessIcon: brightnessBlack,
  },
  color: {
    background: "#252525", //black
    backgroundCard: "#363636", //darkgray
    headers: "#FFFFFF", //white
    text: "#FFFFFF", //white
    horLine: "#E5E5E5", //light gray
    additives: "#2188FF", //blue DM
    border: "rgba(209, 213, 218, 0.10)",
    brightnessSun: "#252525",
    brightnessIconBorder: "#FFF",
    labelBorder: "#FFFFFF",
    labelBackground: "rgba(54, 54, 54, 0.72)",
    activeBorder: "#0366D6",
    buttonText: "#ffffff", //white:
    spinner: "#252525", //black
    hoverborder: "rgba(3, 102, 214, 0.50)",
  },
  breakpoint: breakpoint,
};
