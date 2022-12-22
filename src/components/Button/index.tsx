import React  from "react";
import { Container } from "./style";

interface iButtonProps{
  variant?: string
  onClick?: () => void,
  type?: "button" | "submit" | "reset" | undefined,
  children: React.ReactNode,
  classname?: string
}

const Button = ({ variant, onClick, type, children, classname }: iButtonProps) => (
    <Container variant={variant} type={type} onClick={onClick} className={classname}>
      {children}
    </Container>
);

export default Button