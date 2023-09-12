import { useState, useEffect } from "react";
import * as S from "./Header.styles";

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
          <li>
            <S.StyledLink
              to="/"
            >
              HOME <div className="point" />
            </S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/projects">
              PROJECTS <div className="point"/>
            </S.StyledLink>
          </li>
          <S.LogoDark
            className={isSpinning ? "spin" : ""}
            onClick={handleShiftChange}
          />
          <li>
            <S.StyledLink to="/contact">
              <div className="point" />
              CONTACT
            </S.StyledLink>
          </li>
          <li>
            <S.StyledLink to="/team">
              <div className="point" />
              TEAM
            </S.StyledLink>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
}
