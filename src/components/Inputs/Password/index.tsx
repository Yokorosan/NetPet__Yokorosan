import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { StyledClosedEye, StyledEye } from "../../Icons";
import { Input } from "../style";
import { StyledDiv } from "../../Divs/style";

interface iPassWord {
  register: UseFormRegister<FieldValues>;
}

export const PassWord = ({ register }: iPassWord) => {
  const [passwordShow, setPasswordShow] = useState(false);

  const showPass = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <StyledDiv variant="PasswordDiv">
      <Input
        variant="inputPrimary"
        id="confirm-password"
        height="60px"
        width="100%"
        type={passwordShow ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
