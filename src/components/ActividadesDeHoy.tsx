import Select from "react-select";

import { Print } from "./iconos.jsx/Print";
import { Grilla } from "./complementos/grilla/Grilla";

const optionsList = [
  { value: "listado 1", label: "Listado 1" },
  { value: "listado 2", label: "Listado 2" },
  { value: "listado 3", label: "Listado 3" },
];

export const ActividadesDeHoy = () => {
  return (
    <div className=" grid border-1 border-gray3 rounded-10">
      {/*Header*/}
      <div className=" grid grid-flow-col ml-10 mt-10 mr-10  ">
        <div className=" flex ">
          <p className=" font-trebuchet font-bold text-24 text-blue1 ">
            {" "}
            Actividades de la semana{" "}
          </p>
        </div>

        <div className=" grid grid-flow-col justify-self-end">
          <div className="flex items-center mr-40">
            <input
              type="checkbox"
              id="mostrarActividades"
              className=" w-20 h-20 mr-7 border-2 border-cyan1"
            />
            <label
              htmlFor="mostrarActividades"
              className="font-roboto text-16 text-gray8"
            >
              Mostrar actividades resueltas
            </label>
          </div>

          <div className=" grid justify-end font-roboto text-16 text-gray8">
            <Select
              options={optionsList}
              placeholder={
                <p className=" flex items-center font-roboto text-16 text-gray8 ">
                  <Print />
                  <p className="ml-10">Imprimir Listado</p>
                </p>
              }
            />
          </div>
        </div>
      </div>

      {/*Targets*/}
      <div className=" grid grid-cols-2 ml-10 mr-10 mt-12 ">
        {/* Seccion 1*/}
        <div className=" grid  cards-template1 justify-start ">
          {/*Overview*/}
          <div className=" card1 w-119.5 h-80 mr-12 rounded-10 bg-orange3">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              En espera{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-orange2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              1
            </div>
          </div>

          {/*Overview*/}
          <div className=" card2 w-119.5 h-80 mr-12 rounded-10 bg-red2">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Replicadas{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-red3"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              1
            </div>
          </div>

          {/*Overview*/}
          <div className=" card3 w-119.5 h-80 mr-12 rounded-10 bg-cyan4">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              En proceso{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-cyan2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              4
            </div>
          </div>

          {/*Overview*/}
          <div className=" card4 w-119.5 h-80 rounded-10 bg-green4">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Resueltas hoy{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-green1"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              1
            </div>
          </div>
        </div>

        {/* Seccion 2*/}
        <div className=" grid cards-template2 ">
          {/*Overview*/}
          <div className=" card5 w-119.5 h-80  rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              En espera{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              2
            </div>
          </div>

          {/*Overview*/}
          <div className=" card6 w-119.5 h-80 ml-13 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Replicadas{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              2
            </div>
          </div>

          {/*Overview*/}
          <div className=" card7 w-119.5 h-80 ml-12 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              En proceso{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              5
            </div>
          </div>

          {/*Overview*/}
          <div className=" card8 w-119.5 h-80 ml-12 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Resueltas hoy{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
              5
            </div>
          </div>
        </div>
      </div>

      {/*Tabla*/}
      <div className=" ml-10 mr-10 mt-18 mb-5 overflow-auto  ">
        <Grilla />
      </div>
    </div>
  );
};
