import Skeleton from "react-loading-skeleton"

export const BoardSqueleton = () => {

  return (
    <div className=" bg-white">
    <div className=" h-full border-1 border-gray3 rounded-10">
      <div className=" flex  ml-10 mt-10 mr-10  ">
        <div className=" grid grid-flow-col w-full  ">
          <p className=" mt-8  font-trebuchet font-bold text-16 text-blue1 whitespace-nowrap overflow-hidden ">
            {" "}
            Estoy trabajando en...
          </p>

          <div className=" flex justify-self-end ">  
          <Skeleton />
          </div>
        </div>
      </div>

      <div className=" border-l-6 border-t-1 border-b-1 border-r-1 border-gray10 rounded-5 ml-10 mt-10 mr-10">
        <div className="   grid grid-flow-col space-x-7 overflow-hidden ml-10 mr-10 mt-5 ">
          
            <div className="   ">
            <Skeleton height={39} />
            </div>

            <div className=" ">
            <Skeleton height={39}  />
            </div>

            <div className=" ">
            <Skeleton height={39} />
            </div>

        </div>

        <div className="  ml-10 mr-10 mt-4  ">
          <div className=" ">
          <Skeleton width={60} height={16} />
          </div>
          <div className=" ">
            <Skeleton height={15}/>
          </div>
        </div>

        <div className="  ml-10 mr-10  mb-10 ">
          <div className=" ">
          <Skeleton width={60} height={16} />
          </div>
          <div className=" ">
          <Skeleton height={15} />
          </div>
          <Skeleton borderRadius={10} height={20} />
        </div>
      </div>

      <div className=" grid grid-cols-2 ml-10 mr-10 mt-10 mb-10  ">
        <div className=" flex justify-center">
          <Skeleton />
        </div>

        <div className=" flex justify-center ">
          <Skeleton />
        </div>
      </div>
    </div>
  </div>
  )
}
