import { createColumnHelper } from "@tanstack/react-table";

import ProgressBar from "@ramonak/react-progress-bar";

import { StatusMediumIcon } from "../../../svg/prioridad/statusMediumIcon";
import { StatusHighIcon } from "../../../svg/prioridad/statusHighIcon";
import { StatusLowIcon } from "../../../svg/prioridad/StatusLowIcon";
import { MenuIcon } from "../../../svg/menuIconGrilla";
import { Cs3Icon } from "../../../svg/cs3Icon";
import { ActivityView } from "../../../_generated_/graphql";
//import { ButtonActivity } from "./buttomActivity";

type Maybe<T> = T | null | undefined;

const columnHelper = createColumnHelper<ActivityView>();

export const Columns = [
  columnHelper.accessor("activityCode", {
    header: () => "", // Esto indica que no habrá encabezado visible para esta columna
    cell: () => (
      <div className="">
        <MenuIcon />
      </div>
    ),
  }),

  columnHelper.accessor("bitTicket", {
    header: () => (
      <>
        <div className="flex">
          <p className=" ">Ticket</p>
        </div>
      </>
    ),
    cell: (info) => (
      <>
        <div className="flex items-center  font-verdana font-bold text-12 ">
          <Cs3Icon />
          {info.getValue()}
        </div>
      </>
    ),
  }),

  columnHelper.accessor("clientName", {
    header: () => (
      <>
        <div className="flex">
          <p className=" ">Cliente</p>
        </div>
      </>
    ),
    cell: (info) => {
      const client = info.getValue();
      return <div className=" font-verdana font-bold text-12">{client}</div>;
    },
  }),

  columnHelper.accessor("description", {
    header: () => (
      <>
        <div className="flex">
          <p className=" ">Asunto</p>
        </div>
      </>
    ),
    cell: (info) => {
      const subject = info.getValue();
      return (
        <div className="flex  font-verdana font-bold text-12 ">{subject}</div>
      );
    },
  }),

  columnHelper.accessor("remainingPercentage", {
    header: () => (
      <>
        <div className="grid ml-14 whitespace-nowrap  ">
          <p className=" ">Tiempo Transcurrido</p>
        </div>
      </>
    ),
    cell: (info) => (
      <div className="ml-14">
        <ProgressBar
          completed={info.row.original.remainingPercentage ?? 0} // Porcentaje completado
          bgColor="#FF4F58" // Color de fondo de la barra de progreso
          labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
          height="20px" // Altura de la barra de progreso
          labelColor="#000" // Color de la etiqueta
          width="190px"
          labelClassName="progressBarLabel"
        />
      </div>
    ),
  }),

  columnHelper.accessor("remainingTime", {
    header: () => (
      <>
        <div className="flex -ml-16 whitespace-nowrap ">
          <p className=" ">Tiempo restante</p>
        </div>
      </>
    ),
    cell: (info) => {
      const time = info.getValue();
      return <div className="ml-21 font-verdana font-bold text-12">{time}</div>;
    },
  }),

  columnHelper.accessor("state", {
    header: () => (
      <>
        <div className="flex">
          <p className=" ">Estado</p>
        </div>
      </>
    ),
    cell: (info) => {
      const estado: Maybe<string> = info.getValue();

      const estadoText = estado ?? "No definido";

      let bgColorClass = "bg-cyan4";
      let textColorClass = "text-cyan2";

      if (estadoText === "EN PROCESO") {
        bgColorClass = "bg-yellow-400";
        textColorClass = "text-yellow-800";
      } else if (estadoText === "COMPLETADO") {
        bgColorClass = "bg-green-400";
        textColorClass = "text-green-800";
      }

      const containerWidth = estadoText.length * 10;

      return (
        <>
          <div className=" flex  justify-start">
            <div
              className={`flex font-worksansM  items-center mt-2  w-77 h-28 rounded ${bgColorClass} `}
              style={{ width: `${containerWidth}px` }}
            >
              <div className={`ml-10 -mt-3  text-12  ${textColorClass}`}>
                {estadoText}
              </div>
            </div>
          </div>
        </>
      );
    },
  }),

  columnHelper.accessor("itemDescription", {
    header: () => (
      <>
        <div className="flex">
          <p className=" ">Prioridad</p>
        </div>
      </>
    ),
    cell: (info) => {
      const priority = info.getValue();

      if (priority === "2. MEDIO")
        return (
          <div className="flex -ml-12.25 font-verdana  text-12">
            <p>{priority}</p>
            <StatusMediumIcon />
          </div>
        );

      if (priority === "1. ALTO")
        return (
          <div className="flex -ml-12.25 font-verdana  text-12">
            <p>{priority}</p>
            <StatusHighIcon />
          </div>
        );
      else if (priority === "3. BAJO")
        return (
          <div className="flex -ml-12.25 font-verdana  text-12">
            <p>{priority}</p>
            <StatusLowIcon />
          </div>
        );
    },
  }),
];
