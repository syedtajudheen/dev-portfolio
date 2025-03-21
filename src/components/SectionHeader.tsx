import styled from "styled-components";

type SectionHeaderProps = {
  count: number;
  children: React.ReactNode;
};

export const SectionHeader = ({ count, children }: SectionHeaderProps) => {
  return (
    <Header count={count} >{children}</Header>
  );
}


const Header = styled.h2<{ count: number }>`
  font-size: var(--fz-heading);
  font-weight: 600;
  font-family: var(--font-sans);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  &::before {
    position: relative;
    bottom: 4px;
    content: ${({ count }) => `"0${count}."`};
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