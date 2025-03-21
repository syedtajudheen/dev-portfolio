import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {

  return (
    <FooterWrapper>
      <ListWrapper as="ul">
        <li><Link href="https://github.com/syedtajudheen" target="_blank" as="a"><FiGithub size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://www.instagram.com/syedtajudheen/" target="_blank" as="a"><FaInstagram size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://x.com/syedtajudheen" target="_blank" as="a"><FaXTwitter size={20} color="var(--light-slate)" /></Link></li>
        <li><Link href="https://www.linkedin.com/in/syed-tajudheen/" target="_blank" as="a"><FiLinkedin size={20} color="var(--light-slate)" /></Link></li>
      </ListWrapper>

      <FooterText>Built by Syed Tajudheen</FooterText>
    </FooterWrapper>

  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.div`
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  text-align: center;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-bottom: 24px;
  display: none;

  @media(max-width: 768px) {
    display: flex;
  }
`;

const Link = styled.a`
  color: var(--light-slate);
  cursor: pointer;

  & svg:hover {
    color: var(--green) !important;
  }
`;
