import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'


{/* EJEMPLO */}
const data01 = [
    {
      "name": "Escalados a Coord.",
      "value": 6,
      "color": "#3E4EB8"
    },
    {
      "name": "En proceso",
      "value": 29,
      "color": "#03BAD9"
    },
    {
      "name": "En espera",
      "value": 23,
      "color": "#EF6A1F"
    },
    {
      "name": "Resueltos",
      "value": 997,
      "color": "#00E0A4"
    },
   
  ];

export const IndDeProductividad = () => {
  return (
    <>
    {/*Indice de Productividad*/}
        <div className='flex flex-col  border-1 rounded-10 border-gray3'>

        {/*frame 1117*/}
            <div className=' flex  ml-10 mt-10   '>
                <div className=' flex   translate-y-5.5  font-trebuchet font-bold text-16 text-blue2 '>
                    Índice de productividad de equipo
                </div>
            </div>

            <div className=' flex  mr-10 ml-10 mt-8 mb-8 border-b border-cyan2'></div>

        {/*frame 1132*/}
            <div className=' flex flex-col ml-10 '>

            {/*frame 1126*/}
                <div className='flex mr-10 border-b border-gray5'>

                 {/*Chart Graphic*/}
                    <div className='flex w-125 h-125 mb-10 '>

                    <PieChart width={160} height={162}  style={{ transform: 'scaleX(-1)' }}>   
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="34%" innerRadius={57} outerRadius={80} fill="#82ca9d"  stroke="transparent">
                            {
                                data01.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))
                            }
                        </Pie>
                    </PieChart>

                     {/*frame 1131*/}
                     <div className='flex flex-col absolute w-68 h-42 translate-x-29 translate-y-42 '>

                        {/*frame 1128*/}
                            <div className=' flex ml-5 w-46 h-28 translate-x-10 '>
                                <p className=' flex font-trebuchet font-bold text-24 text-black1 -mt-5'>97%</p>
                            </div>

                        {/*frame 1129*/}
                            <div className=' flex justify-center w-68 h-14 '>
                                <p className='flex font-trebuchet font-bold text-12 -mt-3 text-gray2 '>efectividad</p>
                            </div>
                     </div>



                    </div>

                {/*frame 13*/}
                    <div className='flex flex-col w-full ml-19 mr-10  '>

                    {/*frame 7*/}
                        <div className=' grid grid-flow-col font-trebuchet font-bold text-16   '>

                                <div className=' grid tracking-1  '>
                                    Actividades SWIT 
                                   
                                </div>  
                                <div className='grid justify-end  tracking-1  '>
                                  1055 
                                </div>

                        </div>

                    {/*frame 12*/}
                        <div className=' grid grid-flow-col mt-8 font-trebuchet text-14 text-gray2'>

                                <div className=" absolute translate-y-2 w-14 h-14 
                                 rounded-full bg-blue4">
                                    
                                 </div>

                                <div className=' flex ml-23  '>
                                    Escalados a Coord.                                       
                                </div>  

                                <div className=' grid justify-end tracking-1  '>
                                    6
                                </div>

                        </div>

                    {/*frame 10*/}
                          <div className=' grid grid-flow-col  font-trebuchet text-14 text-gray2'>

                                <div className=" absolute translate-y-2 w-14 h-14 
                                 rounded-full bg-cyan3">
                                    
                                 </div>

                                <div className=' flex ml-23  '>
                                    En proceso                                       
                                </div>  

                                <div className=' grid justify-end tracking-1  '>
                                    23
                                </div>

                        </div>

                    {/*frame 13*/}
                    <div className=' grid grid-flow-col  font-trebuchet text-14 text-gray2'>

                                <div className=" absolute translate-y-2 w-14 h-14 
                                rounded-full bg-orange2">
                                    
                                </div>

                                <div className=' flex ml-23  '>
                                    En espera                                       
                                </div>  

                                <div className=' grid justify-end tracking-1  '>
                                    29
                                </div>

                    </div>

                    {/*frame 14*/}
                    <div className=' grid grid-flow-col  font-trebuchet text-14 text-gray2'>

                                <div className=" absolute translate-y-2 w-14 h-14 
                                rounded-full bg-green3">
                                    
                                </div>

                                <div className=' flex ml-23  '>
                                    Resueltos                                       
                                </div>  

                                <div className=' grid justify-end tracking-1  '>
                                    997
                                </div>

                    </div>
                        
                    </div>
                </div>

            {/*frame 14*/}
                <div className=' grid mb-10 mt-10 mr-10 '>

                    <div className='grid grid-flow-col  '>
                        <div className=' font-trebuchet text-14 text-gray1'>Actividades de hoy</div>
                        <div className='flex justify-end font-trebuchet font-bold text-16'>19</div>
                    </div>
                    <div className=' grid grid-flow-col   '>
                        <div className=' font-trebuchet text-14 text-gray1'>Actividades de previas</div>
                        <div className='flex justify-end font-trebuchet font-bold text-16'>39</div>
                    </div>
                    <div className=' grid grid-flow-col  '>
                        <div className=' font-trebuchet text-14 text-gray1'>Actividades de Impactadas</div>
                        <div className='flex justify-end font-trebuchet font-bold text-16'>35</div>
                    </div>
                


                </div>

            </div>

        </div>

       
    </>
  )
}
