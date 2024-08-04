import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Inicio } from "../pages/inicio/Inicio";

export const AppRouter = () => {
  return (
    <Routes>
     {/* <Route path="/" element={<Inicio />} /> */}

      <Route path="/home" element={<Home />} />

    <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
