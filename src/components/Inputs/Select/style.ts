import styled, { css } from "styled-components";

interface iSelectProps {
  variant: string;
  width: string;
  height: string;
}

export const Select = styled.select<iSelectProps>`
  ${({ variant, width, height }) => {
    if (variant === "selectPrimary") {
      return css`
        width: ${width};
        height: ${height};
        padding-left: 15px;

        color: var(--grey-1);
        background-color: var(--white);

        border: none;
        border-radius: 27px;
        outline: 2px solid var(--brand-2-clear);
        cursor: pointer;

        &:focus {
          outline: 2px solid var(--brand-2);
        }
      `;
    }
  }}
`;
