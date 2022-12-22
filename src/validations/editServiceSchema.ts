import * as yup from "yup";

export const editServiceSchema = yup.object().shape({
    servicename: yup.string(),
    cnpj:  yup.string(),
    phone: yup.string(),
    description: yup.string(),
    typeofservice: yup.string(),
    images: yup.string(),
    logo: yup.string()
})