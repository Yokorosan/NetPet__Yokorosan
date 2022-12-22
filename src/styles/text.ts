import styled, { css } from "styled-components";

interface iTextProps {
  variant: string;
}

export const Text = styled.p<iTextProps>`
  ${({ variant }) => {
    if (variant === "text1") {
      return css`
        font-weight: 400;
        font-size: 16px;

        color: black;
      `;
    } else if (variant === "text2") {
      return css`
        font-weight: 400;
        font-size: 14px;
      `;
    } else if (variant === "textSemiBold") {
      return css`
        font-weight: 600;
        font-size: 14px;
      `;
    } else if (variant === "textSmall") {
      return css`
        font-weight: 400;
        font-size: 12px;
      `;
    }
  }}
`;
