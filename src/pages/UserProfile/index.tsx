import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ModalContext } from "../../contexts/ModalContext";
import { petsContext } from "../../contexts/PetsContext";
import { ModalProfile } from "../../components/Modal/EditProfileUser";
import { ModalAddPets } from "../../components/Modal/AddPets";
import { ModalEditPets } from "../../components/Modal/EditPetsProfile";
import { ProfileMain } from "./style";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import Logo from "../../assets/img/logoPet.png";
import { Title } from "../../styles/title";
import Button from "../../components/Button";
import { StyledDataDog, StyledPaw } from "../../components/Icons";

interface ieditFormPet {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

const Profile = () => {
  const { user } = useContext(UserContext);

  const { openModaladdpet, openModalEditUser, openModalEditPet } =
    useContext(ModalContext);
  const { petsList, setPetsInfo } = useContext(petsContext);

  return (
    <ProfileMain>
      <header>
        <div className="logoDiv">
          <Link to="/dashboard">
            <AiFillHome />
          </Link>
          {/* <img src={Logo} alt="" /> */}
          <StyledDataDog />
        </div>
        <div className="profileDiv">
          <Title variant="title2" color="black">
            {user?.name}
          </Title>
          <div>
            <Button onClick={() => openModalEditUser()}>Editar perfil</Button>
            <ModalProfile></ModalProfile>
            <Button onClick={() => openModaladdpet()}>Adicionar pet</Button>
            <ModalAddPets></ModalAddPets>
          </div>
        </div>
      </header>
      <section>
        <Title variant="title2" color="black">
          Seus Pets
          <StyledPaw variant="paw" font="#FFD7A8" />
        </Title>
        <ul>
          {petsList.map((pet) => (
            <li key={pet.id} className="petItem">
              <div className="imgDiv">
                <img src={pet.picture} alt={pet.name} />
              </div>
              <div className="descriptionDiv">
                <p>{pet.name}</p>
                <Button
                  onClick={() => {
                    openModalEditPet();
                    setPetsInfo(pet);
                  }}
                >
                  Editar pet
                </Button>
                <ModalEditPets></ModalEditPets>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </ProfileMain>
  );
};

export default Profile;
