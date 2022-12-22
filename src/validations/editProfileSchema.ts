import * as yup from "yup";

export const EditUserSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Minimo de 8 caracteres")
    .required("Insira uma Nova Senha!"),
});
