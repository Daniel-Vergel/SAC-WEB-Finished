import React from 'react'
import { InputIcon } from './iconos.jsx/Imputicon'


export const ActividadesDeHoy = () => {
  return (

    <div className=' grid border-1 border-gray3 rounded-10'> 

        {/*Header*/}
        <div className=' grid grid-flow-col ml-10 mt-10 mr-10  '>
            <div className=' flex '> 
                <p className=' font-trebuchet font-bold text-24 text-blue1 '> Actividades de Hoy </p>
            </div>

            <div className=' grid grid-flow-col justify-self-end'>
                <div className='flex  items-center'>
                    <input type="checkbox" id="mostrarActividades" className=" w-20 h-20 border-2 border-cyan1" />
                    <label htmlFor="mostrarActividades" className='font-roboto text-16 text-gray8'>Mostrar actividades resueltas</label>
                </div>

                <div className='flex ml-29 h-40 border-1 rounded-5 border-gray3'>
                    <svg className=' mt-10 ml-8 mr-8' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18C5.45 18 4.97917 17.8042 4.5875 17.4125C4.19583 17.0208 4 16.55 4 16V14H2C1.45 14 0.979167 13.8042 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V8C0 7.15 0.291667 6.4375 0.875 5.8625C1.45833 5.2875 2.16667 5 3 5H17C17.85 5 18.5625 5.2875 19.1375 5.8625C19.7125 6.4375 20 7.15 20 8V12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14H16V16C16 16.55 15.8042 17.0208 15.4125 17.4125C15.0208 17.8042 14.55 18 14 18H6ZM2 12H4C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10H14C14.55 10 15.0208 10.1958 15.4125 10.5875C15.8042 10.9792 16 11.45 16 12H18V8C18 7.71667 17.9042 7.47917 17.7125 7.2875C17.5208 7.09583 17.2833 7 17 7H3C2.71667 7 2.47917 7.09583 2.2875 7.2875C2.09583 7.47917 2 7.71667 2 8V12ZM14 5V2H6V5H4V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V5H14ZM16 9.5C16.2833 9.5 16.5208 9.40417 16.7125 9.2125C16.9042 9.02083 17 8.78333 17 8.5C17 8.21667 16.9042 7.97917 16.7125 7.7875C16.5208 7.59583 16.2833 7.5 16 7.5C15.7167 7.5 15.4792 7.59583 15.2875 7.7875C15.0958 7.97917 15 8.21667 15 8.5C15 8.78333 15.0958 9.02083 15.2875 9.2125C15.4792 9.40417 15.7167 9.5 16 9.5ZM14 16V12H6V16H14Z" fill="#078BCD"/>
                    </svg>

                        <p className=' font-trebuchet mt-7 text-16 text-gray8'>Imprimir Listado</p>

                    <svg className=' mt-17 ml-8 mr-8' width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.99084 5.72933C4.89084 5.72933 4.79709 5.71197 4.70959 5.67725C4.62209 5.64252 4.54362 5.59044 4.47418 5.521L0.522886 1.5697C0.365413 1.41223 0.290149 1.2328 0.297094 1.03141C0.304038 0.830024 0.383899 0.652941 0.536677 0.500163C0.689455 0.347385 0.866538 0.270996 1.06793 0.270996C1.26932 0.270996 1.4464 0.347385 1.59918 0.500163L4.99501 3.91683L8.41168 0.500163C8.56446 0.347385 8.74154 0.274468 8.94293 0.281413C9.14432 0.288357 9.3214 0.368218 9.47418 0.520996C9.62696 0.673774 9.70334 0.850857 9.70334 1.05225C9.70334 1.25363 9.62461 1.43268 9.46714 1.58937L5.51584 5.521C5.44084 5.59044 5.35959 5.64252 5.27209 5.67725C5.18459 5.71197 5.09084 5.72933 4.99084 5.72933Z" fill="#383838"/>
                    </svg>
                </div>
            </div>
        </div>

        {/*Targets*/}
        <div className=' grid grid-cols-2 ml-10 mr-10 mt-12 '>

            {/* Seccion 1*/}
                <div className=' grid  cards-template1 justify-start '>

                    {/*Overview*/}
                    <div className=' card1 w-119.5 h-80 mr-12 rounded-10 bg-orange3'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>En espera </p>
                        <div className=' w-99.5 ml-10 border-b border-orange2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>1</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card2 w-119.5 h-80 mr-12 rounded-10 bg-red2'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>Replicadas </p>
                        <div className=' w-99.5 ml-10 border-b border-red3'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>1</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card3 w-119.5 h-80 mr-12 rounded-10 bg-cyan4'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>En proceso </p>
                        <div className=' w-99.5 ml-10 border-b border-cyan2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>4</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card4 w-119.5 h-80 rounded-10 bg-green4'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>Resueltas hoy </p>
                        <div className=' w-99.5 ml-10 border-b border-green1'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>1</div>
                    </div>

                </div>

            {/* Seccion 2*/}
                <div className=' grid  cards-template2 justify-end '>

                    {/*Overview*/}
                    <div className=' card5 w-119.5 h-80  rounded-10 bg-purple1'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>En espera </p>
                        <div className=' w-99.5 ml-10 border-b border-purple2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>2</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card6 w-119.5 h-80 ml-13 rounded-10 bg-purple1'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>Replicadas </p>
                        <div className=' w-99.5 ml-10 border-b border-purple2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>2</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card7 w-119.5 h-80 ml-12 rounded-10 bg-purple1'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>En proceso </p>
                        <div className=' w-99.5 ml-10 border-b border-purple2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>5</div>
                    </div>

                    {/*Overview*/}
                    <div className=' card8 w-119.5 h-80 ml-12 rounded-10 bg-purple1'>
                        <p className='  ml-10 mt-10 font-verdana text-12 text-black1'>Resueltas hoy </p>
                        <div className=' w-99.5 ml-10 border-b border-purple2'></div>
                        <div className=' grid justify-center font-trebuchet font-bold text-32 text-black1'>5</div>
                    </div>

                </div>

        </div>

        {/*Tabla*/}

            <div className=' ml-10 mr-10 overflow-auto rounded-lg shadow '>
                <table className=' w-full mt-16'>

                    <thead className=' bg-gray-50 border-b-2 border-gray-200'>
                    <tr className=' font-verdana text-12 text-blue1 border-b-2 border-blue1'>

                        <th className=' w-53 h-46 text-sm font-semibold tracking-wide text-left whitespace-nowrap'></th>

                        <th className=' mt-8  text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                           <div className=' flex '> 
                                <p className='mr-16'>Ticket</p>
                                <button><InputIcon/></button> 
                            </div>
                           
                        </th>

                        <th className='  text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16' >Cliente</p> 
                                <button><InputIcon/></button>
                            </div>
                            
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16' >Asunto</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16 ml-10' >Tiempo Transcurrido</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16' >Tiempo restante</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16' >Estado</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16' >Prioridad</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                    </tr>
                    </thead>

                    <tbody className=' divide-y divide-gray-100'>
                    <tr>

                        <td className=' h-52 w-65  text-gray-700 whitespace-nowrap  '></td>

                        <td className=' w-130  text-gray-700 whitespace-nowrap  '>
                            
                            <div className='flex'>
                                <svg className='-ml-14' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="34" height="34" rx="10" fill="#E8EDF8"/>
                                    <rect width="34" height="34" rx="10" fill="url(#pattern0_1003_9425)"/>
                                    <defs>
                                    <pattern id="pattern0_1003_9425" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_1003_9425" transform="scale(0.00543478)"/>
                                    </pattern>
                                    <image id="image0_1003_9425" width="184" height="184" xlink:href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                
                                <div className=' mt-8 ml-14 font-verdana font-bold text-12 text-gray1' >Grl-056278</div>
                            </div>

                        </td>

                        <td className=' w-241 text-gray-700 whitespace-nowrap '> 
                            <div className=' flex mt-1  font-verdana font-bold text-12 text-gray1 ' >COMERCIALIZADORA DE SOFTWA...</div>
                        </td>

                        <td className=' w-190  text-gray-700 whitespace-nowrap '>
                            
                            <div className=' flex mt-1 font-verdana font-bold text-12 text-gray1  ' >ELIMINAR REFERENCIAS DE LA...</div>
                        
                        </td>

                        <td className=' w-212 text-gray-700 whitespace-nowrap  '>
                            <div className=' flex '>
                            <div className=' flex justify-center w-190 h-20 mt-8 ml-10 rounded-22 bg-red1 ' >
                                <div className=' flex font-roboto text-14 text-white1 text-eight'> 100% </div>
                            </div>
                            </div>
                        </td>
        
                        <td className=' w-185  text-gray-700 whitespace-nowrap '>
                            <div className=' flex ml-35 mt-1 font-verdana font-bold text-12 text-gray1' >-35H 50M</div>
                        </td>

                        <td className=' w-122 text-gray-700 whitespace-nowrap '>
                            <div className=' flex justify-center mt-2  w-94 h-28 rounded-5 bg-cyan4' >
                                <div className='font-worksansM mt-4 text-12 text-cyan2'>EN PROCESO</div>
                            </div>
                        </td>

                        <td className=' w-122  text-gray-700 whitespace-nowrap '>
                        
                        <div className=' flex'>
                            <div className=' flex mt-1 font-verdana  text-12 text-gray1' >MEDIA</div>
                            {/* Nivel (Vector) */}
                                <div className=' flex w-18 h-11 mt-4 ml-14  '>
                                    <svg className='mt-6px' width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.41225C0.0476002 3.24519 0.131509 3.09048 0.24583 2.95902C0.36015 2.82755 0.50211 2.72251 0.661733 2.65128C1.75983 2.0425 2.84833 1.41469 3.94163 0.796397C4.04263 0.725926 4.15702 0.676554 4.27785 0.651282C4.39868 0.626009 4.52343 0.625364 4.64451 0.649384C4.7656 0.673405 4.88051 0.72159 4.98224 0.791013C5.08398 0.860435 5.17042 0.949647 5.23632 1.05323C5.32911 1.19515 5.38055 1.35974 5.38497 1.52884C5.38497 2.24225 5.38497 2.95567 5.38497 3.66908C5.37337 3.87807 5.28413 4.07538 5.13448 4.22294C4.98482 4.3705 4.78536 4.45784 4.57459 4.46811C4.30606 4.46811 4.03753 4.46811 3.769 4.46811H1.14605C0.895392 4.51514 0.63611 4.46418 0.422488 4.32588C0.208867 4.18758 0.0574708 3.97267 0 3.72616L0 3.41225Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' mt-3' width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.67144 3.80131V6.48851C5.6853 6.62266 5.66918 6.7582 5.62423 6.88547C5.57929 7.01275 5.50662 7.12864 5.4114 7.2249C5.31618 7.32116 5.20074 7.39543 5.0733 7.44242C4.94586 7.48942 4.80954 7.50799 4.67405 7.4968C3.55518 7.4968 2.4363 7.4968 1.31743 7.4968C1.18232 7.50725 1.04654 7.48813 0.919696 7.44081C0.792851 7.39348 0.678033 7.31911 0.583355 7.22293C0.488676 7.12676 0.416449 7.01113 0.371777 6.88423C0.327105 6.75732 0.311079 6.62223 0.32483 6.48851C0.32483 5.36131 0.32483 4.23412 0.32483 3.10692C0.315971 2.91218 0.363681 2.71902 0.462287 2.55039C0.560894 2.38177 0.706249 2.24477 0.88107 2.1557L4.23769 0.25326C4.33658 0.184651 4.44835 0.136433 4.56637 0.111465C4.6844 0.0864977 4.80628 0.0852884 4.92478 0.107909C5.04329 0.13053 5.15601 0.176521 5.25626 0.243155C5.35651 0.309788 5.44226 0.395709 5.50841 0.495821C5.60925 0.676508 5.6636 0.879077 5.66665 1.08558C5.68103 1.98924 5.67144 2.89765 5.67144 3.80131Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' -mt-1 ' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M5.99627 6.00354V10.4457C6.00856 10.5835 5.99041 10.7223 5.94308 10.8524C5.89575 10.9825 5.82039 11.1008 5.72224 11.1991C5.62409 11.2973 5.50552 11.3731 5.37479 11.4213C5.24406 11.4694 5.10432 11.4887 4.96531 11.4778C3.85283 11.4778 2.73396 11.4778 1.60869 11.4778C1.46968 11.4887 1.32993 11.4694 1.19921 11.4213C1.06848 11.3731 0.949908 11.2973 0.851761 11.1991C0.753613 11.1008 0.678248 10.9825 0.630921 10.8524C0.583593 10.7223 0.56544 10.5835 0.577728 10.4457C0.577728 8.14854 0.577728 5.84659 0.577728 3.54464C0.567367 3.34355 0.616263 3.14381 0.718447 2.96983C0.82063 2.79584 0.971678 2.65513 1.15315 2.56488C2.28001 1.93707 3.39729 1.295 4.50977 0.662439C4.61011 0.593758 4.72314 0.545417 4.84237 0.520193C4.9616 0.494969 5.08468 0.49336 5.20454 0.515457C5.32441 0.537555 5.43868 0.582923 5.54081 0.648957C5.64294 0.714991 5.73091 0.800388 5.79967 0.900244C5.92103 1.08669 5.97978 1.30646 5.9675 1.52805L5.99627 6.00354Z" fill="#FFC548"/>
                                    </svg>
                                </div>
                        </div>

                        </td>
                    </tr>

                    <tr>

                        <td className=' h-52 w-65  text-gray-700 whitespace-nowrap  '></td>

                        <td className=' w-130  text-gray-700 whitespace-nowrap  '>
                            
                            <div className='flex'>
                                <svg className='-ml-14' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="34" height="34" rx="10" fill="#E8EDF8"/>
                                    <rect width="34" height="34" rx="10" fill="url(#pattern0_1003_9425)"/>
                                    <defs>
                                    <pattern id="pattern0_1003_9425" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_1003_9425" transform="scale(0.00543478)"/>
                                    </pattern>
                                    <image id="image0_1003_9425" width="184" height="184" xlink:href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                
                                <div className=' mt-8 ml-14 font-verdana font-bold text-12 text-gray1' >Grl-056278</div>
                            </div>

                        </td>

                        <td className=' w-241 text-gray-700 whitespace-nowrap '> 
                            <div className=' flex mt-1  font-verdana font-bold text-12 text-gray1 ' >COMERCIALIZADORA DE SOFTWA...</div>
                        </td>

                        <td className=' w-190  text-gray-700 whitespace-nowrap '>
                            
                            <div className=' flex mt-1 font-verdana font-bold text-12 text-gray1  ' >ELIMINAR REFERENCIAS DE LA...</div>
                        
                        </td>

                        <td className=' w-212 text-gray-700 whitespace-nowrap  '>
                            <div className=' flex '>
                            <div className=' flex justify-center w-190 h-20 mt-8 ml-10 rounded-22 bg-red1 ' >
                                <div className=' flex font-roboto text-14 text-white1 text-eight'> 100% </div>
                            </div>
                            </div>
                        </td>
        
                        <td className=' w-185  text-gray-700 whitespace-nowrap '>
                            <div className=' flex ml-35 mt-1 font-verdana font-bold text-12 text-gray1' >-35H 50M</div>
                        </td>

                        <td className=' w-122 text-gray-700 whitespace-nowrap '>
                            <div className=' flex justify-center mt-2  w-94 h-28 rounded-5 bg-cyan4' >
                                <div className='font-worksansM mt-4 text-12 text-cyan2'>EN PROCESO</div>
                            </div>
                        </td>

                        <td className=' w-122  text-gray-700 whitespace-nowrap '>
                        
                        <div className=' flex'>
                            <div className=' flex mt-1 font-verdana  text-12 text-gray1' >MEDIA</div>
                            {/* Nivel (Vector) */}
                                <div className=' flex w-18 h-11 mt-4 ml-14  '>
                                    <svg className='mt-6px' width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.41225C0.0476002 3.24519 0.131509 3.09048 0.24583 2.95902C0.36015 2.82755 0.50211 2.72251 0.661733 2.65128C1.75983 2.0425 2.84833 1.41469 3.94163 0.796397C4.04263 0.725926 4.15702 0.676554 4.27785 0.651282C4.39868 0.626009 4.52343 0.625364 4.64451 0.649384C4.7656 0.673405 4.88051 0.72159 4.98224 0.791013C5.08398 0.860435 5.17042 0.949647 5.23632 1.05323C5.32911 1.19515 5.38055 1.35974 5.38497 1.52884C5.38497 2.24225 5.38497 2.95567 5.38497 3.66908C5.37337 3.87807 5.28413 4.07538 5.13448 4.22294C4.98482 4.3705 4.78536 4.45784 4.57459 4.46811C4.30606 4.46811 4.03753 4.46811 3.769 4.46811H1.14605C0.895392 4.51514 0.63611 4.46418 0.422488 4.32588C0.208867 4.18758 0.0574708 3.97267 0 3.72616L0 3.41225Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' mt-3' width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.67144 3.80131V6.48851C5.6853 6.62266 5.66918 6.7582 5.62423 6.88547C5.57929 7.01275 5.50662 7.12864 5.4114 7.2249C5.31618 7.32116 5.20074 7.39543 5.0733 7.44242C4.94586 7.48942 4.80954 7.50799 4.67405 7.4968C3.55518 7.4968 2.4363 7.4968 1.31743 7.4968C1.18232 7.50725 1.04654 7.48813 0.919696 7.44081C0.792851 7.39348 0.678033 7.31911 0.583355 7.22293C0.488676 7.12676 0.416449 7.01113 0.371777 6.88423C0.327105 6.75732 0.311079 6.62223 0.32483 6.48851C0.32483 5.36131 0.32483 4.23412 0.32483 3.10692C0.315971 2.91218 0.363681 2.71902 0.462287 2.55039C0.560894 2.38177 0.706249 2.24477 0.88107 2.1557L4.23769 0.25326C4.33658 0.184651 4.44835 0.136433 4.56637 0.111465C4.6844 0.0864977 4.80628 0.0852884 4.92478 0.107909C5.04329 0.13053 5.15601 0.176521 5.25626 0.243155C5.35651 0.309788 5.44226 0.395709 5.50841 0.495821C5.60925 0.676508 5.6636 0.879077 5.66665 1.08558C5.68103 1.98924 5.67144 2.89765 5.67144 3.80131Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' -mt-1 ' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M5.99627 6.00354V10.4457C6.00856 10.5835 5.99041 10.7223 5.94308 10.8524C5.89575 10.9825 5.82039 11.1008 5.72224 11.1991C5.62409 11.2973 5.50552 11.3731 5.37479 11.4213C5.24406 11.4694 5.10432 11.4887 4.96531 11.4778C3.85283 11.4778 2.73396 11.4778 1.60869 11.4778C1.46968 11.4887 1.32993 11.4694 1.19921 11.4213C1.06848 11.3731 0.949908 11.2973 0.851761 11.1991C0.753613 11.1008 0.678248 10.9825 0.630921 10.8524C0.583593 10.7223 0.56544 10.5835 0.577728 10.4457C0.577728 8.14854 0.577728 5.84659 0.577728 3.54464C0.567367 3.34355 0.616263 3.14381 0.718447 2.96983C0.82063 2.79584 0.971678 2.65513 1.15315 2.56488C2.28001 1.93707 3.39729 1.295 4.50977 0.662439C4.61011 0.593758 4.72314 0.545417 4.84237 0.520193C4.9616 0.494969 5.08468 0.49336 5.20454 0.515457C5.32441 0.537555 5.43868 0.582923 5.54081 0.648957C5.64294 0.714991 5.73091 0.800388 5.79967 0.900244C5.92103 1.08669 5.97978 1.30646 5.9675 1.52805L5.99627 6.00354Z" fill="#FFC548"/>
                                    </svg>
                                </div>
                        </div>

                        </td>
                    </tr>

                    <tr>

                        <td className=' h-52 w-65  text-gray-700 whitespace-nowrap  '></td>

                        <td className=' w-130  text-gray-700 whitespace-nowrap  '>
                            
                            <div className='flex'>
                                <svg className='-ml-14' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="34" height="34" rx="10" fill="#E8EDF8"/>
                                    <rect width="34" height="34" rx="10" fill="url(#pattern0_1003_9425)"/>
                                    <defs>
                                    <pattern id="pattern0_1003_9425" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_1003_9425" transform="scale(0.00543478)"/>
                                    </pattern>
                                    <image id="image0_1003_9425" width="184" height="184" xlink:href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                
                                <div className=' mt-8 ml-14 font-verdana font-bold text-12 text-gray1' >Grl-056278</div>
                            </div>

                        </td>

                        <td className=' w-241 text-gray-700 whitespace-nowrap '> 
                            <div className=' flex mt-1  font-verdana font-bold text-12 text-gray1 ' >COMERCIALIZADORA DE SOFTWA...</div>
                        </td>

                        <td className=' w-190  text-gray-700 whitespace-nowrap '>
                            
                            <div className=' flex mt-1 font-verdana font-bold text-12 text-gray1  ' >ELIMINAR REFERENCIAS DE LA...</div>
                        
                        </td>

                        <td className=' w-212 text-gray-700 whitespace-nowrap  '>
                            <div className=' flex '>
                            <div className=' flex justify-center w-190 h-20 mt-8 ml-10 rounded-22 bg-red1 ' >
                                <div className=' flex font-roboto text-14 text-white1 text-eight'> 100% </div>
                            </div>
                            </div>
                        </td>
        
                        <td className=' w-185  text-gray-700 whitespace-nowrap '>
                            <div className=' flex ml-35 mt-1 font-verdana font-bold text-12 text-gray1' >-35H 50M</div>
                        </td>

                        <td className=' w-122 text-gray-700 whitespace-nowrap '>
                            <div className=' flex justify-center mt-2  w-94 h-28 rounded-5 bg-cyan4' >
                                <div className='font-worksansM mt-4 text-12 text-cyan2'>EN PROCESO</div>
                            </div>
                        </td>

                        <td className=' w-122  text-gray-700 whitespace-nowrap '>
                        
                        <div className=' flex'>
                            <div className=' flex mt-1 font-verdana  text-12 text-gray1' >MEDIA</div>
                            {/* Nivel (Vector) */}
                                <div className=' flex w-18 h-11 mt-4 ml-14  '>
                                    <svg className='mt-6px' width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.41225C0.0476002 3.24519 0.131509 3.09048 0.24583 2.95902C0.36015 2.82755 0.50211 2.72251 0.661733 2.65128C1.75983 2.0425 2.84833 1.41469 3.94163 0.796397C4.04263 0.725926 4.15702 0.676554 4.27785 0.651282C4.39868 0.626009 4.52343 0.625364 4.64451 0.649384C4.7656 0.673405 4.88051 0.72159 4.98224 0.791013C5.08398 0.860435 5.17042 0.949647 5.23632 1.05323C5.32911 1.19515 5.38055 1.35974 5.38497 1.52884C5.38497 2.24225 5.38497 2.95567 5.38497 3.66908C5.37337 3.87807 5.28413 4.07538 5.13448 4.22294C4.98482 4.3705 4.78536 4.45784 4.57459 4.46811C4.30606 4.46811 4.03753 4.46811 3.769 4.46811H1.14605C0.895392 4.51514 0.63611 4.46418 0.422488 4.32588C0.208867 4.18758 0.0574708 3.97267 0 3.72616L0 3.41225Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' mt-3' width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.67144 3.80131V6.48851C5.6853 6.62266 5.66918 6.7582 5.62423 6.88547C5.57929 7.01275 5.50662 7.12864 5.4114 7.2249C5.31618 7.32116 5.20074 7.39543 5.0733 7.44242C4.94586 7.48942 4.80954 7.50799 4.67405 7.4968C3.55518 7.4968 2.4363 7.4968 1.31743 7.4968C1.18232 7.50725 1.04654 7.48813 0.919696 7.44081C0.792851 7.39348 0.678033 7.31911 0.583355 7.22293C0.488676 7.12676 0.416449 7.01113 0.371777 6.88423C0.327105 6.75732 0.311079 6.62223 0.32483 6.48851C0.32483 5.36131 0.32483 4.23412 0.32483 3.10692C0.315971 2.91218 0.363681 2.71902 0.462287 2.55039C0.560894 2.38177 0.706249 2.24477 0.88107 2.1557L4.23769 0.25326C4.33658 0.184651 4.44835 0.136433 4.56637 0.111465C4.6844 0.0864977 4.80628 0.0852884 4.92478 0.107909C5.04329 0.13053 5.15601 0.176521 5.25626 0.243155C5.35651 0.309788 5.44226 0.395709 5.50841 0.495821C5.60925 0.676508 5.6636 0.879077 5.66665 1.08558C5.68103 1.98924 5.67144 2.89765 5.67144 3.80131Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' -mt-1 ' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M5.99627 6.00354V10.4457C6.00856 10.5835 5.99041 10.7223 5.94308 10.8524C5.89575 10.9825 5.82039 11.1008 5.72224 11.1991C5.62409 11.2973 5.50552 11.3731 5.37479 11.4213C5.24406 11.4694 5.10432 11.4887 4.96531 11.4778C3.85283 11.4778 2.73396 11.4778 1.60869 11.4778C1.46968 11.4887 1.32993 11.4694 1.19921 11.4213C1.06848 11.3731 0.949908 11.2973 0.851761 11.1991C0.753613 11.1008 0.678248 10.9825 0.630921 10.8524C0.583593 10.7223 0.56544 10.5835 0.577728 10.4457C0.577728 8.14854 0.577728 5.84659 0.577728 3.54464C0.567367 3.34355 0.616263 3.14381 0.718447 2.96983C0.82063 2.79584 0.971678 2.65513 1.15315 2.56488C2.28001 1.93707 3.39729 1.295 4.50977 0.662439C4.61011 0.593758 4.72314 0.545417 4.84237 0.520193C4.9616 0.494969 5.08468 0.49336 5.20454 0.515457C5.32441 0.537555 5.43868 0.582923 5.54081 0.648957C5.64294 0.714991 5.73091 0.800388 5.79967 0.900244C5.92103 1.08669 5.97978 1.30646 5.9675 1.52805L5.99627 6.00354Z" fill="#FFC548"/>
                                    </svg>
                                </div>
                        </div>

                        </td>
                    </tr>

                    <tr>

                        <td className=' h-52 w-65  text-gray-700 whitespace-nowrap  '></td>

                        <td className=' w-130  text-gray-700 whitespace-nowrap  '>
                            
                            <div className='flex'>
                                <svg className='-ml-14' width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <rect width="34" height="34" rx="10" fill="#E8EDF8"/>
                                    <rect width="34" height="34" rx="10" fill="url(#pattern0_1003_9425)"/>
                                    <defs>
                                    <pattern id="pattern0_1003_9425" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlink:href="#image0_1003_9425" transform="scale(0.00543478)"/>
                                    </pattern>
                                    <image id="image0_1003_9425" width="184" height="184" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAGYZJREFUeNrsnQ+MFcd9x+c9wD4wls+JoZzrhkf9NwbKnZ0eVYWbo4qlItvyEQUi11F9WJHTqsYYUdWpo3JAlcRUsYDiqrVlmSOJbQVHgQhaR0lUjppWMbHhDBz13/JIiXFtXD8LjM823HW+c7OXvcfO7Ox7O7Ozs/OTnt5h373d2/vsd7/zm9/8hhAfPnz48OHDhw/rouQvQTrx1rtDFfpW4f9sp6/Wum/5fMSP7an7d42+BvjX1Rmfbqn6K+sBNw1yFwd4Jn8Pg60jqvwF8I/hnYLf7/8SHvA0YAbAAHoef69YdHqAHqC/hHcK/YD/i3nAVWwGQL6dv7fm6PRrHPgfc+C9vfGAj6l0N4e63aFfbYDDvqPI6l4qKNQVDvUKy2yHTjuzicNe9YC7C3YPfbuL24+iBmzMVgp6nwfcHbXu4WrdSnyEPTtUvc9lVS85DnYvh9uHPKDma10EveQg2F1crbs9tw2BvsmlQWnJIbC9YntFdw9wCjZ89QYPtjbQV1LQax7wbOBe4wePZgajFPI1HnCzPnsLKUYO25aAXVmWtzqYUs7AbuU++37PW2axkfvzmgfcq7ZXcw+4V22v5gUFnBdCQbXbPUvWxgBXcytz52WL4e6hb7s93NYH/j67+d/LK7gi3FDtHs9O7gJ1Lcs84HK/7VU7/5ZloS2+vGwR3ID6gIfbCctygP89vYKH4IZyOzEjOVgbHPv6oolTSGXqrCKCXuNKPlBowPngZEse/4JvD71N9r2zj1RPHyVHT1XZuyxmXzqHzJpaYcB3Tuuk8F9UBNCXZbm4ouThThYfnP2A7D6xm73igI4LgH7r79xaBNgzg7zk4VYH+1/+ZxfZRV/4Os0A3AD9FvpyGPRMIC95uONj29EfaAE7CvSls77MYPeQ5xTwPMENC7L5yCNNW5GkAa/+wNwHXFVzo5CXPNzRAY+95bUnEqv29JbpZNrk6eNvlFNHE38O4F53wzpXMzDGIC8ZhBtrJLfnBe5H/muzMtAL2xYy1Z3dOlvq4QffGySDtcMs84IMjErc+9nl7PMdjMUU8h1OAJ6nPLcq3IBuYdsfS6GWBXLlP6DefvC9w0WF3EievGQA7goZnaF0Am4o9d1XL0vNOgD0J159Itbnr7vh7xq+mSyHvEPn4uaSZrhzU1sC0Fbv/1u5cbz6bm0ZDmRqoOgF9ORaa1d016LkopYb/nj9wYekcD3c+bDW9B3Sg7AioswJzhEZHQejXWfiQRvgfMV7LprvwJaIshwmlRM+G8cSQQ4bs02i8jmObs5LPgDn6yd783BlYU2Q1bDFFuBYsEKigI1RzcDkLHo5N3YDzn339rxcVZnvBWhZeF4o+ZepZZH5dUdjO+fHagXfTnJS9gr1FqXpUACVZWoOnlx0cyHb46iKpy6OqQJO7z6sfO/Ky9XcfeLfhNYEA76sY/n19xZRxbs4R3YBHmp+mZsQee9bLanqg4KLniKic3fIj1dsU/AtJEcrcgCIKHPSZdGsoSg1iXN3GPJWklLqMBXA82ZNRv232HujvsSWgIqLvLjod/BWJUXAQ52nchVHT1cj//vs1jnWnavIphx+b5A4Hr3NZlXSUPANJIeLhVHCGhWzLrZvKnzOpdE1KKbr1DOyKhsyA5wn5nvyeOVE/tvGgiZZLj68gt/R6GlmAqhZBe8lPjKHvADRaxxwvjqny6NnJi6adFGRf/2uRnsflrO4q3z4MMVbQ4Dzu6ni4lV0dArcCZfWiIqXTd5NNoUo1109VfUoOaTiiQF3Rb3rV74Hse/k81aer6goDL0PvYqnq+BOeO/OyzqjAbdw+luW7y5gdqVXG+AueW9MyUdF0HvQphDNWGIBtPfi6Sr4Xa5cJXhwESC2laKKbjh0qi1o3JU64Ly3SZdLV+nWK6Ir9ZBJsUXFMVMpsiiONgRSiS7VBvtJFHyFa1dJVjkIFdfdbFMlREvqcN4Fn91ckRrgvKKrx8WrtFSw9hEqjnbJWau3KHuyVLJmsyDRo1JpqKrg3a5eJTzmRUoI9cyqYg9Pj0eORHfZwmoj0SC5YNGdFuArXL5Kd18jbtOw/uD6TKwKerWIZlWh3gXZ/qRpLmNbt/G1cc4XHq8/9JB0jaasV4kOuEWDXDxt0GUrzSifeZNMONFPJpx8kX1dfv/V875n+JJryPCUy8m5y26kr8+xf1sSs2S9DScW2Z6EAwCjvXGUWmN3h85p87XXiuPY6Ekuy+DInjZJYyKFetIbTzGwY28CCj1e+BnECIX9bFsX+eTKOxj4GduUjc0oeGH2rgTIAEyUtfgOVU5d1gBwr96/Wur50QwojcHlpF/tJBe8/BgpUbVOI85+5jby8XX3ZAX6AFXwjoY8OLcnhdmYFVZENPkDP6xzAgi2RAY3zqtZuKHUU3bfQS7cvyY1uNmTgN4wU356G7tpMoh2WYuJuEFmNylY3PvZe4UqDYXXVasi+1z4buzZ02iUPjlFWp5fRSbvvSfSX6cVF7z8KLuBdB4jKadxgN9eNMBhRWRKKetE2+xxRXDLOs6q+Gyoa+CddQfgxo2k4utTjNsb8uBU+kdIQWP1gdXSvoUPzP166gqOTE44kKPH4LcRuKHasCKqYI9Mupico4PG0SzJjeP8NDIrpTMn2GdNOPmCskJ/dMMa8gn15yaC+vBSIsDztGmUrkHfX/znnwvVGoCnPdmCmUv0S8QxOy+b33CtCdQTlgSQx4JNQcYAMQmIAPyCN55i3tsiyCM3tZIBjn4U95MCR5SqBgFV/ac//GfrJlwuPPQwS/3pADsK9AsPfUdqR/Bk+HDBYyby5hsp4CuTePB2UvCAQsvqxlW3GjTlfTHAU4H7kyv/lJxZ+FTTygpoAe/H131NapXgyVWeJs1mU5JaFCv9d+m/X2cv8sZrhAx9SEpv/vp81fjdqwiZPJm+X00I/Xrk8t/WZlV0bkylGoAayq2i2kPUMsBjp34O1K7A84sCk0JD8x/Weh2ifHhJAHcXGd0dzR6oX3ielI4cIuTDD5N/wKWfIiOfm0+Gb+xkX6dtVTABlEXDziD9p5KxAGDww7AMugLnAbUWBQDHeWgM7NbWrwI4vPeGzMEePERKP382UqUbjREK+fDNixKDLqsPwSTMuo51Rq8NMhpswibm0Q+gP567ylg2Q6bkeILAGmm8yVZSwDeqePB5mYJNgS4/upmUv/t4qnCzz35xH5nw0FpS/vlPEj0NYEVEKo104i5DteMs/UftiEqWhHnkFLx2ksCx4PEjz/3Mm9ROPa3z8PNUB5mVzAZLFLzypr8f9dk6QfnZs2QCjqN4A7FtTa4Xb2uyzUDteDCJojKQxMDvzMKnM6kPQXZmRHDcSQqpxSaiogp4l/GrQtUUqg3wjMV7/zd6M72oNv2OakLZjgs6N2pFnYfKNPioDXiaQZZVwIJgMCtUcX2Qd8UOMjOp/wbcj21WVlOWFUF2BFkSDCBDWRL2Gciu4AkweFD9Mxd8ngzf9kWlrMpf7VslXIyQVsXfmAJRIOBplQaS1B58RP22zoFkkhBN2WvOqIyrDy9lnkFRhRtpPwwQF3QlGyBCpff2j6p0jOdWhTxuX3tMAKWRVUkykESGRHOGItUB5we39Ou6EcdlUqIsSrttcI/cvIice6B3FL6kaT76/fg5/DxuEKkv37tHya7Aqsg2an1n6J2mL00LBUNlIImcNgaStsEdDDhFEGssxmqP8+DGtiMpP/OkFG5Yj+EVf02Gv/AnTMGbe15OJsNL7yTDX1su/azytieZ6seFbKPWNPy2Up0HtSNsGjzbFTXyG1Bw42kEvDUOcCMpQqaWg4fEcMOO3LO8qVnIyM+l3v0cvWlkn1tSAByBjVrra1EAfbNL2ybGNB1C+g8DSVE6zqYQPVnK77+i65Azx13LLBSc5bl3/kgON1VbbQHbQm+eJAPbyJwUr9VGDvxtakvmULBv0TxtD6hZGs6SgWRciIqsNC6KqMQBrl+9s4Q7PGhdcicpUcjHDT6RlUEtSwLI0972+2zbQnJBHQC2DiRjARfYJwPFV0LAtQ4yx4qlRJ7bBNzh41ElRzkAgxw+XSGLEhdIJWLiJ9iLEz0Q66sSgxlJeNGRSVPHzQAGOWxM6OD7bEv/NaLiBpexjeM3Kk2otYqQTeZEAU7hgjdupBjKtli1b9V5s5r1CySiJm0AcR58deKHpSAffrpbz0AzXFVYNvmLwu8K1TtpftvSEHWD3XV81zj/GaVomqexCxlmAd/bLx70IRVYkBD5T6x7LNLv6x7gR6LTgmx20pGY1jIt8r9PD/13eNIoP32urctJwDNoI2EecJaOE0yVx80w5ikwRV+fVUGmJdzbMKjRDkMO6OHBnYNb0GBoxNDklLE0oUi9R2bPbX6W0rLAavjZl85mvQ6nT54eOfGDrAlSfoG66VhGZrN6D09pMw+4rAVW0/Hm8WjAURHoYEDJp7fJC65YLxJHwQ5CNCU/fMm15gFHmSGFXM+RRNPfKU/FWxGoYNz5o9FShGA9aN0g+vTQWfLtnS+T5149SWZc0kIWzZtBlt1Uce5SiBoPmbqxzVkUwZR4klnD3KjWo5t/c0PTdyziKLVMZuW4Qdz3/QHy+v+eHn1yvj9Etvx7lX3tEuSAW9Tk0xTg5UyvgGPem93IyPNHPK1KgwfHvh44VhuDOxzPvvSWU9dCtLQOYw9Ts7KZAj7S5qA9aSJOf3TWKe8t8t8m06FmAFcsP3Uh2E0b9WQKzdJe9VtTydSW893hTddc5sx1QEs30cDa5Cr/KMBrqR/FgSn4SDuyd89oewvU1wS17UHBVghyjDPCRVyA+1tfmjMO8o6ZrWT5zc2PRzBrCGuARRNZTf3j2KL0oIFam1rcIHOAGFpVXzrx63ySjSxJXc8WeO/hP/sqy+tj4uocfTE/jsFlRKaonQL9r6sWMD8O0KHqqQxr6prcY2UQVv0Y891se5RHxep95R26T2EgkyxKZDTShi1r1aZKjaV2UeeOsls2cRVS7rgA6EEE2RS8T71wIln2R5VE4CNrUa+crJXy/jXCNg6p2gG0VZb0SPw4g5LfKMCrWrwpVbGoVCFULhepQiyQRm5bsii51MRYA3nx+743wOAO4sCvauQfvtKuDLnIFkDFW+i7TsjjOgAgLWjIe1fjPPgxLYcVZEx0d7BKRbXpjTlBoUHQyPVzGz4GYA7DHUD/rZ0vK3+GrAc3g3y/HsDh+WUdAFgjIM2dZUX8mhlkMgW/Ivp/hPLDNkbQSi4uE8RWBzWxGggwRwXy5VueU3uonuVbkMggT3OTKBRSwfPHtW7GGMCgNanFAT6gBfDZc4XqaGUaMUErOdYwCKuRmpi46pgpXusNXx41MRQVUEqZkgeN8qHm5Qa3EsTP4eexuVVc+wesIzW8K/I4fo22bkNX1yiYjS00TmEgOT5lMXk0c5LSGAJKHUzZ1wd8OPx4VP78vPPnuyqoKDVTffqKm11k231TmPEUUO1pYnITqlDIW7dxyLWsy8TjXqSI577em32+HKqNfuR798SrNnLbFO60yw3ufvwFoVov6bxCOVeeBPKx32nK5ayMFaCj2g87qgWqn2RVTpYdAOp3eRABjs4z6Z8dVW+m4lEXJWMVZ+tFYzptjQ3mqNcOF06lGYAbkIsCKt4+s1UZcvjjiQYnfGBHhm5Ya9qWBNFPAV8Y58HPS7WkFigdFazeQYYiq4wKm5FU6ZHIW8npgjuwIsh/iwJZFdGANDJ7QZUUvtzEChrMUhraUY2ocisC/CVtdzi2DxFZmO8+bnbyB5aEHpN12YrrPKuplVxUoGRWNOhkk0HPJdMfWAVsHYKm+DqyGcjcoJWcBb1bzuM2k02o2ISJwOcGzXh0l9LiaaF0Q2EgueROYRZIVwBkWBWRWiexKvW2BduIYEq91GAWZezGQbMi+rJoVZLaJlQ6B5qBck5Yv1a8CFkz5LIb7LyBJMYFGQ1+n9l3nGz+WbRtQzZl21/+gVJWRRSYfRzdnvtFJdiDJXYqWZcsQnkbQa0DzeDASMVBQWV+F1mKFOFKMpBET3IberWs+P4AOXAseu4N5bXfXDInnWtDlT3IloQzL0GLi5EpbVa3aY4aYMYBvoa+9eo8o1gl5aWnTbeVgNf+jz1q+/+gCRFy25asFY2zKgDcpTryJmItBXxNEsC1+vAxyLc9GV/jgf14qKI2MqGCzy4DbIXZUvhs+O2k1ghWYu+rJ1kFIHLVjXhjWTx78C22QFmXVXEkzvPfUsC1+/CEkAe2BT0MGegS68KsyJFDbHdkpTKABp8UrAIwtHhYp6p+45nDbAW+bquS14jy3yqAb6dv3TZBHrYSI4D8ylBflTdeG11EkSDV2OhAEtbhQQpd1KwjUnybvpJuF2rcTEv/8RdCq/I3t11HFv3ejKLyvYMCvjhyIB3zg3tMAQ7Iyp/6tPo+mWjHAHVudHIIqv2FRQ1N2gAyEdy6AhYEEEPJowLZFtxY6LFSwBAO5OIWHe8weZbIWrBNojSn5eC1zzU4IymyJeMel5oggxURWZ+gkVBRFVxoV2Mfxe8OHSAmtxYMZz3QbjnFmc1mBqtBACIM+kQBFf1m3YJik1YFxVgY6BYoBqg96WgG8Pvp24ZMTj0l0NMAG4FBnsgiIJJU+zX1Fz1WY08Rn1VhsZICvrEZwCvE9NbeUSc6eIh1hxJ1joochLIV7vNTyWnbppzw3EhPRgUGm/DrBYlx9d+JAeeQa53VbETZWbYkGGgGSt0ymTXzZNmVlH28bDFCFkDhRsMEUP06ziAarVXJWUTOXibJogSx1SrAsQUgtxsjhmASqSXKW7NQS1iQB+lxRVYFN+Smme2uA7417htUW7dhlFojBY1nfnlcaE0ezNAKQKFFtgj1K7LBsANRIwpZPiXA6WNA6cOcBVziddPqSNVooHZcNKAUnbcjsYNzmYqCIzYVEW5kTkTqLVt5Y9KqiDI3yNUPHHP2wavEozLg9G6B2esvGuB7XxHXf9gya4gniehcHFXxfs5jeoAXVcVFtdgLrrWrRFX0NJE9gVxX78SA07sGPrxaFLgBhigNZ1sNNs5H5MVFVYg5jSrnMH3AeawtCuCiehPYAdtmCnE+opvOMR+eiL/EgNO7p69IKh4Vba12VuyJJnZeM1j1aEC9+7QCXiQVR8fXPMXVgpTl6+4Anpi7hgAvuopjaZqNkXVO3jb1bkbBESuLCrhLu6HlKBrirWHA+Ui23+Ur2vGZVo+VHdGfJHOSloIXVsVtHbSJUppFVe+mAeezSX2uXlWRp5XlxzMFvDbkojfvU5211KHgwd3lZMEDcsuiKfDnXrFv8kQ0odOW34XItWZdQtOA84ouZ62KqMvrXgtnB0VlBVfNyK2Cr1SpGNSt4EHa0MkBp2jyBDDZZFOQ6xblu3Pa2q2/kbSgFsB5LHPRqshqPERL2LIIUdUgLFYOPXiN80SsAZwv/HTOqshqPLBixgYVxzmIVu/cdG0u1XulbCFxVgoeWBXnVv7IVsvb0GxHdg457JGyIw1rogXwkFWpugQ4HvEdEi+edEuRtK2JaHApWwhhaVTTsibaAOej3sWuqbhs5Ty8eBYLfJEWFO0AwZTGgiV1CWNxs1kTEwoeTAA55cehhDJgAJrJqj0cS2ZNcK45U++VzUzoGAWcQ452Wn0uQY4V7LLZTfQoMaHkOAaOJVqKhnNc8vu58t59svZrVgIe3JWkbu/wvAf6oIjShkGHV52eHE+Kb0v2ygwaAuWoN6HWp31J99m/9e4QRmfoUFtxBfK4JpyBit5381WptU/DsjNsAhuXlszZnj1Qgo60fbdRwDnk6CGG/obO1J/K9s0JB7IvX+q8omHocDP9UJIpqR8I52iXB/xCC3X4buOAhyA/4JJdUYU8GKQCdrSbwNIy0QAQCo1yXPRjSdLyIYdbmHTohtso4BzyHvq2xSXIkc2QDfjibMzF3Cufoj/fSBYGXhudZHM2Hb8szckcawB3FXLA/Y0fHlayEalKoObdJPIOdyaAuwp5YFmQ5dDdSSrIyedwVzWjcGcGuMuQs17ivzzOptDTBh1gL5o3g+W4c7hFiXG4MwXcZcjDih4MFpsJZGAwOM3xPpiZwJ054Bzybg65s0vYoeRoIhS0Mz5RGxLms6HMyLJg0IgcOlb253hDqRqHO7MK05INV8HFPLkPM3nuuCjbcCX4RcBehwOeCyeC/T2zhtsawDnkVdzxpMBbpTgSO7hyV204mZKNV4haFmw8e79nJXexkYJtVZl0ydYrVYTBp2N+O9PBZO4A55BX6Nt2+mr3DFnttxfbYklyBXgI9DX0rdezZF2spWCvsfkES3m5kjyVCDWveK4yjypXbeuzXuW8XNFQKnGt5ytb1SaWpACdUvAINUempcvzZiz6iaaFwR5wMeg9HHSfadEXNQ52Xx5PvpT3q8/XfCJnvsKDnjrY2HB1o841kx5wddAx+ESmpcez2XRArdfamvorJOAedA92IQCvA30FB91bF7kVAdibXALbecDrPHoPh73ieR6LKvfYfXn22IUHvA521LfcRV/dBQYb9SJbbawb8YCnr+qAvQh1Lshdb3VdrT3gYq8ORb+duDVx1E9fPyajDeWrRf37Fh7wCGXvCsGeJ89eDUHdXzSl9oA3ru4AfR63MjYpfD+3Hi9xoKv+L+YBTwP6dq7s7Rz8Vs3gA+QaBxlAV/NWD+IBdwv+IOce/lolauQ3i65rHmIfPnz48OHDhw9n4/8FGAC4ZO8LEjHrEAAAAABJRU5ErkJggg=="/>
                                    </defs>
                                </svg>
                                
                                <div className=' mt-8 ml-14 font-verdana font-bold text-12 text-gray1' >Grl-056278</div>
                            </div>

                        </td>

                        <td className=' w-241 text-gray-700 whitespace-nowrap '> 
                            <div className=' flex mt-1  font-verdana font-bold text-12 text-gray1 ' >COMERCIALIZADORA DE SOFTWA...</div>
                        </td>

                        <td className=' w-190  text-gray-700 whitespace-nowrap '>
                            
                            <div className=' flex mt-1 font-verdana font-bold text-12 text-gray1  ' >ELIMINAR REFERENCIAS DE LA...</div>
                        
                        </td>

                        <td className=' w-212 text-gray-700 whitespace-nowrap  '>
                            <div className=' flex '>
                            <div className=' flex justify-center w-190 h-20 mt-8 ml-10 rounded-22 bg-red1 ' >
                                <div className=' flex font-roboto text-14 text-white1 text-eight'> 100% </div>
                            </div>
                            </div>
                        </td>
        
                        <td className=' w-185  text-gray-700 whitespace-nowrap '>
                            <div className=' flex ml-35 mt-1 font-verdana font-bold text-12 text-gray1' >-35H 50M</div>
                        </td>

                        <td className=' w-122 text-gray-700 whitespace-nowrap '>
                            <div className=' flex justify-center mt-2  w-94 h-28 rounded-5 bg-cyan4' >
                                <div className='font-worksansM mt-4 text-12 text-cyan2'>EN PROCESO</div>
                            </div>
                        </td>

                        <td className=' w-122  text-gray-700 whitespace-nowrap '>
                        
                        <div className=' flex'>
                            <div className=' flex mt-1 font-verdana  text-12 text-gray1' >MEDIA</div>
                            {/* Nivel (Vector) */}
                                <div className=' flex w-18 h-11 mt-4 ml-14  '>
                                    <svg className='mt-6px' width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 3.41225C0.0476002 3.24519 0.131509 3.09048 0.24583 2.95902C0.36015 2.82755 0.50211 2.72251 0.661733 2.65128C1.75983 2.0425 2.84833 1.41469 3.94163 0.796397C4.04263 0.725926 4.15702 0.676554 4.27785 0.651282C4.39868 0.626009 4.52343 0.625364 4.64451 0.649384C4.7656 0.673405 4.88051 0.72159 4.98224 0.791013C5.08398 0.860435 5.17042 0.949647 5.23632 1.05323C5.32911 1.19515 5.38055 1.35974 5.38497 1.52884C5.38497 2.24225 5.38497 2.95567 5.38497 3.66908C5.37337 3.87807 5.28413 4.07538 5.13448 4.22294C4.98482 4.3705 4.78536 4.45784 4.57459 4.46811C4.30606 4.46811 4.03753 4.46811 3.769 4.46811H1.14605C0.895392 4.51514 0.63611 4.46418 0.422488 4.32588C0.208867 4.18758 0.0574708 3.97267 0 3.72616L0 3.41225Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' mt-3' width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.67144 3.80131V6.48851C5.6853 6.62266 5.66918 6.7582 5.62423 6.88547C5.57929 7.01275 5.50662 7.12864 5.4114 7.2249C5.31618 7.32116 5.20074 7.39543 5.0733 7.44242C4.94586 7.48942 4.80954 7.50799 4.67405 7.4968C3.55518 7.4968 2.4363 7.4968 1.31743 7.4968C1.18232 7.50725 1.04654 7.48813 0.919696 7.44081C0.792851 7.39348 0.678033 7.31911 0.583355 7.22293C0.488676 7.12676 0.416449 7.01113 0.371777 6.88423C0.327105 6.75732 0.311079 6.62223 0.32483 6.48851C0.32483 5.36131 0.32483 4.23412 0.32483 3.10692C0.315971 2.91218 0.363681 2.71902 0.462287 2.55039C0.560894 2.38177 0.706249 2.24477 0.88107 2.1557L4.23769 0.25326C4.33658 0.184651 4.44835 0.136433 4.56637 0.111465C4.6844 0.0864977 4.80628 0.0852884 4.92478 0.107909C5.04329 0.13053 5.15601 0.176521 5.25626 0.243155C5.35651 0.309788 5.44226 0.395709 5.50841 0.495821C5.60925 0.676508 5.6636 0.879077 5.66665 1.08558C5.68103 1.98924 5.67144 2.89765 5.67144 3.80131Z" fill="#FFC548"/>
                                    </svg>

                                    <svg className=' -mt-1 ' width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M5.99627 6.00354V10.4457C6.00856 10.5835 5.99041 10.7223 5.94308 10.8524C5.89575 10.9825 5.82039 11.1008 5.72224 11.1991C5.62409 11.2973 5.50552 11.3731 5.37479 11.4213C5.24406 11.4694 5.10432 11.4887 4.96531 11.4778C3.85283 11.4778 2.73396 11.4778 1.60869 11.4778C1.46968 11.4887 1.32993 11.4694 1.19921 11.4213C1.06848 11.3731 0.949908 11.2973 0.851761 11.1991C0.753613 11.1008 0.678248 10.9825 0.630921 10.8524C0.583593 10.7223 0.56544 10.5835 0.577728 10.4457C0.577728 8.14854 0.577728 5.84659 0.577728 3.54464C0.567367 3.34355 0.616263 3.14381 0.718447 2.96983C0.82063 2.79584 0.971678 2.65513 1.15315 2.56488C2.28001 1.93707 3.39729 1.295 4.50977 0.662439C4.61011 0.593758 4.72314 0.545417 4.84237 0.520193C4.9616 0.494969 5.08468 0.49336 5.20454 0.515457C5.32441 0.537555 5.43868 0.582923 5.54081 0.648957C5.64294 0.714991 5.73091 0.800388 5.79967 0.900244C5.92103 1.08669 5.97978 1.30646 5.9675 1.52805L5.99627 6.00354Z" fill="#FFC548"/>
                                    </svg>
                                </div>
                        </div>

                        </td>
                    </tr>
                    </tbody>

                </table>
            </div>

    </div>
  )
}

