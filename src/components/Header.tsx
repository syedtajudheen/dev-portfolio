import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import Image from 'next/image';

type HeaderProps = {
  onClickMenu: (section: string) => void;
};

export const Header = ({ onClickMenu }: HeaderProps) => {
  const handleResumeClick = () => {
    window.open("/Syed_Developer.docx", "_blank");
  };
  return (
    <HeaderWrapper>
      <Image src="/logo.svg" width={40} height={40} alt="Header logo" />
      <NavMenu>
        <MenuList className="flex flex-row gap-4">
          <Menu onClick={() => onClickMenu("about")}>About</Menu>
          <Menu onClick={() => onClickMenu("experience")}>Experience</Menu>
          <Menu onClick={() => onClickMenu("work")}>Work</Menu>
          <Menu onClick={() => onClickMenu("contact")}>Contact</Menu>
        </MenuList>
        <Button onClick={handleResumeClick}>Resume</Button>
      </NavMenu>

      <DrawerMenu>
        <BiMenuAltRight size={48} color={"var(--green)"} onClick={() => onClickMenu("drawer")}/>
      </DrawerMenu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  padding: 0 40px;

  @media(max-width: 768px) {
    padding-right: 20px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  @media(max-width: 768px) {
    display: none;
  }
`;

const DrawerMenu = styled.div`
  cursor: pointer;
  @media(min-width: 768px) {
    display: none;
  }
`;

const MenuList = styled.ol`
  display: flex;
  flex-direction: row;
  color: inherit;
  counter-reset: item;
  list-style: none;
  /* Apply counter to list items */
  & li::before {
    counter-increment: item;
    content: "0"counter(item) ". "; /* Adds dynamic numbering */
    font-weight: bold;
    color: var(--green);
  }
`;

const Menu = styled.li`
  padding: 0.5rem;
  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  margin-left: 24px;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 8px 16px;
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
