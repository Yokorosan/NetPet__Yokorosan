import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  font-size: 16px;
  background: var(--white);
  max-width: 440px;
  width: 100%;

  label {
    align-self: flex-start;
    margin-left: 15px;
    color: var(--black);
    margin-top: 5px;
    margin-bottom: 3px;
  }
  input {
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
  }
  select {
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    border-radius: 10px;
    gap: 10px;
    border: 1px solid var(--brand-2);
  }

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    color: var(---color-gray2);
    align-self: flex-start;
    margin-left: 15px;
    margin-bottom: 1rem;
  }
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    margin: 1rem 0rem 0.5rem 0rem;
  }
`;
