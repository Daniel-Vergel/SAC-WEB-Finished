import ProgressBar from "@ramonak/react-progress-bar";
import Skeleton from "react-loading-skeleton";
import StarRatings from 'react-star-ratings';



export const CalificacionSqueleton = () => {

  return (
    <div className="  border-1 mr-10 border-gray3 rounded-10">
      <div className=" ml-17 mt-10">
        <div className=" grid w-257 h-21 ">
          <Skeleton/>
        </div>
      </div>

   

      {/*Frame 1113*/}
      <div className="grid ml-16  h-56  ">
        {/*Frame 1115*/}
        <div className=" grid mr-60 ">
          {/*Frame 1114*/}
          <div className="grid grid-flow-col   ">
          <StarRatings
            rating={0}
            starRatedColor="#EDEDED"
            numberOfStars={5}
            starDimension="40px"
            starSpacing="5px"/>
          </div>

          {/*Frame 1116*/}
          <div className="w-200 h-2 ">
            <p className="  ">
              <Skeleton/>
            </p>
          </div>      
        </div>

      </div>

      

      {/*Frame 1119*/}
      <div className="flex items-center mt-21 mr-10 ml-12 mb-6px">

        <div className="flex-1 font-trebuchet text-12 ml-10 text-gray-500"></div>
        <div className="flex-1 -ml-19">
          <ProgressBar
            completed={0} // Porcentaje completado
            bgColor="#078BCD" // Color de fondo de la barra de progreso
            labelAlignment="center" // Posición de la etiqueta (opciones: inside, outside, center)
            height="7px" // Altura de la barra de progreso
            labelColor="#000" // Color de la etiqueta
            width="150%"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <div className="flex-1 flex mr-10 justify-end font-trebuchet text-12 text-gray-500">
            <Skeleton/>
        </div>
      </div>


      {/*Frame 1120*/}
      <div className="flex items-center  mr-10 ml-12 mb-6px">
        <div className="flex-1 font-trebuchet text-12 ml-10 text-gray-500"></div>
        <div className="flex-1 -ml-19">
          <ProgressBar
            completed={0} 
            bgColor="#078BCD" 
            labelAlignment="center" 
            height="7px" 
            labelColor="#000" 
            width="150%"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <div className="flex-1 flex mr-10 justify-end font-trebuchet text-12 text-gray-500">
            <Skeleton/>
        </div>
      </div>

      {/*Frame 1121*/}
      <div className="flex items-center  mr-10 ml-12 mb-6px">
        <div className="flex-1 font-trebuchet text-12 ml-10 text-gray-500"></div>
        <div className="flex-1 -ml-19">
          <ProgressBar
            completed={0} 
            bgColor="#078BCD"
            labelAlignment="center" 
            height="7px"
            labelColor="#000" 
            width="150%"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <div className="flex-1 flex mr-10 justify-end font-trebuchet text-12 text-gray-500">
            <Skeleton/>
        </div>
      </div>

      {/*Frame 1122*/}
      <div className="flex items-center  mr-10 ml-12 mb-6px">
        <div className="flex-1 font-trebuchet text-12 ml-10 text-gray-500"></div>
        <div className="flex-1 -ml-19">
          <ProgressBar
            completed={0} 
            bgColor="#078BCD"
            labelAlignment="center" 
            height="7px"
            labelColor="#000" 
            width="150%"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <div className="flex-1 flex mr-10 justify-end font-trebuchet text-12 text-gray-500">
            <Skeleton/>
        </div>
      </div>

      {/*Frame 1123*/}
      <div className="flex items-center  mr-10 ml-12 mb-26">
        <div className="flex-1 font-trebuchet text-12 ml-10 text-gray-500"></div>
        <div className="flex-1 -ml-19">
          <ProgressBar
            completed={0} 
            bgColor="#078BCD"
            labelAlignment="center" 
            height="7px"
            labelColor="#000" 
            width="150%"
            labelClassName="progressBarLabel hiddenLabel"
            customLabel=""
          />
        </div>
        <div className="flex-1 flex justify-end mr-10 font-trebuchet text-12 text-gray-500">
            <Skeleton/>
        </div>
      </div>

    </div>
  );
};