import React, { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../../contexts/ModalContext";
import { Title } from "../../../styles/title";
import { CreateServiceForm } from "../../CreateServiceForm";
import { StyledCloseModal } from "../../Icons";
import "../style.css";

Modal.setAppElement("#root");

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalCreateService = () => {
  const { modalCreate, closeModalCreateService } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalCreate}
      onRequestClose={closeModalCreateService}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <div className="divButtonClose">
        <StyledCloseModal onClick={() => closeModalCreateService()} />
      </div>
      <Title variant="title2" color="var(--grey-1)">
        Cadastre seu serviço
      </Title>
      <CreateServiceForm />
    </Modal>
  );
};
