import styled from "styled-components";
import { SectionHeader } from "./SectionHeader"
import { ExternalLink } from "lucide-react";
import { SectionRefs } from "@/app/page";

const projects = [
  {
    title: "Straight2Bank",
    description: "The Straight2Bank Lending and Quick Invoice modules simplify loan management and invoicing. Lending enables easy loan applications and tracking, while Quick Invoice streamlines invoice creation and payment management, both ensuring seamless integration and real-time updates.",
    link: "https://s2b.standardchartered.com/",
    isFeatured: true,
    skills: ["React", "Redux", "Micro-frontend", "Styled-components", "Node.js"]
  },
  {
    title: "LexisCreate",
    description: "I worked on the beta version of LexisCreate, platform designed to simplify document creation and management. The platform enables users to generate, edit, and organize legal documents efficiently, with seamless integration and intuitive workflows, improving overall accuracy and productivity.",
    link: "https://www.lexisnexis.com/en-us/products/lexis-create-plus.page?srsltid=AfmBOoq75F5bv7erYuC1shdlVVTht24P-RG0a7sseR0JzlhqKbI3PxkE",
    isFeatured: false,
    skills: ["React", "Redux", "SCSS"]
  },
  {
    title: "Robert Koch Institute(RKI)",
    description: "At the Robert Koch Institute, I contributed to a knowledge-sharing platform that enables German institutions and international partners in health protection to collaborate, exchange information on events and projects, and strengthen response capabilities for public health emergencies.",
    link: "https://www.rki.de/EN/Home/homepage_node.html",
    isFeatured: false,
    skills: ["React", "Next.js", "Redux", "TailwindCSS", "Node.js"]
  },
  {
    title: "WHO - World Malaria Toolkit",
    description: "The World Malaria Toolkit is a comprehensive platform designed to support global efforts in malaria control and elimination. It provides access to data, resources, and tools for researchers, policymakers, and healthcare professionals, facilitating collaboration and informed decision-making in the fight against malaria.",
    link: "https://play.google.com/store/apps/details?id=uk.co.adappt.adapptlabs.who.malaria&utm_source=na_Med",
    isFeatured: false,
    skills: ["React Native", "React", "Redux"]
  },
  {
    title: "WHO - GTFCC Cholera",
    description: "The GTFCC Cholera app is a specialized tool developed to aid in the global fight against cholera. It provides real-time data, resources, and guidelines for healthcare professionals and public health officials, enhancing surveillance, response, and coordination efforts in cholera-endemic regions.",
    link: "https://play.google.com/store/apps/details?id=com.cholera",
    isFeatured: false,
    skills: ["React Native", "React", "Redux"]
  },
  {
    title: "WHO TB Guide",
    description: "The WHO TB Guide app is a comprehensive resource for healthcare professionals, providing essential information, guidelines, and tools to support the diagnosis, treatment, and management of tuberculosis (TB) cases worldwide.",
    link: "https://play.google.com/store/apps/details?id=com.whotbksp",
    isFeatured: false,
    skills: ["React Native", "React", "Redux"]
  },
  {
    title: "WHO Road Safety",
    description: "The WHO Road Safety app is a vital tool aimed at promoting road safety awareness and education. It offers users access to guidelines, best practices, and resources to help reduce road traffic injuries and fatalities, supporting global efforts to improve road safety.",
    link: "https://play.google.com/store/apps/details?id=uk.co.adappt.whoroadsafety&hl=en_US",
    isFeatured: false,
    skills: ["React Native", "React", "Redux"]
  }
];

type WorkProps = {
  ref: React.RefObject<SectionRefs>;
};

export const Work = ({ ref }: WorkProps) => {

  const renderProjects = () => {
    return projects.map((project) => (
      <Project key={project.title} onClick={() => window.open(project.link, "_blank")}>
        <div className="flex justify-between w-full">
          <div>
            {project.isFeatured && <FeaturedText>Featured Project</FeaturedText>}
            <ProjectTitle>{project.title}</ProjectTitle>
          </div>

          <ExternalLink size={20} color="white" />
        </div>
        <p>{project.description}</p>

        <footer>
          <Skills>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}{"  "}</li>
            ))}
          </Skills>
        </footer>
      </Project>
    ));
  };

  return (
    <Section ref={(el) => { ref.current["work"] = el as HTMLDivElement; }}>
      <SectionHeader count={3}>Projects I’ve Worked On</SectionHeader>

      <GridWrapper>
        {renderProjects()}
      </GridWrapper>
    </Section>
  )
};

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.75;
  color: var(--slate);
  margin: 15px 0;
  li {
    margin-right: 15px;
  }
`;

const Section = styled.section`
  padding: 80px 150px;


  @media(min-width: 1080px) {
    padding: 0;
  }

  @media(max-width: 1080px) {
    padding: 0 24px 100px 24px;
  }

  @media(max-width: 768px) {
    padding: 0 24px 100px 24px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  font-family: var(--font-sans);

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedText = styled.label`
  margin-bottom: 10px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;

const ProjectTitle = styled.h3`
  margin: 5px 0px;
  font-size: 28px;
  font-weight: 600;
  color: var(--lightest-slate);
  font-family: var(--font-sans);
  line-height: 1.2;
  margin-bottom: 10px;
  margin-top: 5px;
  &:hover {
    color: var(--green);
    transition: var(--transition);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: var(--fz-xl);
  }
`;

const Project = styled.div`
  background-color: var(--light-navy);
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  /* height: 300px; */
  width: 100%;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  p {
    color: var(--light-slate);
  }
`;
