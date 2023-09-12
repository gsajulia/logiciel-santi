import * as S from "./About.styles";
import linkedinIcon from "../../../assets/linkedin.svg"
import githubIcon from "../../../assets/github.svg"
import { Link } from "react-router-dom";

type TAbout = {
  name: string;
  jobTitle: string;
  about: string;
  linkedin: string;
  github: string;
  website: string;
};

export default function About({
  name,
  jobTitle,
  about,
  linkedin,
  github,
  website,
}: TAbout) {
  console.log(website)
  return (
    <S.Container>
      <h2>{name}</h2>
      <div className="subtitle">
        <h3>{jobTitle}</h3>
        <Link to={linkedin}><img src={linkedinIcon} /></Link>
        <Link to={github}><img src={githubIcon} /></Link>
      </div>
      <p>{about}</p>
    </S.Container>
  );
}
