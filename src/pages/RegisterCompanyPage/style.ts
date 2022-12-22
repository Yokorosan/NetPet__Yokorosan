import styled from "styled-components";

export const StyledRegisterMain = styled.main`
  display: flex;
  flex-direction: row;

  min-height: 100vh;
  min-width: 100vw;

  .imgDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 45%;
    height: 100vh;

    background-color: var(--brand-1);
  }

  .imgDiv img {
    height: 600px;
  }

  .formDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 55%;
    padding: 30px 10% 0;
    height: 100vh;

    overflow-y: auto;
  }

  .formDiv::-webkit-scrollbar {
    background-color: var(--grey-5);
    width: 10px;
  }

  .formDiv::-webkit-scrollbar-thumb {
    background-color: var(--grey-4);
    border-radius: 8px;
  }

  .formDiv .titleDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    margin-bottom: 30px;
  }

  .formDiv form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    padding: 30px 15px;

    background-color: var(--grey-5);
    border-radius: 10px;
  }

  .formDiv form label {
    margin-bottom: -10px;
    margin-left: 12px;
  }

  .formDiv form p {
    color: red;
    font-size: 12px;
    margin: -10px 0 0 15px;
  }

  .formDiv form button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .toLogin {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;

    width: 100%;

    margin: 25px 0;
  }

  .toLogin a {
    color: var(--brand-2);
  }

  .formDiv > a > svg {
    position: absolute;
    top: 30px;
    left: 20%;

    width: 35px;
    height: 35px;
    padding: 5px;

    background-color: var(--brand-1);
    color: var(--brand-2);
    border-radius: 5px;
  }

  @media (max-width: 762px) {
    flex-direction: column;

    height: max-content;

    background-color: var(--brand-1);

    .imgDiv {
      display: none;
    }

    .formDiv {
      width: 100%;
      height: unset;

      overflow-y: unset;
    }

    .toLogin {
      margin-top: 25px;
    }

    .toLogin a {
      color: var(--brand-2);
    }

    .formDiv > a > svg {
      position: absolute;
      top: 30px;
      left: 10%;

      width: 27px;
      height: 27px;
      padding: 5px;

      background-color: var(--grey-5);
      color: var(--brand-2);
      border-radius: 5px;
    }
  }
`;
