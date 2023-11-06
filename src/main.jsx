import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";

import Content2 from "./Components/Content2";
import SecondPage from "./Components/SecondPage";
import HeroSection from "./Components/HeroSection";
import MemberOnly from "./Components/MemberOnly";
import AudioVideo from "./Components/AudioVideo";
import Email from "./Components/Email";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Content />

    <SecondPage />
    <Content2 />
    <HeroSection />
    <MemberOnly />
    <AudioVideo />
    <Email />
  </React.StrictMode>
);
