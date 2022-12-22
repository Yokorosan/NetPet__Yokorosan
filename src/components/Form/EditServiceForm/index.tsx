import { useContext } from "react";
import { toast } from "react-toastify";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { editServiceSchema } from "../../../validations/editServiceSchema";
import { instance } from "../../../services/api";
import { ModalContext } from "../../../contexts/ModalContext";
import { ServiceContext } from "../../../contexts/ServicesContext";
import { StyledForm } from "../style";
import { Input } from "../../Inputs/style";
import { Select } from "../../Inputs/Select/style";

export interface iServiceDataEdit {
  cnpj?: string;
  description?: string;
  id?: number;
  images?: string[];
  logo?: string;
  phone?: string;
  servicename?: string;
  typeofservice?: string;
  userId?: number;
}

export const EditServiceForm = () => {
  const { setModalEdit } = useContext(ModalContext);
  const { service, servicesUser, setServicesUser, deleteService } =
    useContext(ServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iServiceDataEdit>({
    resolver: yupResolver(editServiceSchema),
    defaultValues: {
      servicename: service?.servicename,
      cnpj: service?.cnpj,
      phone: service?.phone,
      description: service?.description,
      typeofservice: service?.typeofservice,
      images: service?.images,
      logo: service?.logo,
    },
  });

  const patchService = async (data: iServiceDataEdit) => {
    const token = localStorage.getItem("@NetPetToken:");
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const resp = await instance.patch(`/services/${service?.id}`, data);
      toast.success("Seviço editado com sucesso", {
        isLoading: false,
        autoClose: 1000,
      });
      setServicesUser([
        ...servicesUser.filter(
          (element) => element.servicename !== service?.servicename
        ),
        resp.data,
      ]);
      console.log(resp);
      setModalEdit(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        toast.error(error.message, {
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <StyledForm id="editService" onSubmit={handleSubmit(patchService)}>
      <label htmlFor="servicename">Nome do serviço</label>
      <Input
        id="servicename"
        variant="inputPrimary"
        type="text"
        placeholder="nome do serviço"
        {...register("servicename")}
      />
      {errors.servicename?.message}
      <label htmlFor="cnpj">CNPJ</label>
      <Input
        id="cnpj"
        variant="inputPrimary"
        type="text"
        placeholder="CNPJ"
        {...register("cnpj")}
      />
      {errors.cnpj?.message}
      <label htmlFor="phone">Telefone</label>
      <Input
        id="phone"
        variant="inputPrimary"
        type="number"
        placeholder="(00)0000-0000"
        {...register("phone")}
      />
      {errors.phone?.message}
      <label htmlFor="description">Descrição</label>
      <Input
        id="description"
        variant="inputPrimary"
        type="text"
        placeholder="Conte sobre o seu serviço"
        {...register("description")}
      />
      {errors.description?.message}
      <label htmlFor="typeofservice">Tipo de serviço</label>
      <Select
        variant="selectPrimary"
        height="30px"
        width="100%"
        id="typeofservice"
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
      <Button type="submit">Editar serviço</Button>
    </StyledForm>
  );
};
