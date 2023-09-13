// import linkedin from "../../assets/linkedin.svg"
import email from "../../assets/email.svg"
import whats from "../../assets/whats.svg"
import rick from "../../assets/rick-small.png"
import julia from "../../assets/julia-small.png"
import * as S from "./Contact.styles";
import { Link } from "react-router-dom";

const Button = ({text = "", img = "" }) => (
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
      {/* <Button onClick={()=> navigate('/')} img={linkedin} text="Linkedin"/> */}
      <Link to='mailto:logicielsanti@gmail.com'><Button img={email} text="Email"/></Link>
      <Link to='https://api.whatsapp.com/send?phone=12981721089'><Button img={whats} text="WhatsApp"/></Link>
      <Link to='https://github.com/gsajulia'><Button img={julia} text="Github"/></Link>
      <Link to='https://github.com/Rickazuo'><Button img={rick} text="Github"/></Link>
    </S.Container>
  );
}
