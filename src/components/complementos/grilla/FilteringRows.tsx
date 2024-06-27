import { useEffect, useRef, useState } from "react";

import { TiArrowMinimise } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { setInputValueRows } from "../../../store/inputValueRows/inputValueRowsState";

const FilteringRows = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { inputValueRows } = useSelector(
    (state: RootState) => state.inputValueRows
  );

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10); // Convertir el valor seleccionado a número

    // Verificar si el valor parseado es un número válido
    if (!isNaN(value)) {
      dispatch(setInputValueRows(value));
      setIsOpen(false);
    }
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const FilteringRowsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        FilteringRowsRef.current &&
        !(FilteringRowsRef.current as HTMLElement).contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ml-10 " ref={FilteringRowsRef}>
      <button onClick={toggleBox} className=" text-black  ">
        <TiArrowMinimise className=" text-2xl text-blue1 mt-2 ml-5" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-150">
          <div className="mb-4">
            <h2 className=" mt-5 ml-5 font-worksans text-15 font-bold  text-black">
              Cantidad de filas:
            </h2>
          </div>
          <div className="  mt-4 ml-7 ">
            <select
              value={inputValueRows}
              onChange={handleChange}
              className="mt-2 mb-2 px-3 py-2 border border-gray-300 rounded"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilteringRows;
