import { VscArrowCircleLeft } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeOpenMenu } from "../store/slidebarState/slidebarState";

export const Menu = () => {
  //const [menuOpen, setMenuOpen] = useState(false);
  const { menuOpen } = useSelector((state: RootState) => state.slidebarState);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={` relative ${
          !menuOpen ? "w-200" : "w-60"
        }  h-full bg-black1 transition-all duration-300 `}
        style={{
          gridTemplateColumns: menuOpen
            ? "200px 1fr 1fr 1fr 1fr"
            : "60px 1fr 1fr 1fr 1fr",
        }}
      >
        <button onClick={() => dispatch(closeOpenMenu())}>
          <VscArrowCircleLeft
            className={`  ${
              !menuOpen ? "mt-217 ml-180" : "mt-217 ml-40"
            }  text-5xl bg-white h-full transition-all duration-300 `}
          />
        </button>
      </div>
    </>
  );
};
