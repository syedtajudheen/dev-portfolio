import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type SideWidgetProps = {
  orientation: "left" | "right";
};

export const SideWidget = ({ orientation }: SideWidgetProps) => {

  if (orientation === "right") {
    return (
      <SideElement orientation="right">
        <EmailLink as="a" href="mailto:syedtajudheen@live.com">syedtajudheen@live.com</EmailLink>
      </SideElement>
    )
  }

  return (
    <SideElement orientation="left">
      <ListWrapper as="ul">
        <li><Link href="https://github.com/syedtajudheen" target="_blank" as="a"><FiGithub size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://www.instagram.com/syedtajudheen/" target="_blank" as="a"><FaInstagram size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://x.com/syedtajudheen" target="_blank" as="a"><FaXTwitter size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://www.linkedin.com/in/syed-tajudheen/" target="_blank" as="a"><FiLinkedin size={20} color="var(--light-slate)" /></Link></li>
      </ListWrapper>
    </SideElement>
  )
}

const SideElement = styled.div<SideWidgetProps>`
  ${({ orientation }) => `
    position: fixed;
    ${orientation}: 0;
    ${orientation}: 20px;
    bottom: 0px;
    width: 50px;
    background-color: transparent;
    text-align: center;
    
  `}

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  @media(max-width: 770px) {
    display: none;
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100%;
  padding-bottom: 32px;
`;

const Link = styled.a`
  color: var(--light-slate);
  cursor: pointer;

  & svg:hover {
    color: var(--green) !important;
  }
`;

const EmailLink = styled(Link)`
  margin: 8px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  color: var(--light-slate);
  cursor: pointer;

  &:hover {
    color: var(--green);
  }
`;
