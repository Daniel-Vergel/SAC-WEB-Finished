
import Select from "react-select";
import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setChangeMonths } from "../../../store/inputMonths/inputMonthsState";

interface OptionType {
  value: string;
  label: string;
}

const optionsMonths: OptionType[] = [
    { value: "3 meses", label: "Ultimos 3 meses" },
    { value: "6 meses", label: "Ultimos 6 meses" },
    { value: "9 meses", label: "Ultimos 9 meses" },
  ];
   
  
export const InputSelectMonths = () => {

  const { months } = useSelector((state: RootState) => state.inputMonthsState);
  const dispatch = useDispatch()




   // Función para manejar el cambio de selección
   const handleSelectChange = (selectedOption: OptionType | null) => {
    dispatch(setChangeMonths(selectedOption?.value ?? null))
   };

   console.log(months)
  return (
    <div className=" ml-21 font-roboto text-16 text-gray8">
        <Select 
        options={optionsMonths} 
        onChange={handleSelectChange}
        defaultValue={optionsMonths[0]}
     />
    </div>
  )
}



