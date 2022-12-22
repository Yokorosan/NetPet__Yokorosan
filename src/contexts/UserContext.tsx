import { createContext, useEffect, useState } from "react";
import {/*  useLocation, */ useNavigate } from "react-router-dom";
import { iRegisterUser } from "../pages/register";
import { instance } from "../services/api";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { iLoginFormData } from "../pages/Login";
import { ieditForm } from "../components/Modal/EditProfileUser";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  userRegisterFunction: (data: iRegisterUser) => void;
  userRegisterCompanyFunction: (data: iRegisterUser) => void;
  userLoginFunction: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  user: iUser | null;
  loading: boolean;
  size: number;
  userEditProfile: (data: ieditForm) => void;
  logoutFunction: () => void;
}

interface iUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  password: string;
  type: string;
}
interface iApiError {
  error: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(0);
  const navigate = useNavigate();
  /* const location = useLocation(); */

  const userProfile = async () => {
    const token = localStorage.getItem("@NetPetToken:");
    const tokenId = localStorage.getItem("@NetPetId:");
    try {
      instance.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await instance.get(`/users/${tokenId}`);
      setUser(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setSize(window.innerWidth);
    userProfile();
  }, []);

  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });

  const userRegisterFunction = async (data: iRegisterUser) => {
    const newData = {
      ...data,
      type: "user",
    };
    const id = toast.loading("Please wait...");
    try {
      await instance.post("/register", newData);
      toast.update(id, {
        render: `Cadastro realizado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === "Email already exists")
          toast.update(id, {
            render: `E-mail já existe`,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        console.error(error);
      }
    }
  };

  const userRegisterCompanyFunction = async (data: iRegisterUser) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      type: "service",
    };

    const id = toast.loading("Please wait...");
    try {
      await instance.post("/register", newData);
      toast.update(id, {
        render: `Cadastro realizado com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === "Email already exists")
          toast.update(id, {
            render: `E-mail já existe`,
            type: "error",
            isLoading: false,
            autoClose: 1500,
          });
        console.error(error);
      }
    }
  };
  
  const userLoginFunction = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const id = toast.loading("Please wait...");
    try {
      setLoading(true);
      const response = await instance.post("/login", data);
      localStorage.setItem("@NetPetToken:", response.data.accessToken);
      localStorage.setItem("@NetPetId:", response.data.user.id);
      /* const toNavigate = location.state?.from.pathname || "dashboard"; */
      setUser(response.data.user)
      if (response.data.user.type === "user") {
        navigate("/dashboard");
        toast.update(id, {
          render: `Seja Bem Vindo ${response.data.user.name}`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
        console.log("entrou aqui")
      } else {
        navigate("/dashboardProviderService");
        toast.update(id, {
          render: `Seja Bem Vindo ${response.data.user.name}`,
          type: "success",
          isLoading: false,
          autoClose: 1500,
        });
      }
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.update(id, {
        render: `Aconteceu um Erro`,
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
      console.log(requestError);
    } finally {
      setLoading(false);
    }
  };

  const logoutFunction = async () => {
    const id = toast.loading("Please wait...");

    setTimeout(() => {
      toast.update(id, {
        render: `Até a Proxima`,
        type: "warning",
        isLoading: false,
        autoClose: 1000,
      });
      localStorage.removeItem("@NetPetToken:");
      localStorage.removeItem("@NetPetId:");

      setUser(null);
    }, 1000);
  };

  const userEditProfile = async (data: ieditForm) => {
    const id = toast.loading("Please wait...");
    try {
      const token = localStorage.getItem("@NetPetToken:");
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const response = await instance.patch(`/users/${user?.id}`, data);
      toast.update(id, {
        render: `Informação alterada com sucesso`,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      setUser(response.data);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.update(id, {
        render: `Aconteceu um Erro`,
        type: "error",
        isLoading: false,
        autoClose: 1000,
      });
      console.log(requestError);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRegisterFunction,
        userLoginFunction,
        user,
        userEditProfile,
        userRegisterCompanyFunction,
        loading,
        size,
        logoutFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
