import { useContext, useEffect } from "react";
import { ServiceContext } from "../../contexts/ServicesContext";
import { UserContext } from "../../contexts/UserContext";
import logo from "../../assets/img/logoPet.png";
import { NavBar } from "../../components/NavBar";
import { StyledHeader } from "../../components/Header/style";
import { StyledButtonExit, StyledDataDog } from "../../components/Icons";
import { StyledDivUserDashBoard } from "./style";
import { Title } from "../../styles/title";
import { Research } from "../../components/Inputs/Research";
import { Link } from "react-router-dom";
import peixe from "../../assets/img/Peixinho.png";
import Button from "../../components/Button";
import ModalInfo from "../../components/Modal/ModalInfo";
import { CgProfile } from "react-icons/cg";

export const UserDashBoard = () => {
  const { size, logoutFunction } = useContext(UserContext);
  const {
    newNavBar,
    setDataValueInput,
    setSearchBtn,
    newServicesListBtn,
    newServiceListInput,
    dataValueInput,
    setRenderList,
    searchBtn,
    renderList,
    setServiceClick,
    openModal,
  } = useContext(ServiceContext);

  useEffect(() => {
    if (dataValueInput === "") {
      setRenderList(newServicesListBtn);
    } else {
      setRenderList(newServiceListInput);
    }
  }, [dataValueInput || searchBtn]);

  return (
    <StyledDivUserDashBoard>
      <StyledHeader>
        <div className="buttondAndLogo">
          <StyledButtonExit onClick={() => logoutFunction()} />
          <div className="headerLogo">
            {/* <img src={logo} alt="Logo" /> */}
            <StyledDataDog />
            {size < 720 ? (
              <></>
            ) : (
              <>
                <Title
                  variant="title2"
                  color="var(--grey-2)"
                  className="nameLogo"
                >
                  Net
                </Title>
                <Title
                  variant="title2"
                  color="var(--brand-2)"
                  className="nameLogo"
                >
                  Pet
                </Title>
              </>
            )}
          </div>
        </div>
        <div className="headerDiv">
          {size < 720 ? (
            <></>
          ) : (
            <Research setDataValueInput={setDataValueInput} />
          )}

          <Link to="/userProfile">
            <CgProfile />
          </Link>
        </div>
      </StyledHeader>
      <main>
        <div className="banerNetPet">
          <img src={peixe} alt="Imagem de peixe no aquário" />
          <div className="textBaner">
            <Title variant="title1" color="var(--grey-1)">
              A NetPet veio para melhorar e facilitar os cuidados com o seu
              querido pet !
            </Title>
          </div>
        </div>
        <NavBar
          setSearchBtn={setSearchBtn}
          newNavBar={newNavBar}
          setDataValueInput={setDataValueInput}
        />
        <ul className="listServices">
          {renderList.map((element, index) => (
            <li key={index} onClick={() => setServiceClick(element)}>
              <div className="serviceCard">
                <div className="logoService">
                  <img src={element.logo} alt="logo"></img>
                </div>
                <div className="divNameService">
                  <Title variant="title3" color="var(--grey-1)">
                    {element.servicename}
                  </Title>
                </div>
                <div className="divButtonService">
                  <Button classname="buttonModal" onClick={openModal}>
                    Ver mais
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <ModalInfo />
    </StyledDivUserDashBoard>
  );
};
