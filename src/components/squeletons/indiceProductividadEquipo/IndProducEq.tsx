import { Cell, Pie, PieChart } from "recharts";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export const SqueletonIndDeProductividad = () => {

  const data01 = [
    {
      name: "Escalados a Coord.",
      value: 0,
      color: "#3E4EB8",
    },
    {
      name: "En proceso",
      value: 0,
      color: "#03BAD9",
    },
    {
      name: "En espera",
      value: 100,
      color: "#EDEDED",
    },
    {
      name: "Resueltos",
      value: 0,
      color: "#00E0A4",
    },
  ];

  return (
    <>
      {/*Indice de Productividad*/}
      <div className="flex flex-col ">
        {/*frame 1117*/}
        <div className="  mt-10 ml-10 mr-10   ">
          <div className="      ">
            <Skeleton/>
          </div>
        </div>

        <div className=" flex  mr-10 ml-10 mt-8 mb-8 "></div>

        {/*frame 1132*/}
        <div className=" flex flex-col ml-10 ">
          {/*frame 1126*/}
          <div className="flex mr-10 ">
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
                <div className="  ml-3 w-46 h-28 translate-x-10 ">
                  <p className="  font-bold text-24 text-black1 -mt-5">
                  <Skeleton/>
                  </p>
                </div>

                {/*frame 1129*/}
                <div className="  w-68 h-14 ">
                  <p className=" font-bold text-12 -mt-3 text-gray2 ">
                  <Skeleton/>
                  </p>
                </div>
              </div>
            </div>

            {/*frame 13*/}
            <div className="flex flex-col w-full ml-19 mr-10  ">
              {/*frame 7*/}
              <div className=" grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2">
                <div className=" absolute translate-y-2 w-14 h-14 "></div>
                <div className=""><Skeleton/></div>
              </div>

              {/*frame 12*/}
              <div className=" grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2">
                <div className=" absolute translate-y-2 w-14 h-14 "></div>
                <div className=""><Skeleton/></div>
              </div>

              {/*frame 10*/}
              <div className=" grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2">
                <div className=" absolute translate-y-2 w-14 h-14 "></div>
                <div className=""><Skeleton/></div>
              </div>

              {/*frame 13*/}
              <div className=" grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2">
                <div className=" absolute translate-y-2 w-14 h-14 "></div>
                <div className=""><Skeleton/></div>
              </div>

            
            
            </div>
          </div>

          {/*frame 14*/}
          <div className="  mt-10 mr-10 ">
            <div className="grid grid-flow-col  ">
              <div className=" font-trebuchet text-14 text-gray1">
              <Skeleton/>
              </div>
              <div className=" grid justify-end">
                <div className=" w-20  "><Skeleton/></div>
                </div>
            </div>
            <div className=" grid grid-flow-col   ">
              <div className=" font-trebuchet text-14 text-gray1">
              <Skeleton/>
              </div>
              <div className=" grid justify-end">
                <div className=" w-20  "><Skeleton/></div>
                </div>
            </div>
            <div className=" grid grid-flow-col  ">
              <div className=" font-trebuchet text-14 text-gray1">
              <Skeleton/>
              </div>
              <div className=" grid justify-end">
                <div className=" w-20  "><Skeleton/></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
