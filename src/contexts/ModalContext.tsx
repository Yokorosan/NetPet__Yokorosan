import { createContext, useContext, useState } from "react";
import { iEditFormPet } from "../components/Modal/EditPetsProfile";
import { petsContext } from "./PetsContext";

interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalContext {
  openModaladdpet: () => void;
  modalIsOpen: boolean;
  closeModaladdpet: () => void;
  modalEditOpen: boolean;
  openModalEditUser: () => void;
  closeModalEditUser: () => void;
  modalEditPetOpen: boolean;
  openModalEditPet: () => void;
  closeModalEditPet: () => void;
  modalCreate: boolean;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  openModalCreateService: () => void;
  closeModalCreateService: () => void;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEditService: () => void;
  closeModalEditService: () => void;
  modalEditProfile: boolean;
  setModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  openModalEditProfile: () => void;
  closeModalEditProfile: () => void;
}

export const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditOpen, setIsEditOpen] = useState(false);
  const [modalEditPetOpen, setIsEditPetOpen] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);
  const [modalEditProfile, setModalEditProfile] = useState(false);

  const { setPetsInfo } = useContext(petsContext);

  const openModalCreateService = () => setModalCreate(true);

  const closeModalCreateService = () => setModalCreate(false);

  const openModalEditService = () => setModalEdit(true);

  const closeModalEditService = () => setModalEdit(false);

  const openModalEditProfile = () => setModalEdit(true);

  const closeModalEditProfile = () => setModalEdit(false);

  const openModaladdpet = (): void => {
    setIsOpen(true);
  };

  const closeModaladdpet = (): void => {
    setIsOpen(false);
  };

  const openModalEditUser = (): void => {
    setIsEditOpen(true);
  };

  const closeModalEditUser = (): void => {
    setIsEditOpen(false);
  };

  const openModalEditPet = (): void => {
    setIsEditPetOpen(true);
  };

  const closeModalEditPet = (): void => {
    setIsEditPetOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModaladdpet,
        closeModaladdpet,
        modalEditOpen,
        openModalEditUser,
        closeModalEditUser,
        modalEditPetOpen,
        openModalEditPet,
        closeModalEditPet,
        modalCreate,
        setModalCreate,
        openModalCreateService,
        closeModalCreateService,
        modalEdit,
        setModalEdit,
        openModalEditService,
        closeModalEditService,
        modalEditProfile,
        setModalEditProfile,
        openModalEditProfile,
        closeModalEditProfile,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
