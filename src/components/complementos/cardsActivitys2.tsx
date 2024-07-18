import { useQuery } from "@apollo/client";
import { GET_ACTIVITY_LOAD } from "../../gql/GET-ACTIVITY-LOAD";
import { endOfWeek, startOfWeek } from "./fechas/semanas/getStartAndEndOfWeek";
import { CardsActivitysSqueleton2 } from "../squeletons/activityWeeks/CardsActivity2";


interface ActivityLoadModel {
    activiadesAnteriores: number;
    activiadesAsignadas: number;
    activiadesImpactadas: number;
    activiadesResueltas: number;
    activiadesTotal: number;
    perNombres: string;
    // Puedes agregar otras propiedades si es necesario
  }
  

export const CardsActivitys2 = () => {

    const { data: data2, loading: loading2, error: error2 } = useQuery(GET_ACTIVITY_LOAD, {
        variables: {
          args: {
            FecIni: startOfWeek,
            FecFin:  endOfWeek
          },
        },
      });
    
      if (loading2) return <CardsActivitysSqueleton2/>;
      if (error2) return <p>Error: {error2.message}</p>;
    
      //SEGUNDAS TARJETAS (data2) (logica)
    
    const totals = data2.getActivityLoadByDates.reduce((acc: ActivityLoadModel, obj: ActivityLoadModel) => {
      acc.activiadesAnteriores += obj.activiadesAnteriores;
      acc.activiadesAsignadas += obj.activiadesAsignadas;
      acc.activiadesImpactadas += obj.activiadesImpactadas;
      acc.activiadesResueltas += obj.activiadesResueltas;
      acc.activiadesTotal += obj.activiadesTotal;
      return acc;
    }, {
      activiadesAnteriores: 0,
      activiadesAsignadas: 0,
      activiadesImpactadas: 0,
      activiadesResueltas: 0,
      activiadesTotal: 0,
    });

  return (
    <>
        <div className=" grid cards-template2 ">
          {/*Overview*/}
          <div className=" card5 w-119.5 h-80  rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Nuevas{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
            {totals.activiadesAsignadas}
            </div>
          </div>

          {/*Overview*/}
          <div className=" card6 w-119.5 h-80 ml-13 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Previas{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
            {totals.activiadesAnteriores}
            </div>
          </div>

          {/*Overview*/}
          <div className=" card7 w-119.5 h-80 ml-12 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana text-12 text-black1">
              Impactadas{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
            {totals.activiadesImpactadas}
            </div>
          </div>

          {/*Overview*/}
          <div className=" card8 w-119.5 h-80 ml-12 rounded-10 bg-purple1">
            <p className="  ml-10 mt-10 font-verdana font-bold text-12 text-black">
              TOTAL{" "}
            </p>
            <div className=" w-99.5 ml-10 border-b border-purple2"></div>
            <div className=" grid justify-center font-trebuchet font-bold text-32 text-black1">
            {totals.activiadesTotal}
            </div>
          </div>
        </div>
    </>
  )
}
