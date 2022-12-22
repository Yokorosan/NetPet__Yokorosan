import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { iEditFormPet } from "../components/Modal/EditPetsProfile";
import { toast } from "react-toastify";
import { instance } from "../services/api";
import { ModalContext } from "./ModalContext";
import { UserContext } from "./UserContext";

export interface iPetContext {
  addPet: (data: iAddPet) => void;
  petsList: iPetList[];
  userPetsList: (
    data: iPetList,
    setPetsList: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  editPets: (data: iEditFormPet) => void;
  petsInfo: null | iEditFormPet;
  setPetsInfo: React.Dispatch<React.SetStateAction<iEditFormPet | null>>;
  deletePet: () => void;
}

interface iApiError {
  error: string;
}
interface iPetContextProps {
  children: React.ReactNode;
}

interface iAddPet {
  userId?: number;
  name: string;
  type: string;
  picture: string;
  race: string;
}

interface iPetList {
  id?: number;
  userId?: number;
  name?: string;
  type?: string;
  picture?: string;
  race?: string;
}

export const petsContext = createContext<iPetContext>({} as iPetContext);

const PetProvider = ({ children }: iPetContextProps) => {
  const { user } = useContext(UserContext);
  const [petsList, setPetsList] = useState([] as iPetList[]);
  const [petsInfo, setPetsInfo] = useState<iEditFormPet | null>(null);

  const userPetsList = async () => {
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.get(`/users/${user?.id}/pets`);
      setPetsList(response.data);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      console.log(requestError);
    }
  };
  useEffect(() => {
    userPetsList();
  }, []);

  const addPet = async (data: iAddPet) => {
    const id = toast.loading("Please wait...");
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.post("/pets", data);
      setPetsList([...petsList, response.data]);
      toast.update(id, {
        render: `Pet adicionado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.update(id, {
        render: `Erro ao adicionar o pet`,
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
      console.error(requestError);
    }
  };

  const editPets = async (data: iEditFormPet) => {
    const id = toast.loading("Please wait...");
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.patch(`/pets/${petsInfo?.id}`, data);
      toast.update(id, {
        render: `Pet editado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      setPetsList([
        ...petsList.filter((element) => element.id !== petsInfo?.id),
        response.data,
      ]);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.update(id, {
        render: `Ocorreu um erro ao editar o pet`,
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
      console.error(requestError);
    }
  };

  const deletePet = async () => {
    const id = toast.loading("Please wait...");
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      await instance.delete(`/pets/${petsInfo?.id}`);
      toast.update(id, {
        render: `Pet removido com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      setPetsList(petsList.filter((element) => element.id !== petsInfo?.id));
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.update(id, {
        render: `Aconteceu um erro ao remover o Pet`,
        type: "error",
        isLoading: false,
        autoClose: 1500,
      });
      console.error(requestError);
    }
  };

  /* const updatePetList = async () => {

  } */

  return (
    <petsContext.Provider
      value={{
        addPet,
        petsList,
        userPetsList,
        editPets,
        petsInfo,
        setPetsInfo,
        deletePet,
      }}
    >
      {children}
    </petsContext.Provider>
  );
};

export default PetProvider;
