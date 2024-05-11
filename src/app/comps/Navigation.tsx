import { useContext, useState, useEffect } from "react";
import { SomeContext } from "../hooks/context";

type NavType = {
  selectedBtn: number;
  setSelectedBtn(num: any): void;
  patternState: { name: boolean; email: boolean; phoneNum: boolean; password: boolean; modulesave: boolean };
  setPatternState(value: {}): void;
};

const Navigation = ({
  selectedBtn,
  setSelectedBtn,
  patternState,
  setPatternState,
}: NavType) => {
  const { isPattern,clickedModules} = useContext(SomeContext);

  const isNextDisabled = selectedBtn === 2 && clickedModules.length === 0;

  const handleNextClick = () => {
    if (isPattern && !isPattern.isAllTrue() && selectedBtn === 1) {
      setPatternState(isPattern);
      return;
    }
    setSelectedBtn((e: number) => {
      let nextBtn = (e + 1) % 6;
      if (nextBtn === 0) nextBtn = 1;
      return nextBtn;
    });
  };

  return (
    <div
      className={`fixed left-0 bottom-0 md:static md:px-0 md:bg-White md:w-auto bg-Light-gray w-full flex ${
        selectedBtn !== 1 ? "justify-between" : "justify-end"
      } py-4 content-center px-10`}
    >
      {selectedBtn !== 1 && (
        <h1
          onClick={() => setSelectedBtn((e: number) => (e - 1) % 5)}
          className="text-Cool-gray my-auto cursor-pointer font-bold"
        >
          Go Back
        </h1>
      )}
      <h1
        onClick={handleNextClick}
        className={`p-3 cursor-pointer font-bold rounded-lg ${
          selectedBtn !== 3 ? "bg-Marine-blue text-White" : ""
        } ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        style={{ pointerEvents: isNextDisabled ? 'none' : 'auto' }}
      >
        {selectedBtn !== 3 && <p>Next Step</p>}
      </h1>
    </div>
  );
};

export default Navigation;
