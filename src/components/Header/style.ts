import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 10px 20px;
  background-color: var(--white);

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  position: fixed;
  top: 0;
  z-index: 2;

  .buttondAndLogo {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .headerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      max-width: 250px;
    }
  }

  .headerDiv {
    display: flex;
    align-items: center;
    gap: 30px;

    img {
      border-radius: 50%;
      max-width: 100px;
      max-height: 100px;
    }

    a svg {
      height: 50px;
      width: 50px;
      color: #C18461;
    }
  }
  @media (max-width: 720px) {
    .buttondAndLogo {
      width: 66%;
      justify-content: space-between;
      gap: 0;
    }
    .headerDiv {
      width: 33%;
      justify-content: end;
    }
  }
`;
