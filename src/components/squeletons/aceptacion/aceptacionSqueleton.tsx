import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Cell, Pie, PieChart } from "recharts";

export const AceptacionSqueleton = () => {
  
  const data01 = [
    {
      name: "Aceptado",
      value: 0,
      color: "#EDEDED",
    },
    {
      name: "Rechazado",
      value: 100,    
      color: "#EDEDED",
    },
    {
      name: "Rechazado por vencimiento",
      value: 0 ,   
      color: "#EDEDED",
    },
  ];
  
  return (
    <>
    {/*frame 973*/}
    <div className=" grid h-full mr-10 border-1 rounded-10 border-gray3">

      {/*frame 1117*/}
      <div className=" grid grid-flow-col ml-10 mt-10 mr-10 h-40 ">
        <div className=" grid    ">
          <Skeleton/>
        </div>
      </div>

      {/*frame 1132*/}
      <div className="flex  mr-10 -mt-10">
        {/*Chart Graphic*/}
        <div className="flex w-152 h-152 ml-10  ">
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
              fill="#3E4EB8"
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
              <p className=" -mt-5">
              <Skeleton/>
              </p>
            </div>

            {/*frame 1129*/}
            <div className=" w-68 h-14 ">
              <p className=" -mt-3 ">
              <Skeleton/>
              </p>
            </div>
          </div>
        </div>

        {/*frame 1129*/}
        <div className="flex flex-col w-full ml-13 ">
          {/*frame 13*/}
          <div className=" flex flex-col w-full -mt-7">
            {/*frame 7*/}
            <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
              <div className=" absolute  w-14 h-14 "></div>
              <div className="  ml-23  "><Skeleton/></div>
            </div>

            {/*frame 10*/}
            <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
              <div
                className=" absolute  w-14 h-14 "></div>
              <div className="  ml-23  "><Skeleton/></div>
            </div>

            {/*frame 13*/}
            <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
              <div
                className=" absolute  w-14 h-14 "></div>
              <div className="  ml-23  "><Skeleton/></div>
            </div>

            {/*frame 12*/}
            <div className=" grid grid-flow-col mt-4  font-trebuchet text-14 text-gray2">
              <div
                className=" absolute  w-14 h-14 "></div>
              <div className="  ml-23  "><Skeleton/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
};

