import { Cell, Pie, PieChart } from "recharts";
import { ButtonReport } from "../../complementos/buttom/ButtomReport";
import Skeleton from "react-loading-skeleton";

export const SqueletonIndiceProductividad = () => {

    const data01 = [
      {
        name: '', 
        value: 0, 
        color: "#EDEDED", 
      },
      {
        name: '',
        value: 100, 
        color: "#EDEDED",
      },
      {
        name: '', 
        value: 0, 
        color: "#EDEDED", 
      },
    ];
  
  
  return (
    <>
    {/*frame 973*/}
    <div className="grid h-full ml-10 mr-10 border-1 rounded-10 border-gray3">
      {/*frame 1117*/}
      <div className=" grid grid-flow-col  ml-10 mt-10 mr-10 ">
        <div className=" grid    ">
        <Skeleton/>
        </div>
      </div>
      

      {/*frame 1132*/}
      <div className="flex ml-10 mr-10">
        {/*Chart Graphic*/}
        <div className="flex w-152 h-152  ">
        <PieChart className="" width={162} height={165} style={{ transform: "scaleX(-1)" }}>
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
          <div className="  absolute w-68 h-42 translate-x-42 translate-y-55 ">
            {/*frame 1128*/}
            <div className=" w-46 translate-x-10 ">
              <p className="">
              <Skeleton/>
              </p>
            </div>

            {/*frame 1129*/}
            <div className=" w-68 h-14 ">
              <p className=" ">
                <Skeleton/>
              </p>
            </div>
          </div>
        </div>

        {/*frame 1129*/}
        <div className="flex flex-col w-full ml-13 ">
          {/*frame 13*/}
          <div className=" flex flex-col w-full  -mt-7  ">
            {/*frame 7*/}
            <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>

            {/*frame 10*/}
            <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>


            {/*frame 13*/}
            <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>


            {/*frame 12*/}
            <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>

          </div>

          {/*frame 14*/}
          <div className="flex flex-col w-full  mt-10 ">
            {/*frame 12*/}
            <div className=" grid grid-flow-col  ">
            <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>

            </div>

            {/*frame 13*/}
            <div className=" grid grid-flow-col w-272 h-19 mt-4 ">
              <div className=" grid grid-flow-col font-trebuchet font-bold text-16   ">
              <div className=" grid tracking-1  "><Skeleton/></div>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className=" ml-16">
       <Skeleton/>
      </div>
    </div>
  </>
);
};
 
