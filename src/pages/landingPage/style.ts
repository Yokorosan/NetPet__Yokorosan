import styled from "styled-components";

export const DivLandingPage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--brand-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .navLandinPage {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .writeLogo {
    display: flex;
  }

  .nameLogo {
    font-size: 32px !important;
  }

  .logoImg {
    width: 300px;
    height: 300px;
    color: var(--white);
  }

  .loginMobile {
    display: none;
  }

  .registerServices {
    display: flex;
    gap: 5px;
  }

  @media (max-width: 758px) {
    .loginDesk {
      display: none;
    }

    .loginMobile {
      display: flex;
    }

    .navLandinPage {
      margin-top: 100px;
      flex-direction: column;
      gap: 70px;
    }

    .registerServices {
      margin-bottom: 100px;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;
