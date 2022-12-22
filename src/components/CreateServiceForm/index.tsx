import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iServiceData } from "../../pages/serviceProvider";
import { serviceSchema } from "../../validations/createServiceSchema";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import {
  iNewServiceData,
  ServiceContext,
} from "../../contexts/ServicesContext";
import { Input } from "../Inputs/style";
import { Select } from "../Inputs/Select/style";
import { StyledForm } from "../Form/style";

export const CreateServiceForm = () => {
  const { user } = useContext(UserContext);
  const { setModalCreate } = useContext(ModalContext);
  const { createService } = useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iServiceData>({ resolver: yupResolver(serviceSchema) });

  const createRequest = (data: iNewServiceData) => {
    const newData = {
      userId: user?.id,
      servicename: data.servicename,
      cnpj: data.cnpj,
      phone: data.phone,
      description: data.description,
      typeofservice: data.typeofservice,
      images: data.images,
      logo: data.logo,
    };
    createService(newData, setModalCreate);
  };
  return (
    <StyledForm id="createService" onSubmit={handleSubmit(createRequest)}>
      <label htmlFor="">Nome do serviço</label>
      <Input
        variant="inputPrimary"
        type="text"
        placeholder="nome do serviço"
        {...register("servicename")}
      />
      {errors.servicename?.message}
      <label htmlFor="">CNPJ</label>
      <Input
        variant="inputPrimary"
        type="text"
        placeholder="CNPJ"
        {...register("cnpj")}
      />
      {errors.cnpj?.message}
      <label htmlFor="">Telefone</label>
      <Input
        variant="inputPrimary"
        type="number"
        placeholder="(00)0000-0000"
        {...register("phone")}
      />
      {errors.phone?.message}
      <label htmlFor="">Descrição</label>
      <Input
        variant="inputPrimary"
        type="text"
        placeholder="Conte sobre o seu serviço"
        {...register("description")}
      />
      {errors.description?.message}
      <label htmlFor="">Tipo de serviço</label>
      <Select
        variant="selectPrimary"
        width="100%"
        height="30px"
        id=""
        placeholder="Em qual categoría o seu serviço se encaixa?"
        {...register("typeofservice")}
      >
        <option value="Veterinaria">Veterinária</option>
        <option value="Hotel">Hotel</option>
        <option value="Petshop">PetShop</option>
        <option value="Outros">Outros</option>
      </Select>
      {errors.typeofservice?.message}
      <label htmlFor="">Imagens do serviço</label>
      <Input
        variant="inputPrimary"
        type="text"
        placeholder="url da imagem"
        {...register("images")}
      />
      {errors.images?.message}
      <label htmlFor="">Logo da empresa</label>
      <Input
        variant="inputPrimary"
        type="text"
        placeholder="url da imagem"
        {...register("logo")}
      />
      {errors.logo?.message}
      <Button type="submit">Cadastrar serviço</Button>
    </StyledForm>
  );
};
