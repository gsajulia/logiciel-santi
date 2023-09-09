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
      <div className="logo-wrapper">
        <div
          className={`logo-dark ${isSpinning ? "spin" : ""}`}
          onClick={handleShiftChange}
        />
      </div>
    </S.Header>
  );
}
