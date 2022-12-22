import React, { useContext } from "react";

import gatinho from "../../assets/img/gatinho.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerSchema";
import { UserContext } from "../../contexts/UserContext";
import { iRegisterUser } from "../register";
import { StyledRegisterMain } from "./style";
import { Title } from "../../styles/title";
import { Text } from "../../styles/text";
import { Input } from "../../components/Inputs/style";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { StyledPaw } from "../../components/Icons";
import { PassWord } from "../../components/Inputs/Password";
import { ConfirmPassWord } from "../../components/Inputs/ConfirmPassword";

const RegisterCompanyPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(registerSchema),
  });

  const { userRegisterCompanyFunction } = useContext(UserContext);

  const onSubmitFunction = (data: iRegisterUser) => {
    userRegisterCompanyFunction(data);
  };

  return (
    <StyledRegisterMain>
      <div className="imgDiv">
        <img src={gatinho} alt="" />
      </div>
      <div className="formDiv">
        <div className="titleDiv">
          <Title variant="title1" color="black">
            Registre-se
          </Title>
          <Text variant="text2">Expanda os horizontes do seu negócio</Text>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
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
            placeholder="Digite o seu email aqui"
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

          <Button variant="ButtonPrimary">
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

export default RegisterCompanyPage;
