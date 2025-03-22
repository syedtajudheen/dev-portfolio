import styled from "styled-components";
import { SectionRefs } from "@/app/page";

type ContactProps = {
  ref: React.RefObject<SectionRefs>;
};

export const Contact = ({ ref }: ContactProps) => {
  return (
    <Section  ref={(el) => { ref.current["contact"] = el as HTMLDivElement; }}>
    <Header>What’s Next?</Header>
    <Title>Get In Touch</Title>
      <p>I’m open to new opportunities, especially ambitious projects. Feel free to reach out—I’ll do my best to respond!</p>
      <a href="mailto:syedtajudheen@live.com"><Button>Say Hello</Button></a>

    </Section>
  )
};

const Section = styled.section`
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;
  gap: 16px;

  @media(max-width: 768px) {
    padding: 0 24px 100px 24px;
  }
  @media (min-width: 1080px) {
    padding: 80px 100px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: var(--lightest-slate);
    font-family: var(--font-sans);
    margin-bottom: 16px;
    @media (max-width: 786px) {
      font-size: 18px;
    }
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    &:visited {
      color: inherit;
      text-decoration: none;
    }
    &:active {
      color: inherit;
      text-decoration: none;
    }
    &:link {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Title = styled.h4`
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: var(--font-sans);
`;

const Button = styled.button`
  padding: 1.25rem 1.75rem;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  background-color: transparent;
  color: var(--green);
  font-family: var(--font-mono);
  cursor: pointer;

  &:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
`;

const Header = styled.h2`
  color: var(--green);
  font-size: var(--fz-md);
  font-weight: 600;
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  
  &::before {
    position: relative;
    content: "04.";
    margin-right: 10px;
    font-size: var(--fz-sm);
    font-weight: 400;
  }
`;