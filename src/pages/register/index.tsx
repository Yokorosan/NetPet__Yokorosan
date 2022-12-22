import { registerSchema } from "../../validations/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { useContext } from "react";
import LogoReg from "../../assets/img/Ramister 1.svg";
import { UserContext } from "../../contexts/UserContext";
import { StyledPaw } from "../../components/Icons";
import { Input } from "../../components/Inputs/style";
import Button from "../../components/Button";
import { PassWord } from "../../components/Inputs/Password";
import { ConfirmPassWord } from "../../components/Inputs/ConfirmPassword";
import { Title } from "../../styles/title";
import { StyledRegisterMain } from "./style";
import { Text } from "../../styles/text";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export type iRegisterUser = {
  name?: string;
  password?: string;
  "confirm-password"?: string;
  email?: string;
  phone?: string;
  type?: string;
  register?: UseFormRegister<FieldValues>;
};

export const RegisterPage = () => {
  const { userRegisterFunction } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({ resolver: yupResolver(registerSchema) });

  return (
    <StyledRegisterMain>
      <div className="imgDiv">
        <img src={LogoReg} alt="" />
      </div>
      <div className="formDiv">
        <div className="titleDiv">
          <Title variant="title1" color="black">
            Registre-se
          </Title>
          <Text variant="text2">Seja bem-vindo a nossa comunidade!</Text>
        </div>
        <form onSubmit={handleSubmit(userRegisterFunction)}>
          <label htmlFor="name">Nome</label>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            placeholder="Digite seu nome aqui"
            {...register("name")}
          ></Input>
          {<p>{errors.name?.message}</p>}

          <label htmlFor="email">E-Mail</label>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            placeholder="Digite seu nome aqui"
            {...register("email")}
          ></Input>
          {<p>{errors.email?.message}</p>}

          <label htmlFor="password">Senha</label>
          <PassWord register={register} />
          {<p>{errors.password?.message}</p>}

          <label htmlFor="confirm-password">Confirme sua Senha</label>
          <ConfirmPassWord register={register} />
          {<p>{errors["confirm-password"]?.message}</p>}

          <label htmlFor="phone">Telefone</label>
          <Input
            variant="inputPrimary"
            height="60px"
            width="100%"
            placeholder="Digite seu nome aqui"
            {...register("phone")}
          ></Input>
          {<p>{errors.phone?.message}</p>}

          <Button type="submit">
            Cadastrar <StyledPaw variant="paw" font="#FFD7A8" />
          </Button>
        </form>
        <div className="toLogin">
          <Text variant="text2">Já possui cadastro?</Text>
          <Link to="/login">Clique aqui</Link>
        </div>
        <Link to="/">
          <AiFillHome />
        </Link>
      </div>
    </StyledRegisterMain>
  );
};
