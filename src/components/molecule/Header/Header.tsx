import { useState, useEffect } from "react";
import * as S from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
      }, 2000);
    }
  }, [isSpinning]);

  function handleShiftChange() {
    setIsSpinning(true);
  }

  return (
    <S.Header>
       <nav className="logo-wrapper">
        <ul>
          <li><S.StyledLink to="/">HOME </S.StyledLink><S.Point/></li>
          <li> <S.StyledLink to="/projects">PROJECTS </S.StyledLink><S.Point/></li>
          <S.LogoDark className={isSpinning ? 'spin' : ''} onClick={handleShiftChange} />
          <li><S.StyledLink to="/contact"><S.Point/>CONTACT</S.StyledLink></li>
          <li><S.StyledLink to="/team"><S.Point/>TEAM</S.StyledLink></li>
          </ul>
        </nav>
    </S.Header>
  );
}
