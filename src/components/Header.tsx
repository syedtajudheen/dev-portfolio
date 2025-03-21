import styled from "styled-components";

export const Header = () => {
  return (
    <div className="w-full flex flex-row justify-end items-center text-[13px] font-[family-name:var(--font-mono)] px-12">
      <MenuList className="flex flex-row gap-4">
        <Menu>About</Menu>
        <Menu>Experience</Menu>
        <Menu>Work</Menu>
        <Menu>Contact</Menu>
      </MenuList>
      <Button>Resume</Button>
    </div>
  );
};

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
  &:hover {
    color: var(--green);
    cursor: pointer;
  }
`;
