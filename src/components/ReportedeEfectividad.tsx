import { IndProductividad } from "./complementos/Ind-Productividad";
import { IndAceptacion } from "./complementos/Ind-Aceptacion";
import { CalifDelCliente } from "./complementos/Calif-Del-Cliente";
import { InputSelectMonths } from "./complementos/inputSelect.tsx/InputSelectMonths";
import { InputReports } from "./complementos/inputSelect.tsx/InputSelectReport";


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
            <InputSelectMonths/>
          </div>

          {/*Button Design System*/}
          <div className=' grid justify-end'>
            <InputReports />
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
