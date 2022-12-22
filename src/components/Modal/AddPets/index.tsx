import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { petsContext } from "../../../contexts/PetsContext";
import Modal from "react-modal";
import { UserContext } from "../../../contexts/UserContext";
import { Input } from "../../Inputs/style";
import Button from "../../Button";
import { AddPetsForm } from "../../Form/AddPetsForm";
import { StyledCloseModal } from "../../Icons";
import { Title } from "../../../styles/title";

export interface iaddFormPet {
  id: number;
  userId: number;
  name: string;
  type: string;
  picture: string;
  race: string;
}

export const ModalAddPets = () => {
  const { modalIsOpen, closeModaladdpet } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModaladdpet}
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <div className="divButtonClose">
        <StyledCloseModal onClick={() => closeModaladdpet()} />
      </div>

      <Title variant="title2" color="var(--grey-1)">
        Adicionar Pet
      </Title>
      <AddPetsForm />
    </Modal>
  );
};
