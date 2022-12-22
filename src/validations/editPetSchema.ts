import * as yup from "yup";

export const editPetSchema = yup.object().shape({
  name: yup.string(),
  picture: yup.string(),
  race: yup.string(),
  type: yup.string(),
});
