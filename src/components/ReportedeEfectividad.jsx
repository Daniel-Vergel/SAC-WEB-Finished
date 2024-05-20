import React from 'react'


import { IndProductividad } from './complementos/Ind-Productividad'
import { IndAceptacion } from './complementos/Ind-Aceptacion'
import { CalifDelCliente } from './complementos/Calif-Del-Cliente'



export const ReportedeEfectividad = () => {
  return (
    <>
    {/*Frame 1141*/}
        <div className='  flex flex-col  border-2 border-gray3 rounded-10 '>

        {/*Frame 1015*/}
            <div className=' grid grid-flow-col  mb-10 ml-10 mt-10 mr-10 '>
                
            {/*Frame 1144*/}
                <div className=' grid grid-flow-col w-461 h-40 '>
                    <p className=' font-trebuchet font-bold text-24 text-blue1 '> Reporte de efectividad </p>
            
                    {/*Button Design System*/} 
                    <div className=' grid justify-end'>
                        <select className='grid grid-flow-col  w-188 h-40 border-1 border-gray3 rounded-5  font-roboto text-16 text-gray8'>      
                            <option value="0last3Months"> Ultimos 3 meses </option>
                            <option value="last6Months" className='   '> Ultimos 6 meses </option>
                        </select>
                            
                         
                    </div>
                </div>

            {/*Button Design System*/}   
            <div className=' grid justify-end'>
                <div className='grid grid-flow-col items-center w-188 h-40 border-b border-t border-l border-r border-gray3 rounded-5'>
                    
                    <svg className=' ml-8' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18C5.45 18 4.97917 17.8042 4.5875 17.4125C4.19583 17.0208 4 16.55 4 16V14H2C1.45 14 0.979167 13.8042 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V8C0 7.15 0.291667 6.4375 0.875 5.8625C1.45833 5.2875 2.16667 5 3 5H17C17.85 5 18.5625 5.2875 19.1375 5.8625C19.7125 6.4375 20 7.15 20 8V12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H6ZM2 12H4C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10H14C14.55 10 15.0208 10.1958 15.4125 10.5875C15.8042 10.9792 16 11.45 16 12H18V8C18 7.71667 17.9042 7.47917 17.7125 7.2875C17.5208 7.09583 17.2833 7 17 7H3C2.71667 7 2.47917 7.09583 2.2875 7.2875C2.09583 7.47917 2 7.71667 2 8V12ZM14 5V2H6V5H4V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V5H14ZM16 9.5C16.2833 9.5 16.5208 9.40417 16.7125 9.2125C16.9042 9.02083 17 8.78333 17 8.5C17 8.21667 16.9042 7.97917 16.7125 7.7875C16.5208 7.59583 16.2833 7.5 16 7.5C15.7167 7.5 15.4792 7.59583 15.2875 7.7875C15.0958 7.97917 15 8.21667 15 8.5C15 8.78333 15.0958 9.02083 15.2875 9.2125C15.4792 9.40417 15.7167 9.5 16 9.5ZM14 16V12H6V16H14Z" fill="#078BCD"/>
                    </svg>
                        <p className=' font-roboto text-16 text-gray8  '> Imprimir Reporte </p>
                    <svg className='grid translate-x-3.3 ' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99082 5.72933C4.89082 5.72933 4.79707 5.71197 4.70957 5.67725C4.62207 5.64252 4.5436 5.59044 4.47415 5.521L0.522863 1.5697C0.365391 1.41223 0.290126 1.2328 0.297071 1.03141C0.304015 0.830024 0.383876 0.652941 0.536654 0.500163C0.689432 0.347385 0.866515 0.270996 1.0679 0.270996C1.26929 0.270996 1.44638 0.347385 1.59915 0.500163L4.99499 3.91683L8.41165 0.500163C8.56443 0.347385 8.74152 0.274468 8.9429 0.281413C9.14429 0.288357 9.32138 0.368218 9.47415 0.520996C9.62693 0.673774 9.70332 0.850857 9.70332 1.05225C9.70332 1.25363 9.62459 1.43268 9.46711 1.58937L5.51582 5.521C5.44082 5.59044 5.35957 5.64252 5.27207 5.67725C5.18457 5.71197 5.09082 5.72933 4.99082 5.72933Z" fill="#383838"/>
                    </svg>

                </div>
            </div>

            </div>
           
           {/*Cuerpo*/}
           <div className=' reporte-cuerpo grid  mb-12  '>

                {/*Productividad*/}
                <div className=' productividad '>
                    <IndProductividad/>
                </div>

                {/*Aceptacion*/}
                <div className=' aceptacion '>
                    <IndAceptacion/>
                </div>

                {/*Calificacion*/}
                <div className=' calificacion '>
                    <CalifDelCliente/>
                </div>

            </div>


        </div>

       
        
    </>
  )
}
