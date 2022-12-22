import styled from "styled-components";

export const StyledDivUserDashBoard = styled.div`
  main {
    width: 100vw;
    max-width: 1200px;
    margin: 100px auto 10px auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    .banerNetPet {
      width: 98.5vw;
      padding: 15px 0;
      background-color: var(--brand-1);
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 300px;

      img {
        width: 100px;
      }

      .textBaner {
        width: 500px;
      }
    }
    .listServices {
      max-width: 90vw;
      padding: 5px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 50px;
    }
    .logoService {
      width: 200px;
      height: 150px;
      background-color: var(--brand-1);
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .serviceCard {
      width: 200px;
      height: 300px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      img {
        max-width: 90%;
        max-height: 90%;
      }

      .divNameService {
        width: 100%;
        height: 40px;
      }

      .divButtonService {
        width: 100%;
        display: flex;
        justify-content: end;

        .buttonModal {
          height: 30px !important;
          padding: 10px !important;

          display: flex;
          align-items: center;
        }
      }
    }
    @media (max-width: 720px) {
      .banerNetPet {
        gap: 0px;
      }
    }
  }
`;
