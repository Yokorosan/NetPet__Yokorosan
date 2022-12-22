import { useContext } from "react";
import Button from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";
import { ModalCreateService } from "../../components/Modal/ModalCreateService";
import { CreateServiceForm } from "../../components/CreateServiceForm";
import { ModalEditService } from "../../components/Modal/ModalEditService";
import { EditServiceForm } from "../../components/Form/EditServiceForm";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalProfile } from "../../components/Modal/EditProfileUser";
import { ServiceContext } from "../../contexts/ServicesContext";
import logo from "../../assets/img/logoPet.png";
import { StyledButtonExit, StyledDataDog } from "../../components/Icons";
import {
  ButtonsMobileDashProvider,
  MainDashProvider,
  NavDashProvider,
} from "./style";
import { Title } from "../../styles/title";
import { Text } from "../../styles/text";
import { CgProfile } from "react-icons/cg";

export interface iServiceData {
  cnpj: string;
  description: string;
  id: number;
  images: string[];
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId: number;
}

export function ServiceProvider() {
  const { user, size, logoutFunction } = useContext(UserContext);
  const { deleteService, servicesUser, setService } =
    useContext(ServiceContext);
  const { openModalCreateService, openModalEditService, openModalEditUser } =
    useContext(ModalContext);

  return (
    <>
      <NavDashProvider>
        <div className="divExitAndLogo">
          <StyledButtonExit onClick={() => logoutFunction()} />
          {/* <img src={logo} alt="Logo NetPet" /> */}
          <StyledDataDog />
        </div>
        <section>
          {size < 720 ? (
            <></>
          ) : (
            <div className="buttonsProvider">
              <Button onClick={() => openModalCreateService()}>
                Cadastrar novo serviço
              </Button>
              <Button onClick={() => openModalEditUser()}>Editar perfil</Button>
            </div>
          )}
          <div className="infoProvider">
            <CgProfile />
            <Title variant="title2" color="var(--grey-1)">
              {user?.name}
            </Title>
          </div>
        </section>
      </NavDashProvider>
      {size > 720 ? (
        <></>
      ) : (
        <ButtonsMobileDashProvider>
          <Button onClick={() => openModalCreateService()}>
            Cadastrar novo serviço
          </Button>
          <Button onClick={() => openModalEditUser()}>Editar perfil</Button>
        </ButtonsMobileDashProvider>
      )}

      <MainDashProvider>
        <ModalCreateService />
        <ModalEditService>
          <EditServiceForm />
        </ModalEditService>
        <ModalProfile />
        <ul>
          {servicesUser.map((service) => {
            return (
              <li key={service.id}>
                <div className="divLogoProvider">
                  <div>
                    <img src={service.logo} alt="" />
                  </div>
                  <Title variant="title3" color="var(--grey-1)">
                    {service.servicename}
                  </Title>
                </div>
                <Text variant="textSmall">{service.typeofservice}</Text>
                <div className="descriptionProvider">
                  <Text variant="text1">{service.description}</Text>
                </div>
                <Text variant="text1">Contato: {service.phone}</Text>
                <div className="divButtonsService">
                  <Button
                    onClick={() => {
                      openModalEditService();
                      setService(service);
                    }}
                  >
                    Editar serviço
                  </Button>
                  <Button onClick={() => deleteService(service)}>
                    Excluir serviço
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </MainDashProvider>
    </>
  );
}
