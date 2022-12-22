import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ModalContext } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { EditUserSchema } from "../../../validations/editProfileSchema";
import { Input } from "../../Inputs/style";
import { ieditForm } from "../../Modal/EditProfileUser";
import { StyledForm } from "../style";

export const FormEditProfile = () => {
  const { user, userEditProfile } = useContext(UserContext);
  const { closeModalEditUser } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ieditForm>({
    resolver: yupResolver(EditUserSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const submit: SubmitHandler<ieditForm> = (data) => {
    userEditProfile(data);
    closeModalEditUser();
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">Nome</label>
      <Input
        id="name"
        variant="inputPrimary"
        type="name"
        placeholder="Nome"
        {...register("name")}
      />
      <label htmlFor="email">E-mail</label>
      <Input
        id="email"
        variant="inputPrimary"
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <label htmlFor="phone">Telefone</label>
      <Input
        id="phone"
        variant="inputPrimary"
        type="phone"
        placeholder="Telefone"
        {...register("phone")}
      />
      <label htmlFor="password">Senha</label>
      <Input
        id="password"
        variant="inputPrimary"
        type="password"
        placeholder="Password"
        {...register("password")}
      ></Input>
      <p>{errors.password?.message}</p>
      <button type="submit">Editar Perfil</button>
    </StyledForm>
  );
};
