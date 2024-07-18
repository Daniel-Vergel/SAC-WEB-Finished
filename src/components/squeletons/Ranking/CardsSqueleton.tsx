import Skeleton from "react-loading-skeleton";

export const CardsSqueleton = () => (

  <div className=" h-76 ml-2 mr-7 border-b-2 border-gray6">
    <div className=" flex">

        <div className=" flex items-center">
        <div className="">
            <div className="h-32 w-32 mt-10 ml-10 rounded-full bg-gray10 grid justify-center text-20 ">
            </div>
        </div>

      {/* Consultor */}
        <div className=" ">
            <div className="h-32 w-32 mt-10 ml-10 rounded-full bg-gray10 grid justify-center text-20 ">
            </div>
        </div>
        </div>

        <div className=" ml-10 mt-13">
          <p className=" w-180 mr-10">
            <Skeleton/>
          </p>
          <p className=" w-141 ">
            <Skeleton/>
          </p>
        </div>

      {/* Porcentaje de productividad */}
      <div className="mt-16">
        <div className="flex">
          <div className="grid grid-flow-col items-center w-40 h-20  rounded-3">
            <div className=" -mt-2 -mr-5 grid grid-flow-col items-center">
           <Skeleton className=" ml-52"/>
            </div>
          </div>
        </div>

        <div className="  mt-1 ml-5 ">
         <Skeleton className=" ml-50"/>
        </div>
      </div>
    </div>
  </div>
);


