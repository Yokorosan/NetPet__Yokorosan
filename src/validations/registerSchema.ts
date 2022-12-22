import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("É necessário colocar um nome"),
  password: yup.string().min(8, "Minimo de 8 caracteres").required(),
  "confirm-password": yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Confirmação de senha deve ser igual a senha"
    ),
  email: yup.string().required("Email é necessário"),
  phone: yup.string().required("Insira um telefone"),
  type: yup.string(),
});
