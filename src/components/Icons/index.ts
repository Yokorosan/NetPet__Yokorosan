import styled, { css } from "styled-components";

import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { BiArrowBack, BiSearchAlt } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { SiDatadog } from "react-icons/si";

interface iIconsProps {
  variant: string;
  font: string;
}

export const StyledDataDog = styled(SiDatadog)`
  height: 90px;
  width: 90px;
  color: var(--brand-1);
`;

export const StyledPaw = styled(FaPaw)<iIconsProps>`
  ${({ variant, font }) => {
    switch (variant) {
      case "paw":
        return css`
          color: ${font};
        `;
    }
  }}
`;

export const StyledButtonHome = styled(AiFillHome)`
  padding: 10px;
  font-size: 35px;
  color: var(--brand-2);
  background-color: var(--brand-1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    padding: 11px;
    font-size: 36px;
  }
`;

export const StyledButtonExit = styled(BiArrowBack)`
  padding: 10px;
  font-size: 35px;
  color: var(--brand-2);
  background-color: var(--brand-1);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    padding: 11px;
    font-size: 36px;
  }
`;

export const StyledButtonSeach = styled(BiSearchAlt)`
  font-size: 35px;
  color: var(--brand-2);
  cursor: pointer;

  &:hover {
    font-size: 36px;
  }
`;
export const StyledEye = styled(AiFillEye)`
  position: absolute;
  margin: 22px;
  left: 80%;
  @media (min-width: 425px) {
    left: 85%;
  }
`;

export const StyledClosedEye = styled(AiFillEyeInvisible)`
  position: absolute;
  margin: 22px;
  left: 80%;
  @media (min-width: 425px) {
    left: 85%;
  }
`;

export const StyledCloseModal = styled(AiOutlineClose)`
  padding: 10px;
  font-size: 35px;
  color: var(--brand-2);
  background-color: var(--brand-1);
  border-radius: 10px;
  cursor: pointer;
`;
