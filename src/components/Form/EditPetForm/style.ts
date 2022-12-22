import styled from "styled-components";

const ModalEditPetsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  form {
    width: 100vw;
    max-width: 400px;
  }
  .btnRemovePet {
    width: 100vw;
    max-width: 380px;
    height: 50px;
    margin: 10px 0px;
    border-radius: 10px;
    gap: 10px;
    border: 1px solid var(--brand-2);
  }
`;

export default ModalEditPetsStyle;
