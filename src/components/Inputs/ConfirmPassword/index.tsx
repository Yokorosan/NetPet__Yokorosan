import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { StyledClosedEye, StyledEye } from "../../Icons";
import { Input } from "../style";
import { StyledDiv } from "../../Divs/style";

interface iConfirmPassWord {
  register: UseFormRegister<FieldValues>;
}

export const ConfirmPassWord = ({ register }: iConfirmPassWord) => {
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
        placeholder="Confirme a sua Senha"
        {...register("confirm-password")}
      />
      {passwordShow ? (
        <StyledEye onClick={() => showPass()} />
      ) : (
        <StyledClosedEye onClick={() => showPass()} />
      )}
    </StyledDiv>
  );
};
