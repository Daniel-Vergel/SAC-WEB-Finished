import { Cell, Pie, PieChart } from "recharts";
import { ButtonReport } from "./buttom/ButtomReport";
import { useQuery } from "@apollo/client";
import { GET_ACTIVITY_STATE_BY_DATES } from "../../gql/GET-ACTIVITY-BY-DATES";

{
  /* EJEMPLO */
}
const data01 = [
  {
    name: "En proceso",
    value: 3,
    color: "#03BAD9",
  },
  {
    name: "En espera",
    value: 1,
    color: "#EF6A1F",
  },
  {
    name: "Resueltos",
    value: 114,
    color: "#00E0A4",
  },
];

export const IndProductividad = () => {
  const { data, loading, error } = useQuery(GET_ACTIVITY_STATE_BY_DATES, {
    variables: {
      args: {
        FecIni: "2020-01-01T00:00:00Z",
        FecFin: "2024-08-01T00:00:00Z",
      },
    },
  });

  const DATA = data?.getActivityStateByDates ?? {};

  console.log(data);

  return (
    <>
      {/*frame 973*/}
      <div className="grid h-full ml-10 mr-10 border-1 rounded-10 border-gray3">
        {/*frame 1117*/}
        <div className=" grid grid-flow-col  ml-10 mt-10 ">
          <div className=" grid  translate-y-5.5 font-trebuchet font-bold text-16 text-blue2  ">
            Índice de productividad
          </div>
          <div className=" grid justify-end mr-10">
            <ButtonReport />
          </div>
        </div>
        <div className=" grid -mt-16 ml-10 mr-10 mb-16  border-b border-cyan2"></div>

        {/*frame 1132*/}
        <div className="flex ml-10 mr-10">
          {/*Chart Graphic*/}
          <div className="flex w-152 h-152  ">
            <PieChart
              className="  "
              width={162}
              height={165}
              style={{ transform: "scaleX(-1)" }}
            >
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={57}
                outerRadius={80}
                fill="#82ca9d"
                stroke="transparent"
              >
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>

            {/*frame 1131*/}
            <div className=" grid absolute w-68 h-42 translate-x-42 translate-y-55 ">
              {/*frame 1128*/}
              <div className=" w-46 h-28 translate-x-10 ">
                <p className="grid justify-center font-trebuchet font-bold text-24 text-black1 -mt-5">
                  80%
                </p>
              </div>

              {/*frame 1129*/}
              <div className=" w-68 h-14 ">
                <p className="grid justify-center font-trebuchet font-bold text-12 -mt-3 text-gray2 ">
                  efectividad
                </p>
              </div>
            </div>
          </div>

          {/*frame 1129*/}
          <div className="flex flex-col w-full ml-13 ">
            {/*frame 13*/}
            <div className=" flex flex-col w-full  -mt-7  border-b border-gray5  ">
              {/*frame 7*/}
              <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
                <div className=" grid tracking-1  ">Total de actividades</div>
                <div className="grid justify-end  tracking-1  ">118</div>
              </div>

              {/*frame 10*/}
              <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                    rounded-full bg-cyan1"
                ></div>

                <div className=" flex ml-23  ">En proceso</div>

                <div className=" grid justify-end tracking-1  ">3</div>
              </div>

              {/*frame 13*/}
              <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                    rounded-full bg-orange1"
                ></div>

                <div className=" flex ml-23  ">En espera</div>

                <div className=" grid justify-end tracking-1  ">1</div>
              </div>

              {/*frame 12*/}
              <div className=" grid grid-flow-col mt-4 font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                    rounded-full bg-green1"
                ></div>

                <div className=" flex ml-23  ">Resueltos</div>

                <div className=" grid justify-end tracking-1  ">114</div>
              </div>
            </div>

            {/*frame 14*/}
            <div className="flex flex-col w-full  mt-10 ">
              {/*frame 12*/}
              <div className=" grid grid-flow-col  ">
                <div className="font-trebuchet text-13 tracking-1 text-gray1">
                  {" "}
                  Tiempo promedio de respuesta*{" "}
                </div>
                <div className=" grid justify-end -mt-3 font-trebuchet font-bold text-16 tracking-1 text-black1  ">
                  {" "}
                  0H 3M{" "}
                </div>
              </div>

              {/*frame 13*/}
              <div className=" grid grid-flow-col w-272 h-19 mt-4 ">
                <div className="font-trebuchet text-13 tracking-1 text-gray1">
                  {" "}
                  Tiempo promedio de solución{" "}
                </div>
                <div className=" grid justify-end -mt-3 font-trebuchet font-bold text-16 tracking-1 text-black1  ">
                  {" "}
                  9H 20M{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex ml-16 font-trebuchet text-10 text-gray9">
          {" "}
          *Tiempo entre asignación y registro de la primera interacción en una
          actividad{" "}
        </div>
      </div>
    </>
  );
};
