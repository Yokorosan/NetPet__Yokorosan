import styled from "styled-components";

export const DivNotFound = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-color: var(--brand-1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  .div404 {
    display: flex;
    align-items: center;

    h1 {
      font-size: 200px;
      font-weight: 700;
      color: var(--brand-2);
    }
    img {
      width: 300px;
    }

    &:hover {
      cursor: default;
      h1 {
        font-size: 215px;
      }
      img {
        width: 315px;
      }
    }
  }

  .divTextError {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 30px;
      font-weight: 700;
      color: var(--grey-1);
    }

    p {
      font-size: 25px;
      font-weight: 300;
      color: var(--grey-1);
    }
  }

  span {
    font-size: 18px;
    color: var(--grey-1);
  }
`;
