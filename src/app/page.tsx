"use client";
import { Inter } from "next/font/google";

import styles from "./page.module.css";
import Header from "./components/header/header";
import HighlightSection from "./components/HighlightSection/HighlightSection";
import RepositoriesSection from "./components/RepositoriesSection/RepositoriesSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Header />
      <HighlightSection />
      <RepositoriesSection />
    </main>
  );
}
