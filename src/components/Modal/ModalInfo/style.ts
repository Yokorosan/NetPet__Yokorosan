/* import { ModalStyle } from './style'; */
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const CarouselImages = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    gap: 30px;

    img {
      width: 400px;
      height: 300px;
    }
  }
`;

export const CloseIcon = styled(IoCloseOutline)`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const ModalStyle = {
  content: {
    top: "80px",
    maxWidth: "800px",
    margin: "0 auto",
    background: "var(--brand-1)",
    overflow: "auto",
    borderRadius: "8px",
    outline: "none",
    padding: "20px",
  },
};

export const ModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background: none;
`;

export const ModalHeader = styled.header`
  * {
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    z-index: auto;
  }
  h1 {
    font-size: 26px;
    font-weight: 600;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  figure {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 40px;

  p {
    padding: 15px;
    background-color: var(--brand-2-clear);
    border-radius: 8px;
    font-weight: bold;
    color: var(--white);
  }
`;

export const ModalContainer = styled.div`
  background-color: red;
  z-index: 2;
`;
