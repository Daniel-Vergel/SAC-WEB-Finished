import Skeleton from "react-loading-skeleton";

export const TopConsultoresSqueleton = () => {
    return (
      <>
        {/*Main Contenedor*/}
        <div className=" mt-16 h-773 border-1 border-gray3 rounded-10">
          {/*title*/}
          <div className=" flex ml-10 mt-10 mr-10  ">
            <Skeleton/>
            <div className=" flex flex-col ml-21">
              <div className=" font-trebuchet font-bold text-24 text-blue1">
                <Skeleton/>
              </div>
              <p className="text-gray2  leading-5 ">
                <Skeleton/>
              </p>
            </div>
          </div>
  
          {/*Cuerpo*/}
          <div className=" flex flex-col h-571 ml-10 mr-10 mt-16 overflow-auto scrollbar-webkit border-2 border-gray6 ">
            <div className=" flex flex-col h-571 mr-7 ">
             
             
            </div>
          </div>
  
          {/*Consultor Principal*/}
          <div className="ml-10 mr-10 mt-14 bg-blue3">
          </div>
        </div>
      </>
    );
  };
  