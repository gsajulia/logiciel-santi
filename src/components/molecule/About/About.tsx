import * as S from "./About.styles";
import linkedinIcon from "../../../assets/linkedin.svg"
import githubIcon from "../../../assets/github.svg"
import folderIcon from "../../../assets/programming.png"
import { Link } from "react-router-dom";

type TAbout = {
  name: string;
  jobTitle: string;
  about: string;
  linkedin: string;
  github: string;
  website: string;
  profilePicture: string;
  left?: boolean;
};

export default function About({
  name,
  jobTitle,
  about,
  linkedin,
  github,
  website,
  profilePicture,
  left = false
}: TAbout) {
  console.log(website)
  return (
    <S.Container left={left}>
      <img className="profile" width={200} src={profilePicture}/>
      <div>
        <h2>{name}</h2>
        <div className="subtitle">
          <h3>{jobTitle}</h3>
          <Link to={linkedin}><img src={linkedinIcon} /></Link>
          <Link to={github}><img src={githubIcon} /></Link>
          <Link to={website}><img width={40} src={folderIcon} /></Link>
        </div>
        <p className="description">{about}</p>
      </div>
    </S.Container>
  );
}
