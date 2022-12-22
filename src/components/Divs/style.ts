import styled, { css } from "styled-components";

interface iDivProps {
  variant: string;
}

interface iDivVariants {
  [key: string]: any;
}
const divVariants: iDivVariants = {
  DivInnerForm: css`
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    h2 {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      text-align: center;
    }
    p {
      text-align: center;
      margin-bottom: 1rem;
      align-self: auto;
    }
  `,
  PasswordDiv: css`
    position: relative;
    width: 100%;
  `,

  searchBox: css`
    position: relative;
    display: flex;
    align-items: center;
    max-width: 500px;
    svg {
      position: absolute;
      right: 5px;
    }
  `,
};

export const StyledDiv = styled.div<iDivProps>`
  display: flex;
  ${({ variant }) => {
    return divVariants[variant || "DivPrimary"];
  }}
`;
