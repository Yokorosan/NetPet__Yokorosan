import { DivLandingPage } from "./style";
import logo from "../../assets/img/logoPet.png";
import { Title } from "../../styles/title";
import Link from "../../components/Links";
import { StyledDataDog } from "../../components/Icons";

const LandingPage = () => {
  return (
    <DivLandingPage>
      <div className="navLandinPage">
        <Link to="/login" className="loginDesk">
          Login
        </Link>
        <div className="logo">
          <div className="writeLogo">
            <Title variant="title1" color="var(--grey-2)" className="nameLogo">
              Net
            </Title>
            <Title variant="title1" color="var(--brand-2)" className="nameLogo">
              Pet
            </Title>
          </div>
          <StyledDataDog className="logoImg" />
        </div>
        <Link to="/login" className="loginMobile">
          Login
        </Link>
        <Link to="/register">Registre-se</Link>
      </div>
      <div className="registerServices">
        <Title variant="title2" color="var(--grey-1)">
          Caso queria registrar a sua empresa
        </Title>
        <Link to="/registerCompany" variant="LinkWrite">
          clique aqui !
        </Link>
      </div>
    </DivLandingPage>
  );
};

export default LandingPage;
