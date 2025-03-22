"use client";
// import { style } from "framer-motion/client";
import { Header } from "../components/Header";
import styled from "styled-components";
import Hero from "@/components/Hero";
import { SideWidget } from "@/components/SideElement";
import AboutMe from "@/components/AboutMe";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { useRef } from "react";

export type SectionRefs = {
  [key: string]: HTMLDivElement | null;
};

const sectionRefs: SectionRefs = {
  about: null,
  experience: null,
  work: null,
  contact: null
};

export default function Home() {
  const ref = useRef<SectionRefs>(sectionRefs);

  const handleMenuClick = (section: string) => {
    if (ref.current[section]) {
      ref.current[section]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="grid grid-rows-[100px_1fr_20px]  min-h-screen gap-16">
      <Header onClickMenu={handleMenuClick} />
      <SideWidget orientation="left" />
      <SideWidget orientation="right" />
      <MainContainer>
        <Hero />
        <AboutMe ref={ref} />
        <Experience ref={ref} />
        <Work ref={ref} />
        <Contact ref={ref} />
      </MainContainer>
      {/* <div className="text-white">Footer</div> */}
    </div>
  );
}

const MainContainer = styled.main`
  padding: 0px 150px;
  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
`;
