import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iServiceData } from "../pages/serviceProvider";
import { instance } from "../services/api";
import { UserContext } from "./UserContext";

interface iServiceContextProps {
  children: React.ReactNode;
}
export interface iDataCategory {
  cnpj: string;
  description: string;
  id: number;
  images: string;
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId: number;
}

export interface iNewServiceData {
  cnpj: string;
  description: string;
  images: string[];
  logo: string;
  phone: string;
  servicename: string;
  typeofservice: string;
  userId?: number;
}
interface iServiceContext {
  newNavBar: () => iDataCategory[];
  servicesList: iDataCategory[];
  newServicesListBtn: iDataCategory[];
  newServiceListInput: iDataCategory[];
  setSearchBtn: React.Dispatch<React.SetStateAction<string>>;
  setRenderList: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  renderList: iDataCategory[];
  searchBtn: string;
  dataValueInput: string;
  setDataValueInput: React.Dispatch<React.SetStateAction<string>>;
  searchResults: iDataCategory[];
  setSearchResults: React.Dispatch<React.SetStateAction<iDataCategory[]>>;
  serviceClick: iDataCategory;
  setServiceClick: React.Dispatch<React.SetStateAction<iDataCategory>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  deleteService: (service: iServiceData) => void;
  servicesUser: iServiceData[];
  setServicesUser: React.Dispatch<React.SetStateAction<iServiceData[]>>;
  createService: (
    newData: iNewServiceData,
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  setService: React.Dispatch<React.SetStateAction<iServiceData | null>>;
  service: iServiceData | null;
}

export const ServiceContext = createContext<iServiceContext>(
  {} as iServiceContext
);

const ServiceProvider = ({ children }: iServiceContextProps) => {
  const [dataValueInput, setDataValueInput] = useState("");
  const [searchResults, setSearchResults] = useState<iDataCategory[]>([]);
  const [serviceClick, setServiceClick] = useState({} as iDataCategory);
  const [servicesList, setServicesList] = useState<iDataCategory[]>([]);
  const [searchBtn, setSearchBtn] = useState("");
  const [renderList, setRenderList] = useState<iDataCategory[]>([]);
  const [servicesUser, setServicesUser] = useState<iServiceData[]>([]);
  const [service, setService] = useState<iServiceData | null>(null);
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (user !== null) {
      getServices();
      filterUserService();
    }
  }, [user]);

  const getServices = async () => {
    try {
      const { data } = await instance.get(`/services/`);
      setServicesList(data);
      setRenderList(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  const filterUserService = async () => {
    try {
      const { data } = await instance.get(`users/${user?.id}/services`);
      setServicesUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };
  const createService = async (
    newData: iNewServiceData,
    setModalCreate: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const id = toast.loading("Please wait...");
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await instance.post("/services", newData);
      setServicesUser([...servicesUser, data]);
      toast.update(id, {
        render: `Cadastro de serviço realizado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      setModalCreate(false);
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: `Ocorreu um problema com o cadastro`,
        type: "warning",
        isLoading: false,
        autoClose: 1500,
      });
    }
  };

  const deleteService = async (service: iServiceData) => {
    const token = localStorage.getItem("@NetPetToken:");
    const id = toast.loading("Please wait...");
    try {
      instance.defaults.headers.authorization = `Bearer ${token}`;
      await instance.delete(`/services/${service.id}`);
      toast.update(id, {
        render: `Serviço excluido com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        toast.update(id, {
          render: `Ocorreu um erro ao excluir o serviço`,
          type: "warning",
          isLoading: false,
          autoClose: 1500,
        });
      }
    }
    setTimeout(() => {
      setServicesUser(
        servicesUser.filter(
          (element) => element.servicename !== service?.servicename
        )
      );
    }, 1000);
  };

  const newNavBar = () =>
    servicesList.filter(
      (service, index) =>
        servicesList.findIndex(
          (element) => element.typeofservice === service.typeofservice
        ) === index
    );

  const newServicesListBtn = servicesList.filter((item) =>
    searchBtn === ""
      ? true
      : item.typeofservice.toLowerCase().includes(searchBtn.toLowerCase())
  );
  const newServiceListInput = servicesList.filter((item) =>
    dataValueInput === ""
      ? true
      : item.servicename
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase()) ||
        item.typeofservice
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase()) ||
        item.description
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(dataValueInput.toLowerCase())
  );

  function openModal() {
    setModal(true);
  }
  return (
    <ServiceContext.Provider
      value={{
        servicesList,
        newNavBar,
        newServicesListBtn,
        newServiceListInput,
        setSearchBtn,
        renderList,
        setRenderList,
        searchBtn,
        dataValueInput,
        setDataValueInput,
        searchResults,
        setSearchResults,
        serviceClick,
        setServiceClick,
        openModal,
        setModal,
        modal,
        deleteService,
        servicesUser,
        setServicesUser,
        createService,
        setService,
        service,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
