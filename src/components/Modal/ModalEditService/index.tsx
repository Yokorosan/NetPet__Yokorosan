import React, { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../../contexts/ModalContext";
import { Title } from "../../../styles/title";
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

interface iModalProps {
  children: React.ReactNode;
}

export const ModalEditService = ({ children }: iModalProps) => {
  const { modalEdit, closeModalEditService } = useContext(ModalContext);

  return (
    <Modal
      isOpen={modalEdit}
      onRequestClose={closeModalEditService}
      overlayClassName="modalOverlay"
      className="modalContent"
    >
      <div className="divButtonClose">
        <StyledCloseModal onClick={() => closeModalEditService()} />
      </div>
      <Title variant="title2" color="var(--grey-1)">
        Edite seu serviço
      </Title>
      {children}
    </Modal>
  );
};
