import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email:yup.string().required('O e-mail é obrigatorio'),
    password:yup.string().required('A senha é obrigatoria.')
});