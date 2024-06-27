import { Welcome } from "../../Welcome";
import { ReportedeEfectividad } from "../../ReportedeEfectividad";
import { ActividadesDeHoy } from "../../ActividadesDeHoy";
import { IndDeProductividad } from "../../IndicedeProductividad";
import { TopDeConsultores } from "../../TopDeConsultores";
import { Menu } from "../../menu";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../../navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const Home: React.FC = () => {
  const { menuOpen } = useSelector((state: RootState) => state.slidebarState);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userName = params.get("userName");

  useEffect(() => {
    //console.log("welcome");
    // Aquí puedes realizar acciones adicionales basadas en el userName, como la autenticación.
    // Por ejemplo, podrías realizar una solicitud al servidor para autenticar al usuario.
    if (!userName) {
      // Si no hay userName en la URL, redirige al usuario a otra página
      navigate("/home");
    }
  }, [userName, navigate]);

  return (
    <>
      <div className=" template-main grid">
        {/*main*/}
        <div className=" header grid bg-white  border-b shadow-lg border-gray3 ">
          <Navbar />
        </div>

        {/*body*/}
        <div className=" body grid">
          <div
            className={`template-body gap-y-16 gap-x-16 grid `}
            style={{
              gridTemplateColumns: menuOpen
                ? "60px 1fr 1fr 1fr 1fr"
                : "200px 1fr 1fr 1fr 1fr",
            }}
          >
            {/*SlideBar*/}
            <div className=" slidebar grid">
              <Menu />
            </div>

            {/*Welcome*/}
            <div className=" welcome mt-10 ">
              <Welcome />
            </div>

            {/*Reporte de efectividad*/}
            <div className=" reporte-efectividad mt-10 ">
              <ReportedeEfectividad />
            </div>

            {/*Actividades de hoy*/}
            <div className=" actividades mt-10">
              <ActividadesDeHoy />
            </div>

            {/*Productividad de equipo*/}
            <div className=" productividad-equipo grid mt-10  ">
              <IndDeProductividad />

              {/*Top de consultores*/}
              <div className=" top ">
                <TopDeConsultores />
              </div>
            </div>
          </div>
        </div>

        {/*main*/}
      </div>
    </>
  );
};
