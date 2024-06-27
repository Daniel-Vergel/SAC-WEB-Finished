import ProgressBar from "@ramonak/react-progress-bar";
import { StarIcons } from "../iconos.jsx/StarIcons";
import { ButtonReport } from "./buttom/ButtomReport";

export const CalifDelCliente = () => {
  return (
    <div className="  border-1 mr-10 border-gray3 rounded-10">
      <div className=" grid grid-flow-col  ml-17 mt-10">
        <div className=" grid w-257 h-21  translate-y-5.5  font-trebuchet font-bold text-16 text-blue2 ">
          Calificación del cliente
        </div>

        <div className=" flex justify-end mr-10">
          <ButtonReport />
        </div>
      </div>

      <div className=" grid mr-10 ml-15px mb-8 border-b border-cyan2"></div>

      {/*Frame 1113*/}
      <div className="grid  ml-16  h-56  ">
        {/*Frame 1115*/}
        <div className=" grid mr-60 ">
          {/*Frame 1114*/}
          <div className="grid grid-flow-col   ">
            <div className=" grid w-40 h-40 ">
              <StarIcons />
            </div>

            <div className=" w-40 h-40 ">
              <StarIcons />
            </div>

            <div className=" w-40 h-40 ">
              <StarIcons />
            </div>

            <div className=" w-40 h-40  ">
              <StarIcons />
            </div>

            <div className=" w-40 h-40  ">
              <StarIcons />
            </div>
          </div>

          {/*Frame 1116*/}
          <div className="w-200 h-16 -mt-5 border-blue-500">
            <p className=" font-trebuchet text-14 text-gray2 ml-10">
              {" "}
              2477 calificaciones
            </p>
          </div>
        </div>
        <div className=" grid justify-end  mt-5 mr-10  -translate-y-60 font-trebuchet font-bold text-32 text-black1">
          5,0
        </div>
      </div>

      <hr className=" grid mt-7 mr-10 ml-15px mb-8 bg-gray2 " />

      {/*Frame 1119*/}
      <div className=" grid grid-flow-col mr-10 ml-12 mb-6px ">
        <p className="grid font-trebuchet text-12 text-gray1">Excelente</p>
        <div className="mt-4 ml-32">
          <ProgressBar
            completed={50} // Porcentaje completado
            bgColor="#00BB89" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="158px"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <p className="grid justify-end font-trebuchet text-12 text-gray1">
          2077
        </p>
      </div>

      {/*Frame 1120*/}
      <div className="  grid grid-flow-col mr-10 ml-12 mb-6px  ">
        <p className="grid font-trebuchet text-12 text-gray1">Bueno</p>
        <div className="mt-4 ml-50">
          <ProgressBar
            completed={50} // Porcentaje completado
            bgColor="#03BAD9" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="158px"
            labelClassName="progressBarLabel hiddenLabel"
          />
        </div>
        <p className="grid justify-end font-trebuchet text-12 text-gray1">
          112
        </p>
      </div>

      {/*Frame 1121*/}
      <div className="  grid grid-flow-col mr-10 ml-12 mb-6px ">
        <p className="grid font-trebuchet text-12 text-gray1">Regular</p>
        <div className="mt-4 ml-39">
          <ProgressBar
            completed={50} // Porcentaje completado
            bgColor="#053BF1" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="158px"
            labelClassName="progressBarLabel hiddenLabel"
          />
        </div>
        <p className="grid justify-end font-trebuchet text-12 text-gray1">25</p>
      </div>

      {/*Frame 1122*/}
      <div className="  grid grid-flow-col mr-10 ml-12 mb-6px  ">
        <p className="grid font-trebuchet text-12 text-gray1">Malo</p>
        <div className="mt-4 ml-52">
          <ProgressBar
            completed={50} // Porcentaje completado
            bgColor="#F18905" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="158px"
            labelClassName="progressBarLabel hiddenLabel"
          />
        </div>
        <p className="grid justify-end font-trebuchet text-12 text-gray1">10</p>
      </div>

      {/*Frame 1123*/}
      <div className=" grid grid-flow-col mr-10 ml-12 mb-3  ">
        <p className="grid font-trebuchet text-12 text-gray1">Pesimo</p>
        <div className="mt-4 ml-39">
          <ProgressBar
            completed={50} // Porcentaje completado
            bgColor="#FB0B0B" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="158px"
            labelClassName="progressBarLabel hiddenLabel"
          />
        </div>
        <p className=" grid justify-end font-trebuchet text-12 text-gray1">
          18
        </p>
      </div>
    </div>
  );
};
