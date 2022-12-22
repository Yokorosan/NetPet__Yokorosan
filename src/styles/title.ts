import styled, { css } from "styled-components";

interface iTextProps {
  variant: string;
  color: string;
}

export const Title = styled.h1<iTextProps>`
  ${({ variant, color }) => {
    if (variant === "title1") {
      return css`
        font-weight: 700;
        font-size: 26px;
        color: ${color};
      `;
    } else if (variant === "title2") {
      return css`
        font-weight: 700;
        font-size: 22px;
        color: ${color};
      `;
    } else if (variant === "title3") {
      return css`
        font-weight: 700;
        font-size: 18px;
        color: ${color};
      `;
    }
  }}
`;
