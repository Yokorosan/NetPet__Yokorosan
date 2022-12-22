import styled, { css, FlattenSimpleInterpolation } from "styled-components";

interface iButtonProps {
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  classname?: string;
}

interface iButtonVariants {
  ButtonPrimary: FlattenSimpleInterpolation;
  ButtonSecondary: FlattenSimpleInterpolation;
  ButtonTertiary: FlattenSimpleInterpolation;
  [key: string]: any;
}

const buttonVariants: iButtonVariants = {
  ButtonPrimary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--white);
    background-color: var(--brand-2);

    border: none;
    border-radius: 27px;

    cursor: pointer;

    &:hover {
      background-color: var(--brand-2-clear);
    }
  `,
  ButtonSecondary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--white);
    background-color: var(--brand-2-clear);

    border: none;
    border-radius: 27px;

    cursor: pointer;

    &:hover {
      color: var(--grey-1);
      background-color: var(--grey-5);
    }
  `,
  ButtonTertiary: css`
    height: 60px;
    padding: 10px 35px;
    font-size: 1rem;
    font-weight: 700;

    color: var(--grey-1);
    background-color: var(--grey-5);

    border: none;
    border-radius: 27px;

    cursor: pointer;

    &:hover {
      color: var(--white);
      background-color: var(--brand-2-clear);
    }
  `,
};

export const Container = styled.button<iButtonProps>`
  ${({ variant }) => {
    return buttonVariants[variant || "ButtonPrimary"];
  }}
`;
