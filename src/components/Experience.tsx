import { useMemo, useState } from "react";
import styled from "styled-components";
import { SectionHeader } from "./SectionHeader";
import { SectionRefs } from "@/app/page";

const data = [
  {
    id: 0,
    title: "Standard Chartered",
    fullTitle: "Standard Chartered Bank",
    role: "Development Lead",
    description: "Worked as a Software Engineer",
    duration: "Feb 2022 – March 2025",
    desccriptionPoints: [
      "Developed and enhanced critical modules like Lending and Quick Invoice, improving efficiency and user experience for business banking.",
      "Implemented Micro Frontend architecture, enabling modular and independent deployments within the Straight2Bank ecosystem.",
      "Designed and maintained reusable UI components and contributed to the internal UI component library, ensuring consistency across products.",
      "Optimized application performance through code-splitting, lazy loading, and API integrations, leading to faster load times and a smoother user experience.",
      "Collaborated with cross-functional teams, including designers, backend engineers, and product managers, to build scalable and user-friendly banking solutions."
    ],
    url: "https://www.sc.com/en/"
  },
  {
    id: 1,
    title: "Adappt",
    fullTitle: "Adappt Mobile Cloud Applications Pvt Ltd",
    description: "Worked as a Software Engineer",
    role: "Senior Software Engineer",
    duration: "March 2017 - Feb 2022",
    desccriptionPoints: [
      "Built a React Native mobile app for World Health Organization (WHO), delivering seamless experiences across iOS and Android platforms.",
      "Developed a React.js based add-in for LexisNexis, enhancing the functionality and user experience within their platform.",
      "Built a web application for Robert Koch Institute (RKI) using Next.js, optimizing performance, and server-side rendering for better user engagement.",
      "Collaborated with cross-functional teams, ensuring smooth integrations, user-friendly UI/UX, and high-quality code.",
      "Implemented modern frontend practices, focusing on scalability, performance, and maintainability across multiple projects."
    ],
    url: "https://www.adappt.co.uk/"
  }
];

type ExperienceProps = {
  ref: React.RefObject<SectionRefs>;
};

export const Experience = ({ ref }: ExperienceProps) => {
  const [selectedTab, setSelectedTab] = useState(data[0]?.id);

  const info = useMemo(() => {
    return data.find((item) => item.id === selectedTab);
  }, [selectedTab]);

  const handleTabClick = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <Section ref={(el) => { ref.current["experience"] = el as HTMLDivElement; }}>
      <SectionHeader count={2}>Where I’ve Worked</SectionHeader>
      <GridWrapper>
        <TabList>
          {data.map(({ id, title }) => (
            <Button key={id} isActive={selectedTab === id} onClick={() => handleTabClick(id)}>
              {title}
            </Button>
          ))}
        </TabList>
        <TabView>
          <h3>{info?.role} <a href={info?.url} target="_blank">@ {info?.fullTitle}</a></h3>
          <Duration>{info?.duration}</Duration>
          <DescriptionList>
            {info?.desccriptionPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </DescriptionList>
        </TabView>
      </GridWrapper>
    </Section>
  )
};

const Duration = styled.p`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--light-slate);
  margin: 5px 0 24px 0;
  line-height: 1.5;
`;

const DescriptionList = styled.ul`
  list-style-type: none;
  color: var(--slate);
  font-family: var(--font-sans);
  font-size: var(--fz-lg);
  line-height: 1.25;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
  }

  li::before {
    content: '▹';
    position: absolute;
    left: 0;
    top: 2px;
    color: var(--green);
    font-size: var(--fz-sm);
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 2fr;
  column-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 20px;      
  }
`;

const Section = styled.section`
  padding: 100px 0;

  a {
    color: var(--green);
    text-decoration: none;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button<{ isActive: boolean }>`
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: var(--transition);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0px 20px 2px;
  border-left: 2px solid ${({ isActive }) => isActive ? "var(--green)" : "var(--lightest-navy)"};
  background-color: transparent;
  color: ${({ isActive }) => isActive ? "var(--green)" : "var(--slate)"};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: var(--light-navy);
  }
`;

const TabView = styled.div`
  h3 {
    font-size: var(--fz-xxl);
  }
`;
