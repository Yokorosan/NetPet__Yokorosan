import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import Modal from "react-modal";
import { FormEditProfile } from "../../Form/EditUserForm";
import { StyledCloseModal } from "../../Icons";
import "../style.css";
import { Title } from "../../../styles/title";

export interface ieditForm {
  id: number;
  name: string;
  type: string;
  password: string;
  email: string;
  phone: string;
}

export const ModalProfile = () => {
  const { closeModalEditUser, modalEditOpen } = useContext(ModalContext);

  return (
    <>
      <Modal
        isOpen={modalEditOpen}
        onRequestClose={closeModalEditUser}
        overlayClassName="modalOverlay"
        className="modalContent"
      >
        <div className="divButtonClose">
          <StyledCloseModal onClick={() => closeModalEditUser()} />
        </div>
        <Title variant="title2" color="var(--grey-1)">
          Edite seu perfil
        </Title>
        <FormEditProfile />
      </Modal>
    </>
  );
};
