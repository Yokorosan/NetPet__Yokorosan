import styled from "styled-components";

export const NavDashProvider = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .divExitAndLogo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 150px;
    }
  }

  .noImage {
    width: 100px;
    height: 100px;
    background-color: var(--brand-2);
    border-radius: 50%;
  }

  section {
    display: flex;
    align-items: center;
    gap: 20px;

    .buttonsProvider {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      button {
        height: 50px !important;
        padding: 10px !important;
        display: flex;
        align-items: center;
      }
    }

    .infoProvider {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .infoProvider > svg {
      height: 50px;
      width: 50px;
      color: #c18461;
    }
  }

  @media (max-width: 720px) {
    .divExitAndLogo {
      flex-direction: column;

      img {
        width: 90px;
      }
    }
  }
`;

export const MainDashProvider = styled.main`
  width: 90vw;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    li {
      width: 300px;
      padding: 10px;
      background-color: var(--brand-1);
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .divLogoProvider {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        div {
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 100%;
            border-radius: 10px;
          }
        }
      }

      .descriptionProvider {
        height: 100px;
        padding: 5px;
        text-align: center;
        background-color: var(--grey-5);
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
      .divButtonsService {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        button {
          height: 40px !important;
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

export const ButtonsMobileDashProvider = styled.div`
  width: 90vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    height: 50px !important;
    padding: 10px !important;
    display: flex;
    align-items: center;
  }
`;
