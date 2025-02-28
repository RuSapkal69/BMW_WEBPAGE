import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["HighLights", "Models", "Stories", "Specs", "Film"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "M TwinPower Turbo.",
        "Precision engineering.",
        "Unmatched performance."
      ],
      video: highlightFirstVideo,
      videoDuration: 10,
    },
    {
      id: 2,
      textLists: [
        "Carbon fiber mastery.",
        "Lighter.", 
        " Stronger.", 
        " Faster."
      ],
      video: highlightSecondVideo,
      videoDuration: 30,
    },
    {
      id: 3,
      textLists: [
        "The most powerful M ever.",
        "A masterpiece of speed and precision."
      ],
      video: highlightThirdVideo,
      videoDuration: 6,
    },
    {
      id: 4,
      textLists: [
        "Immersive ambiance.",
        "Unrivaled comfort. Ultimate luxury.",        
        "Where performance meets elegance."
      ],
      video: highlightFourthVideo,
      videoDuration: 28,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];