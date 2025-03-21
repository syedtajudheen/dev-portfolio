import styled from "styled-components";

const Hero = () => {
  return (
    <HeroSection>
      <h1>Hi, my name is</h1>
      <h2>Syed Tajudheen.</h2>
      <h3>I build things for the web.</h3>

      <Description>
        I’m a software engineer crafting accessible, human-centered digital experiences. I specialize in building seamless, high-performing web and mobile applications where design meets innovation.
      </Description>
    </HeroSection>
  );
}

export default Hero;


const Description = styled.p`
  margin: 20px 0px 0px;
  max-width: 540px;
  font-family: var(--font-sans);
  font-size: var(--fz-xl);
  color: var(--slate);
`;

const HeroSection = styled.section`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

   h1 {
    margin: 20px 0px 30px 4px;
    color: var(--green);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-family: var(--font-mono);
  }

  h2 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px); // (min, preferred, max)
    font-weight: 600;
    font-family: var(--font-sans);
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    font-size: clamp(40px, 8vw, 80px); // (min, preferred, max)
    font-family: var(--font-sans);
    font-weight: 600;
    line-height: 0.9;
  }
`;
