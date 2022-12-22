import * as yup from "yup";

export const addPetSchema = yup.object().shape({
  name: yup.string().required("Nome do pet obrigatório"),
  type: yup.string().required("Tipo obrigatório"),
  picture: yup.string().required("Foto obrigatório"),
  race: yup.string().required("Raça obrigatório"),
});
