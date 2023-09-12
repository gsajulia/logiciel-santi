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
          <S.Li>HOME <S.Point/></S.Li>
          <S.Li>PROJECTS <S.Point/></S.Li>
          <S.LogoDark className={isSpinning ? 'spin' : ''} onClick={handleShiftChange} />
          <S.Li><S.Point/>CONTACT</S.Li>
          <S.Li><S.Point/>TEAM</S.Li>
          </ul>
        </nav>
    </S.Header>
  );
}
