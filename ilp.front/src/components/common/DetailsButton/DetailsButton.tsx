import React from "react";
import "./DetailsButton.css";

interface DetailsButtonProps {
    text: string;
}

export const DetailsButton : React.FC<DetailsButtonProps> = ({ text }) => {
    return (
        <button className="details-button">{text}</button>
    )
}
