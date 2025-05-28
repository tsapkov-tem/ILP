import React from "react";
import "./AssigmentComplerion.css";
import Chart from "../../../components/common/Chart/Chart"

export const AssigmentСompletion : React.FC = () => {
    return (
        <div className="assigment-completion">
            <div className="assigment-completion-functions">
                <h2 className="assigment-completion-functions__header">Assignment Completion</h2>
                <div className="assigment-completion-functions__buttons">
                    <button className="assigment-completion-functions__buttons__period">Week</button>
                    <button className="assigment-completion-functions__buttons__period">Month</button>
                    <button className="assigment-completion-functions__buttons__period">Year</button>
                </div>
            </div>
            <Chart/>
        </div>
    );
}