import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import Modal from "react-modal";
import { petsContext } from "../../../contexts/PetsContext";
import { editPetSchema } from "../../../validations/editPetSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEditPet } from "../../Form/EditPetForm";
import styled from "styled-components";
import "../style.css";
import { StyledCloseModal } from "../../Icons";
import { Title } from "../../../styles/title";

export interface iEditFormPet {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

export const ModalEditPets = () => {
  const { closeModalEditPet, modalEditPetOpen } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalEditPetOpen}
      onRequestClose={closeModalEditPet}
      className="modalContent"
      overlayClassName="modalOverlay"
    >
      <div className="divButtonClose">
        <StyledCloseModal onClick={() => closeModalEditPet()} />
      </div>

      <Title variant="title2" color="var(--grey-1)">
        Editar Pet
      </Title>

      <FormEditPet />
    </Modal>
  );
};
