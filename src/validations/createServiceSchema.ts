import * as yup from "yup";

export const serviceSchema = yup.object().shape({
    servicename: yup.string().required("Nome do serviço obrigatório"),
    cnpj:  yup.string().required("CNPJ obrigatório"),
    phone: yup.string().required("informe o telefone"),
    description: yup.string().required("É necessário adcionar uma descrição"),
    typeofservice: yup.string().required("Selecione o tipo de serviço"),
    images: yup.string().required("Adcione imagens do serviço"),
    logo: yup.string().required("Logo obrigatória")
})