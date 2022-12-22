import styled from "styled-components";

export const ModalEditProfileStyle = styled.div`
  min-width: 300px;

  height: 80%;
  padding: 10px 0;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* display: none; */
  .contantBtnClose {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 300px;
    padding: 0 0 0 10px;
    button {
      cursor: pointer;
      width: 30px;
      height: 30px;
      font-weight: 800;
      color: var(--brand-2);
      background-color: var(--brand-1);
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h3 {
      font-family: inter;
      font-style: Bold;
      font-size: 26px;
      line-height: 31px;
      font-weight: 700;
    }
    span {
      font-family: inter;
      font-style: Semi bold;
      font-size: 14px;
      line-height: 17px;
      font-weight: 600;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;

    input {
      min-width: 200px;
    }
  }
`;
