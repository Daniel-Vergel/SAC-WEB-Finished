import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import "../../../App.css";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import { useQuery } from "@apollo/client";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  nextPage,
  nextPageX10,
  prevPage,
  prevPagex10,
} from "../../../store/paginationSate/paginationState";
import { RootState } from "../../../store/store";
import { GET_CURRENT_ACTIVITIES } from "../../../gql/GET-ACTIVITIES";
import { Columns } from "./columns";
import FilteringRows from "./FilteringRows";
import SortingFilteringBox from "./SortingFilteringBox";

export const Grilla = () => {
  // const [currentPage, setCurrentPage] = useState<number>(1);

  const { currentPage } = useSelector(
    (state: RootState) => state.PaginationState
  );

  const [totalPages, setTotalPages] = useState(0);

  const { inputValue } = useSelector((state: RootState) => state.valueState);

  const { inputValueRows } = useSelector(
    (state: RootState) => state.inputValueRows
  );

  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_CURRENT_ACTIVITIES, {
    variables: {
      pagination: {
        skip: (currentPage - 1) * 4,
        take:
          inputValueRows &&
          !isNaN(inputValueRows) &&
          parseInt(inputValueRows.toString()) > 0
            ? parseInt(inputValueRows.toString())
            : 4,
      },
    },

    onCompleted: (data) => {
      const totalCount = data.getCurrentActivities.length;
      const pages = Math.ceil(totalCount / 4);
      setTotalPages(pages);
    },
  });


  const table = useReactTable({
    data: data?.getCurrentActivities ?? {},
    columns: Columns,
    getCoreRowModel: getCoreRowModel(),

    state: {
      globalFilter: inputValue,
    },

    getFilteredRowModel: getFilteredRowModel(),
  });

  if (error) return <p> Error: {error.message}</p>;
  if (loading) return <p> Recuperando personas </p>;

  return (
    <>
      <div className=" overflow-auto scrollbar-webkit">
        <table className="w-full ">
          <thead className=" bg-purple1">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="font-verdana text-12 text-blue1 border-b-2 border-blue1"
              >
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className="h-46 px-6 py-4 text-sm font-semibold tracking-wide text-left"
                  >
                    <div className="flex items-center">
                      {index === 1 || [2, 3, 4, 5, 6, 7].includes(index) ? (
                        // Verifica si es la primera columna o una de las columnas específicas
                        <>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          <div>
                            <SortingFilteringBox />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <FilteringRows />
                          </div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-100">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="h-52 px-6 py-4 text-12 text-gray1"
                    style={{
                      maxWidth: "180px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" rounded-10 border shadow-md w-150">
        <div className=" flex ml-4 mb-4 mt-4">
          {/* Atras x 10 */}
          <button onClick={() => dispatch(prevPagex10())}>
            <MdKeyboardDoubleArrowLeft className=" text-2xl -mt-2 text-blue1" />
          </button>

          {/* Pagina anterior */}
          <button onClick={() => dispatch(prevPage())} className="mr-10">
            {" "}
            <MdFirstPage className=" text-2xl -mt-2 text-blue1" />
          </button>

          {/*Cantidad de paginas*/}
          <div className="text-blue1  font-trebuchet">{currentPage}</div>

          {/* Siguiente Pagina*/}
          <button onClick={() => dispatch(nextPage())} className="ml-10">
            <MdLastPage className=" text-2xl -mt-2 text-blue1" />
          </button>

          {/*Siguiente x 10*/}
          <button onClick={() => dispatch(nextPageX10())}>
            <MdKeyboardDoubleArrowRight className=" text-2xl -mt-2 text-blue1" />
          </button>
        </div>
      </div>
    </>
  );
};
