import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/Loginschema";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { PassWord } from "../../components/Inputs/Password";
import { StyledPaw } from "../../components/Icons";
import LogoLogin from "../../assets/img/Doginho 1.svg";
import { Link } from "react-router-dom";
import { Input } from "../../components/Inputs/style";
import Button from "../../components/Button";
import { LoginMain } from "./style";
import { AiFillHome } from "react-icons/ai";
import { Title } from "../../styles/title";
import { Text } from "../../styles/text";

export interface iLoginFormData {
  email?: string;
  password?: string;
}

export const Login = () => {
  const { userLoginFunction, size, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = (data) => {
    userLoginFunction(data, setLoading);
  };

  return (
    <LoginMain>
      <div className="imgDiv">
        <img src={LogoLogin} alt="" />
      </div>
      <div className="formDiv">
        <div className="titleDiv">
          <Title variant="title1" color="black">
            Login
          </Title>
          <Text variant="text2">Seja bem-vindo a nossa comunidade!</Text>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <label htmlFor="email">Email</label>
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

          <Button type="submit">
            Login <StyledPaw variant="paw" font="#FFD7A8" />
          </Button>
        </form>
        <div className="toLogin">
          <Text variant="text2">Ainda não possui cadastro?</Text>
          <Link to="/register">Clique aqui</Link>
        </div>
        <Link to="/">
          <AiFillHome />
        </Link>
      </div>
    </LoginMain>
  );
};
