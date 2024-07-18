import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { InputIcon } from '../../iconos.jsx/Imputicon'
import { TiArrowMinimise } from "react-icons/ti";

export const GrillaSqueleton = () => {


  return (
    <div className=' ml-10 mr-10 overflow-auto rounded-lg shadow '>
        <table className=' w-full mt-16'>

        <thead className='  bg-purple1 border-b-2 border-gray-200'>

                    <tr className=' font-verdana text-12 text-blue1 border-b-2 border-blue1'>

                        <th className=' w-53 h-46 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                        <TiArrowMinimise className=" text-2xl text-blue1 mt-2 ml-32" />
                        </th>

                        <th className=' mt-8 text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                           <div className=' flex '> 
                                <p className='mr-16 ml-39'>Ticket</p>
                                <button><InputIcon/></button> 
                            </div>
                           
                        </th>

                        <th className='  text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16 ml-70' >Cliente</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16 ml-10 ' >Asunto</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className='  text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex  '>
                                <p className='mr-16 ml-10' >Tiempo Transcurrido</p> 
                                <button><InputIcon/></button>
                            </div>
                        </th>

                        <th className=' text-sm font-semibold tracking-wide text-left whitespace-nowrap'>
                            <div className=' flex '>
                                <p className='mr-16 ' >Tiempo restante</p> 
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

                {/* Primera fila */}
                <tr>

                    <td className=' '>
                        <div className=' ml-25'>
                            <Skeleton height={32} width={33} circle className=''/>
                        </div>
                    </td>

                    <td className='  pr-10   '>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '> 
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10'>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className=' w-122  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                {/* Segunda fila */}
                <tr>

                <td className=' '>
                    <div className=' ml-25'>
                        <Skeleton height={32} width={33} circle className=''/>
                    </div>
                </td>

                <td className='  pr-10   '>
                    
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=' '/>
                            </div>
                        </div>
                    </div>

                </td>

                <td className=' pr-10 '> 
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=' '/>
                            </div>
                        </div>
                    </div>
                </td>

                <td className='  pr-10'>
                    
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=''/>
                            </div>
                        </div>
                    </div>

                </td>

                <td className=' pr-10 '>
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=''/>
                            </div>
                        </div>
                    </div>
                </td>

                <td className='  pr-10 '>
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=''/>
                            </div>
                        </div>
                    </div>
                </td>

                <td className=' w-122  '>
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=''/>
                            </div>
                        </div>
                    </div>
                </td>

                <td className='  '>
                    <div className=' '>
                        <div className=' ml-25'>
                            <div className=' ' >
                                <Skeleton className=''/>
                            </div>
                        </div>
                    </div>
                </td>
                </tr>
                {/* Tercera fila */}
                <tr>

                    <td className=' '>
                        <div className=' ml-25'>
                            <Skeleton height={32} width={33} circle className=''/>
                        </div>
                    </td>

                    <td className='  pr-10   '>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '> 
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10'>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className=' w-122  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                {/* Cuarta fila */}
                <tr>

                    <td className=' '>
                        <div className=' ml-25'>
                            <Skeleton height={32} width={33} circle className=''/>
                        </div>
                    </td>

                    <td className='  pr-10   '>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '> 
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=' '/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10'>
                        
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>

                    </td>

                    <td className=' pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  pr-10 '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className=' w-122  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td className='  '>
                        <div className=' '>
                            <div className=' ml-25'>
                                <div className=' ' >
                                    <Skeleton className=''/>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>

            </tbody>

        </table>
    </div>
  )
}
