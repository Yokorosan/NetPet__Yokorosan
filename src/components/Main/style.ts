import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100vw;
  max-width: 1200px;
  ul {
    background-color: var(--brand-1);
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    padding: 5px;
    gap: 5px;
    border-radius: 10px;
    max-width: 900px;
    flex-wrap: wrap;
  }
  li {
    background-color: var(--brand-2);
    border-radius: 20px;
  }
`;
