import React from 'react'



export const TopItem2 = () => {
  return (
    <>
      {/*Top Item*/}
      <div className=' flex-none h-76 ml-2 mr-7 bg'>
        
        <div className=' flex'>
        {/*Numero*/}
        <div className=' ml-10 mt-16'>
            <div className=' h-40 w-40 border-2 border-orange4 bg-orange4 rounded-full'>
                <p className=' flex justify-center mt-4 font-trebuchet text-20 text-orange1'>1</p>
            </div>
        </div>

        {/*Consultor*/}
        <div className=' flex w-full ml-8 mt-16   '>
            
            
                <div className=' flex  justify-center h-40 w-40 border-2 border-orange4 bg-orange4 rounded-full'>
                    <svg className='mt-7' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10C8.625 10 7.44792 9.51042 6.46875 8.53125C5.48958 7.55208 5 6.375 5 5C5 3.625 5.48958 2.44792 6.46875 1.46875C7.44792 0.489583 8.625 0 10 0C11.375 0 12.5521 0.489583 13.5312 1.46875C14.5104 2.44792 15 3.625 15 5C15 6.375 14.5104 7.55208 13.5312 8.53125C12.5521 9.51042 11.375 10 10 10ZM0 17.5V16.5C0 15.7917 0.182292 15.1406 0.546875 14.5469C0.911458 13.9531 1.39583 13.5 2 13.1875C3.29167 12.5417 4.60417 12.0573 5.9375 11.7344C7.27083 11.4115 8.625 11.25 10 11.25C11.375 11.25 12.7292 11.4115 14.0625 11.7344C15.3958 12.0573 16.7083 12.5417 18 13.1875C18.6042 13.5 19.0885 13.9531 19.4531 14.5469C19.8177 15.1406 20 15.7917 20 16.5V17.5C20 18.1875 19.7552 18.776 19.2656 19.2656C18.776 19.7552 18.1875 20 17.5 20H2.5C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5Z" fill="#F7A32D"/>
                    </svg>
                </div>
            

            <div className=' ml-8 '>
               
                <p className=' font-trebuchet font-bold text-14 text-gray1'>Anna Pacheco</p>
                <p className=' font-verdana text-10 mt-5  text-gray2 '>Consultor SWIT</p>
                
            </div>


        </div>
   

        {/*Porcentaje de productividad*/}
        <div className=' mt-16 '>
                <div className=' flex'>
                    <div className='grid grid-flow-col items-center w-40 h-20 border-2 border-green1 bg-green2 rounded-3'>
                      <div className=' ml-1 -mt-2 grid grid-flow-col items-center '>
                        
                          <svg className=' mt-2 ml-5' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.90223 1.86621L0.919383 7.84906C0.818754 7.94969 0.69068 8 0.535163 8C0.379646 8 0.251572 7.94969 0.150943 7.84906C0.0503145 7.74843 0 7.62036 0 7.46484C0 7.30932 0.0503145 7.18125 0.150943 7.08062L6.13379 1.09777H3.06003C2.90452 1.09777 2.77416 1.04517 2.66895 0.939966C2.56375 0.834763 2.51115 0.704403 2.51115 0.548885C2.51115 0.393368 2.56375 0.263007 2.66895 0.157804C2.77416 0.0526015 2.90452 0 3.06003 0H7.45112C7.60663 0 7.73699 0.0526015 7.8422 0.157804C7.9474 0.263007 8 0.393368 8 0.548885V4.93997C8 5.09548 7.9474 5.22584 7.8422 5.33105C7.73699 5.43625 7.60663 5.48885 7.45112 5.48885C7.2956 5.48885 7.16524 5.43625 7.06003 5.33105C6.95483 5.22584 6.90223 5.09548 6.90223 4.93997V1.86621Z" fill="#00BB89"/>
                          </svg>

                          <div className='text-green1 text-10 mr-3 mt-2'>
                              2%
                          </div>   

                      </div>
                    </div>

                    <p className=' flex justify-center font-trebuchet font-bold -mt-5 ml-8 text-16 text-gray1'>
                          100%
                    </p>
                </div>

                <p className=' text-10 text-gray1 mt-1 ml-5 font-verdana'>
                  Productividad
                </p>

        </div>

        </div>

      </div>
  </>
  )
}
