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
          <li>HOME <S.Point/></li>
          <li>PROJECTS <S.Point/></li>
          <S.LogoDark className={isSpinning ? 'spin' : ''} onClick={handleShiftChange} />
          <li><S.Point/>CONTACT</li>
          <li><S.Point/>TEAM</li>
          </ul>
        </nav>
    </S.Header>
  );
}
