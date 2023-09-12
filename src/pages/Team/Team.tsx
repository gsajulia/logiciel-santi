import About from "../../components/molecule/About/about";
import * as S from "./Team.styles";

export default function Team() {
  return (
    <S.Container>
      <About
        name="Julia Santi"
        jobTitle="Sênior Frontend Developer"
        about="“I am a Frontend Engineer with 5 years of experience in the software development industry. My primary focus has been on building robust and efficient user interfaces using React and Typescript. However, I have also worked on backend development and data science projects. I have a passion for teaching and mentoring others, which has given me the opportunity to share my experience and helping other developers grow their skills.”"
        linkedin="https://www.linkedin.com/in/julia-gabriela-santi-acosta/"
        github="https://github.com/gsajulia"
        website="https://gsajulia.github.io/"
      />
    </S.Container>
  );
}
