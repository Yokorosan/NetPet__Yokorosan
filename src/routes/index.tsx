import { Routes, Route } from "react-router";
import { RegisterPage } from "../pages/register";
import { Login } from "../pages/Login";
import RegisterCompanyPage from "../pages/RegisterCompanyPage";
import LandingPage from "../pages/landingPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { UserDashBoard } from "../pages/UserDashBoard";
import { NotFound } from "../pages/NotFound";
import Profile from "../pages/UserProfile";
import { ServiceProvider } from "../pages/serviceProvider";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/registerCompany" element={<RegisterCompanyPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboardProviderService" element={<ServiceProvider/>}/>
        <Route path="/userProfile" element={<Profile />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
