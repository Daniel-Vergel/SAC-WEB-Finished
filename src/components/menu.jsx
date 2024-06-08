import React, { useState } from "react";
import { VscArrowCircleLeft } from "react-icons/vsc";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <>
      <div
        className={` relative ${
          !menuOpen ? "w-200" : "w-60"
        }  h-full bg-black1 transition-all duration-300 `}
      >
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <VscArrowCircleLeft
            className={`  ${
              !menuOpen ? "mt-217 ml-180" : "mt-217 ml-40"
            }  text-5xl bg-white transition-all duration-300 `}
          />
        </button>
      </div>
    </>
  );
};
