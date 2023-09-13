import About from "../../components/molecule/About/About";
import ricardo from "../../assets/rick-large.jpeg"
import julia from "../../assets/julia-large.jpeg"
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
        profilePicture={julia}
      />
      <About
        name="Ricardo Nozaki"
        jobTitle="Frontend and Business Developer"
        about="“I am a Production Engineer with skills in Frontend Development. I build Frontend interfaces while also engaging with clients, continually striving for enhanced processes and results. Always seeking to improve my knowledge and appling my skills in challenging and diversified projects, contributing to the success of the company with quality results.”"
        linkedin="https://www.linkedin.com/in/ricardo-nozaki-2870b5189/"
        github="https://github.com/Rickazuo"
        website="https://rickazuo.github.io/portfolio/"
        profilePicture={ricardo}
        left
      />

    </S.Container>
  );
}
