import Select from "react-select";

import { IndProductividad } from "./complementos/Ind-Productividad";
import { IndAceptacion } from "./complementos/Ind-Aceptacion";
import { CalifDelCliente } from "./complementos/Calif-Del-Cliente";
import { Print } from "./iconos.jsx/Print";

const optionsMonths = [
  { value: "3 meses", label: "Ultimos 3 meses" },
  { value: "6 meses", label: "Ultimos 6 meses" },
  { value: "9 meses", label: "Ultimos 9 meses" },
];

const optionsReport = [
  { value: "Reporte 1", label: "Reporte 1" },
  { value: "Reporte 2", label: "Reporte 2" },
  { value: "Reporte 3", label: "Reporte 3" },
];

export const ReportedeEfectividad = () => {
  return (
    <>
      {/*Frame 1141*/}
      <div className="  flex flex-col  border-2 border-gray3 rounded-10 ">
        {/*Frame 1015*/}
        <div className=" grid grid-flow-col  mb-10 ml-10 mt-10 mr-10 ">
          {/*Frame 1144*/}
          <div className=" flex w-461 h-40 ">
            <p className=" font-trebuchet font-bold text-24 text-blue1 ">
              {" "}
              Reporte de efectividad{" "}
            </p>

            {/*Button Design System */}
            <div className=" ml-21 font-roboto text-16 text-gray8">
              <Select options={optionsMonths} defaultValue={optionsMonths[0]} />
            </div>
          </div>

          {/*Button Design System*/}
          <div className=" grid justify-end font-roboto text-16 text-gray8">
            <Select
              options={optionsReport}
              placeholder={
                <p className=" flex items-center font-roboto text-16 text-gray8 ">
                  <Print />
                  <p className="ml-10">Imprimir Reporte</p>
                </p>
              }
            />
          </div>
        </div>

        {/*Cuerpo*/}
        <div className=" reporte-cuerpo grid  mb-12  ">
          {/*Productividad*/}
          <div className=" productividad ">
            <IndProductividad />
          </div>

          {/*Aceptacion*/}
          <div className=" aceptacion ">
            <IndAceptacion />
          </div>

          {/*Calificacion*/}
          <div className=" calificacion ">
            <CalifDelCliente />
          </div>
        </div>
      </div>
    </>
  );
};
