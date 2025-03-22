import styled from "styled-components";
import { X } from "lucide-react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onClickMenu: (id: string) => void;
};

export const Drawer = ({ isOpen, onClose, onClickMenu }: DrawerProps) => {
  const handleResumeClick = () => {
    window.open("/Syed_Developer.docx", "_blank");
  };
  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <DrawerContainer isOpen={isOpen}>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </div>
        <MenuList>
          <Menu onClick={() => onClickMenu("about")}>About</Menu>
          <Menu onClick={() => onClickMenu("experience")}>Experience</Menu>
          <Menu onClick={() => onClickMenu("work")}>Work</Menu>
          <Menu onClick={() => onClickMenu("contact")}>Contact</Menu>
        </MenuList>
        <Button onClick={handleResumeClick}>Resume</Button>
      </DrawerContainer>
    </>
  );
};


const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 40;
  cursor: pointer;
`;

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 70%;
  background: var(--light-navy);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.ol`
  display: flex;
  flex-direction: column;
  color: inherit;
  counter-reset: item;
  list-style: none;
  font-family: var(--font-mono);
  margin: 36px 0;
  /* display: none; */
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
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 8px 16px;
  background-color: transparent;
  color: var(--green);
  cursor: pointer;

  &:hover {
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
`;
