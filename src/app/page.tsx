"use client";
// import { style } from "framer-motion/client";
import { Header } from "../components/Header";
import styled from "styled-components";
import Hero from "@/components/Hero";
import { SideWidget } from "@/components/SideElement";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="grid grid-rows-[100px_1fr_20px]  min-h-screen gap-16">
      <Header />
      <SideWidget orientation="left" />
      <SideWidget orientation="right" />
      <MainContainer>
        <Hero />
        <AboutMe />
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
