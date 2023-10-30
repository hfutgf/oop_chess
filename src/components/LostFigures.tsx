import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div>
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id} className="flex flex-col flex-wrap">
          {figure.logo && (
            <img width={20} height={20} src={figure.logo} alt="logo" />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
