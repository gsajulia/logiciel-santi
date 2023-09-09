import Header from "../../components/molecule/Header/Header";
import RepositoriesSection from "../../components/molecule/RepositoriesSection/RepositoriesSection";
import * as S from "./Home.styles";

export default function Home() {
  return (
    <S.Container>
      <Header />
      <RepositoriesSection />
    </S.Container>
  );
}
