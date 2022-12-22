import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 90vw;

  display: flex;
  justify-content: center;

  margin-bottom: 30px;

  .listFilter {
    width: 90vw;
    padding: 0 30px;
    background-color: var(--grey-5);
    border-radius: 25px;

    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 20px;

    overflow-x: auto;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 159px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    input {
      max-width: 90vw;
    }

    .listFilter {
      gap: 0px;
    }
  }
`;
