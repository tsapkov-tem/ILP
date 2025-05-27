import React from "react";
import type { Feature } from "../../../../../types/Feature";
import "./FeatureItem.css";

interface FeatureItemProps {
    feature: Feature;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) =>{
    return (
        <li className="feature-item">
            <div className="feature-item-container">
                <feature.icon/>
            </div>
            <h3 className="feature-item__title">{feature.title}</h3>
            <p className="feature-item__text">{feature.text}</p>
        </li>
    )
}