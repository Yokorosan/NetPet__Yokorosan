import styled, { css } from "styled-components";

interface iInputProps {
  variant: string;
  width?: string;
  height?: string;
}

export const Input = styled.input<iInputProps>`
  ${({ variant, width, height }) => {
    switch (variant) {
      case "inputPrimary": {
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
        &::placeholder {
            color: var(--grey-2);
        }

        &:focus {
            outline: 2px solid var(--brand-2);
            &::placeholder {
            color: var(--grey-1);
            }
            `;
      }
    }
  }}
`;
