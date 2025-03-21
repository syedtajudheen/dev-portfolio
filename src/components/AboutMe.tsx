import styled from "styled-components";
import Image from 'next/image'

export const AboutMe = () => {
  return (
    <Section>
      <Header>About Me</Header>
      <Wrapper>
        <AboutDescription>
          <p>Hey! I’m Syed Tajudheen, a software engineer who loves building intuitive, performant, and scalable web applications. My expertise lies in crafting seamless frontend experiences with React.js, but I also enjoy architecting scalable backend solutions when needed.</p>
          <p>Fast-forward to today, and I’ve had the privilege of working on enterprise applications, <a href="https://www.sc.com/en/">fintech platforms</a>, <a href="https://www.adappt.co.uk/">startups</a>, and internal tooling. My main focus these days is developing scalable, high-performance web applications using React, Redux, and GraphQL, while also contributing to Micro Frontend architecture, UI component libraries, and monorepo-based projects.</p>
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

        <ImageWrapper className="">
          <Image
            src="/profile2.webp"
            width={500}
            height={500}
            alt="My Image"
          />
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
};

export default AboutMe;

const Section = styled.section`
`;

const ImageWrapper = styled.div`
  img {
    /* filter: sepia(0.5) hue-rotate(130deg) saturate(0.5); */
    transition: 0.3s ease-in-out;
    border-radius: var(--border-radius);
  }

  & img:hover {
    filter: none;
    transition: 0.3s ease-in-out;
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
      color: varr(--green);
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
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;
  @media (max-width: 1080px) {
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

    @media (max-width: 1080px) {
      margin-top: 32px;
      width: 100%;
      height: 300px;
    }
    @media (max-width: 600px) {
      height: 200px;
      width: 100%;
      margin-top: 16px;
    }
  }
`;

const Header = styled.h2`
  font-size: var(--fz-heading);
  font-weight: 600;
  font-family: var(--font-sans);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  &::before {
    position: relative;
    bottom: 4px;
    content: "01.";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }
  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 1px;
    background-color: var(--lightest-navy);
    margin-left: 10px;
    margin-top: 4px;
  }
`;