import React from "react";
import "./AssigmentComplerion.css";
import Chart from "../../../components/common/Chart/Chart"
import { DetailsButton } from "../../../components/common/DetailsButton/DetailsButton";

export const AssigmentСompletion : React.FC = () => {
    return (
        <div className="assigment-completion">
            <div className="assigment-completion-functions">
                <h2 className="assigment-completion-functions__header">Assignment Completion</h2>
                <div className="assigment-completion-functions__buttons">
                    <DetailsButton text="Неделя"/>
                    <DetailsButton text="Месяц"/>
                    <DetailsButton text="Год"/>
                </div>
            </div>
            <Chart/>
        </div>
    );
}