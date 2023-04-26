"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import TypeWriter from "../typeWritter/typeWritter";
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] });

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

  const getActualShift = () => {
    const hour = new Date().getHours();
    if (hour >= 18 || hour <= 6) return "night";
    return "day";
  };

  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <div
          className={`${
            getActualShift() === "night" ? styles.logoDark : styles.logoLight
          } ${isSpinning ? styles.spin : ""}`}
          onClick={handleShiftChange}
        />
      </div>
      <p>
        <TypeWriter
          title="Desafios do #Boracodar"
          subtitle="Made by Júlia and Ricardo"
          className={{
            title: `${styles.title} ${audiowide.className}`,
            subtitle: styles.subtitle,
          }}
        />
      </p>
    </div>
  );
}
