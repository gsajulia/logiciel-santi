import linkedin from "../../assets/linkedin.svg"
import email from "../../assets/email.svg"
import whats from "../../assets/whats.svg"
import rick from "../../assets/rick-small.png"
import julia from "../../assets/julia-small.png"
import * as S from "./Contact.styles";

const Button = ({ text = "", img = "" }) => (
  <div>
    <S.Button>
      <img src={img} />
      <p>{text}</p>
    </S.Button>
  </div>
);

export default function Contact() {
  return (
    <S.Container>
      <h6>Linktree</h6>
      <Button img={linkedin} text="Linkedin"/>
      <Button img={email} text="Email"/>
      <Button img={whats} text="WhatsApp"/>
      <Button img={julia} text="Github"/>
      <Button img={rick} text="Github"/>
    </S.Container>
  );
}
