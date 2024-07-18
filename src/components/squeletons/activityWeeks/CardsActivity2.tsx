import Skeleton from "react-loading-skeleton"

export const CardsActivitysSqueleton2 = () => {

  return (
        <div className=" grid cards-template1 justify-start ">
            {/*Overview*/}

            <div className=" card1 mr-12 -mt-5 ">
              <Skeleton width={119.5} height={80} borderRadius={10} />
            </div>

            {/*Overview*/}
            <div className=" card2 mr-12 -mt-5 ">
              <Skeleton width={119.5} height={80} borderRadius={10} />
            </div>

            {/*Overview*/}
            <div className=" card3 mr-12 -mt-5 ">
              <Skeleton width={119.5} height={80} borderRadius={10} />
            </div>

            {/*Overview*/}
            <div className=" card4 mr-12 -mt-5 ">
              <Skeleton width={119.5} height={80} borderRadius={10} />
            </div>
        </div>
  )
}