import styled from "styled-components";
import Image from 'next/image'
import { SectionHeader } from "./SectionHeader";
import { SectionRefs } from "@/app/page";

type AboutMeProps = {
  ref: React.RefObject<SectionRefs>;
};

export const AboutMe = ({ ref }: AboutMeProps) => {
  return (
    <Section ref={(el) => { ref.current["about"] = el as HTMLDivElement; }}>
      <SectionHeader count={1} >About Me</SectionHeader>
      <Wrapper>
        <AboutDescription>
          <p>Hey! I’m Syed Tajudheen, a software engineer who loves building intuitive, performant, and scalable web applications. My expertise lies in crafting seamless frontend experiences with React.js, but I also enjoy architecting scalable backend solutions when needed.</p>
          <p>Fast-forward to today, and I’ve had the privilege of working on <a href="https://s2b.standardchartered.com/" target="_blank">enterprise applications</a>, <a href="https://s2b.standardchartered.com/" target="_blank">fintech platforms</a>, <a href="https://www.adappt.co.uk/" target="_blank">startups</a>, and internal tooling. My main focus these days is developing scalable, high-performance web applications using React, Redux, and GraphQL, while also contributing to Micro Frontend architecture, UI component libraries, and monorepo-based projects.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <SkilslList>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>React Native</li>
            <li>Node.js</li>
          </SkilslList>
        </AboutDescription>

        <ImageWrapper>
          <Image
            src="/profile2.webp"
            width={300}
            height={300}
            alt="My Image"
          />
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutMe;

const Section = styled.section`
  padding: 0 0 120px 0;

  @media(max-width: 1080px) {
    padding: 0 24px 100px 24px;
  }

  @media(max-width: 768px) {
    padding: 0 24px 100px 24px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 300px;

  img {
    /* filter: sepia(0.5) hue-rotate(130deg) saturate(0.5); */
    transition: 0.3s ease-in-out;
    border-radius: var(--border-radius);
  }

  & img:hover {
    filter: none;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 50px auto 0px;
    width: 70%;
  }
`;

const SkilslList = styled.ul`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--slate);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  
   & li::before {
    content: "▹";
    /* position: absolute; */
    /* left: 0px; */
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
    padding-right: 16px;
   }
`;

const AboutDescription = styled.div`
  p {
    font-family: var(--font-sans);
    font-size: var(--fz-lg);
    color: var(--slate);

    a {
      color: var(--green);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    margin-bottom: 16px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > div:first-child {
    p {
      font-size: var(--fz-lg);
      font-family: var(--font-sans);
      color: var(--slate);
      margin: 0px;
      line-height: 1.6;
      max-width: 540px;
      margin-bottom: 32px;
    }
  }
  & > div:last-child {
    width: 100%;
  }
`;
