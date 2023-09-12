import * as S from "./Home.styles";
import star from "../../assets/star.svg";
import arrow from "../../assets/arrow.svg";
import { generateRandomOption } from "./data";
import { Link } from "react-router-dom";

const Item = ({ text = "" }) => (
  <S.Item>
    <img src={star} alt="solution item star" />
    <p>{text}</p>
  </S.Item>
);

export default function Home() {
  const option = generateRandomOption();

  return (
    <S.Container>
      <S.LeftSection>
        <h1>Software Development</h1>
        <p>
          Rely on us to turn your ideas into websites, whether it's for
          portfolios or businesses. Logiciel Santi is dedicated to solving
          problems through Frontend solutions
        </p>
        <Item text="Websites" />
        <Item text="Frontend Interfaces" />
        <Item text="Frontend Consulting" />
        <Item text="Mentorship in Tech Area" />
      </S.LeftSection>
      <S.RightSection>
        <Link className="url" to={option.url}>
          <img src={option.img} />
        </Link>
        <Link className="goto" to="/projects">
          MAIS PROJETOS <img className="arrow" src={arrow} />
        </Link>
      </S.RightSection>
      <S.BottomText>
        “First, solve the problem. Then, write the code” -JJ
      </S.BottomText>
    </S.Container>
  );
}
