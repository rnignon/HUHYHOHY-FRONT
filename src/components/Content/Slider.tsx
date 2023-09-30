import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Content from "./Content";

export default function Slider() {
  const crews = useSelector((state: RootState) => state.crewsSlice);

  return (
    <div className="slider">
      {crews.map((crew) => (
        <Content key={crew.crewId} crew={crew} />
      ))}
    </div>
  );
}
