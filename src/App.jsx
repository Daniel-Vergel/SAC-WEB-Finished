import './App.css'
import { IndDeProductividad } from './components/IndicedeProductividad'

import { Welcome } from './components/Welcome'
import { ReportedeEfectividad } from "./components/ReportedeEfectividad";
import { ActividadesDeHoy } from "./components/ActividadesDeHoy";
import { TopDeConsultores } from "./components/TopDeConsultores";
import { Menu } from "./components/menu";

function App() {
  return (
    <>
      {/*main*/}
      <div className="grid grid-flow-col h-screen ">
        {/*header
        <div className=" header bg-white  border-b shadow-lg border-gray3 "></div>*/}
        <div>
          <Menu />
        </div>

        {/*body*/}
        <div className=" template-body p-10 gap-y-16 gap-x-16 grid ">
          {/*Welcome*/}
          <div className=" welcome ">
            <Welcome />
          </div>

          {/*Reporte de efectividad*/}
          <div className=" reporte-efectividad ">
            <ReportedeEfectividad />
          </div>

          {/*Actividades de hoy*/}
          <div className=" actividades">
            <ActividadesDeHoy />
          </div>

          {/*Productividad de equipo*/}
          <div className=" productividad-equipo grid  ">
            <IndDeProductividad />

            {/*Top de consultores*/}
            <div className=" top ">
              <TopDeConsultores />
            </div>
          </div>
        </div>

        {/*Slidebar
        <div className=" slidebar">
          <Menu />
        </div>*/}
      </div>
    </>
  );
}

export default App
