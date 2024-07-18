
import { Bienvenido } from "./complementos/welcome/bienvenido";
import { BoardActivity } from "./complementos/welcome/boardActivity";

export const Welcome = () => {

  return (
    <div className="grid grid-cols-2 w-full">
      <Bienvenido/>
      <BoardActivity/>
    </div>
  );
};
