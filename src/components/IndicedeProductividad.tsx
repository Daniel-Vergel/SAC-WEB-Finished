import { useQuery } from "@apollo/client";
import { Cell, Pie, PieChart } from "recharts";
import { GET_STATICTEAM } from "../gql/GET-STATICTEAM";
import { SqueletonIndDeProductividad } from "./squeletons/indiceProductividadEquipo/IndProducEq";



export const IndDeProductividad = () => {

  const now = new Date(); // Obtener la fecha y hora actual
  const formattedDate = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)).toISOString();
  const currentDate = formattedDate.split('T')[0]; // Obtener solo la parte de la fecha (YYYY-MM-DD)
  
  
  const { data, loading, error } = useQuery(GET_STATICTEAM, {
    variables: {
       prdCod: 9,
      startDate: currentDate,
      }
    },
  );

  if (loading) return <SqueletonIndDeProductividad/>;
  if (error) return <p>Error: {error.message}</p>;

 

  const staticData = data?.staticTeam[0] 

  const totalStaticTeam = staticData?.en_cordinacion + staticData?.en_proceso + staticData?.en_espera + staticData?.resuelta

  const data01 = [
    {
      name: "Escalados a Coord.",
      value: staticData?.en_cordinacion || 0,
      color: "#3E4EB8",
    },
    {
      name: "En proceso",
      value: staticData?.en_proceso || 0,
      color: "#03BAD9",
    },
    {
      name: "En espera",
      value: staticData?.en_espera || 0,
      color: "#EF6A1F",
    },
    {
      name: "Resueltos",
      value: staticData?.resuelta || 0,
      color: "#00E0A4",
    },
  ];

  const efectividad = parseInt(((staticData?.resuelta / totalStaticTeam) * 100).toFixed(0));

  return (
    <>
      {/*Indice de Productividad*/}
      <div className="flex flex-col  border-1 rounded-10 border-gray3">
        {/*frame 1117*/}
        <div className=" flex  ml-10 mt-10   ">
          <div className=" flex   translate-y-5.5  font-trebuchet font-bold text-16 text-blue2 ">
            Índice de productividad de equipo
          </div>
        </div>

        <div className=" flex  mr-10 ml-10 mt-8 mb-8 border-b border-cyan2"></div>

        {/*frame 1132*/}
        <div className=" flex flex-col ml-10 ">
          {/*frame 1126*/}
          <div className="flex mr-10 border-b border-gray5">
            {/*Chart Graphic*/}
            <div className="flex w-125 h-125 mb-10 ">
              <PieChart
                width={160}
                height={162}
                style={{ transform: "scaleX(-1)" }}
              >
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="34%"
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
              <div className="flex flex-col absolute w-68 h-42 translate-x-29 translate-y-42 ">
                {/*frame 1128*/}
                <div className=" flex ml-5 w-46 h-28 translate-x-10 ">
                  <p className=" flex font-trebuchet font-bold text-24 text-black1 -mt-5">
                    {efectividad}%
                  </p>
                </div>

                {/*frame 1129*/}
                <div className=" flex justify-center w-68 h-14 ">
                  <p className="flex font-trebuchet font-bold text-12 -mt-3 text-gray2 ">
                    efectividad
                  </p>
                </div>
              </div>
            </div>

            {/*frame 13*/}
            <div className="flex flex-col w-full ml-19 mr-10  ">
              {/*frame 7*/}
              <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
                <div className=" grid tracking-1  ">Actividades SWIT</div>
                <div className="grid justify-end  tracking-1  ">{totalStaticTeam || 0}</div>
              </div>

              {/*frame 12*/}
              <div className=" grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                 rounded-full bg-blue4"
                ></div>

                <div className=" flex ml-23  ">Escalados a Coord.</div>

                <div className=" grid justify-end tracking-1  ">{staticData?.en_cordinacion || 0}</div>
              </div>

              {/*frame 10*/}
              <div className=" grid grid-flow-col  font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                 rounded-full bg-cyan3"
                ></div>

                <div className=" flex ml-23  ">En proceso</div>

                <div className=" grid justify-end tracking-1  ">{staticData?.en_proceso || 0}</div>
              </div>

              {/*frame 13*/}
              <div className=" grid grid-flow-col  font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                rounded-full bg-orange2"
                ></div>

                <div className=" flex ml-23  ">En espera</div>

                <div className=" grid justify-end tracking-1  ">{staticData?.en_espera || 0}</div>
              </div>

              {/*frame 14*/}
              <div className=" grid grid-flow-col  font-trebuchet text-14 text-gray2">
                <div
                  className=" absolute translate-y-2 w-14 h-14 
                                rounded-full bg-green3"
                ></div>

                <div className=" flex ml-23  ">Resueltos</div>

                <div className=" grid justify-end tracking-1  ">{staticData?.resuelta || 0}</div>
              </div>
            </div>
          </div>

          {/*frame 14*/}
          <div className="  mt-10 mr-10 ">
            <div className="grid grid-flow-col  ">
              <div className=" font-trebuchet text-14 text-gray1">
                Actividades de hoy
              </div>
              <div className="flex justify-end font-trebuchet font-bold text-16">
                {staticData?.hoy || 0 }
              </div>
            </div>
            <div className=" grid grid-flow-col   ">
              <div className=" font-trebuchet text-14 text-gray1">
                Actividades de previas
              </div>
              <div className="flex justify-end font-trebuchet font-bold text-16">
                {staticData?.antes || 0}
              </div>
            </div>
            <div className=" grid grid-flow-col  ">
              <div className=" font-trebuchet text-14 text-gray1">
                Actividades de Impactadas
              </div>
              <div className="flex justify-end font-trebuchet font-bold text-16">
                {staticData?.impactadas || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
