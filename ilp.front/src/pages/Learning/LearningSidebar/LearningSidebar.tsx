import type React from "react";
import "./LearningSidebar.css";
import type { LearningPart } from "../../../types/LearningPart";
import { useEffect, useState } from "react";
import { LearningModule } from "./LearningModule/LearningModule";

interface LearningSidebarProps {
    name: string;
}

export const LearningSidebar : React.FC<LearningSidebarProps> = ({ name }) => {
    const [modules, setModules] = useState<LearningPart[][]>([]);

    function groupByUnit(array: LearningPart[]): LearningPart[][] {
        const groups = new Map<string, LearningPart[]>();
        array.forEach(item => {
            const key = item["moduleName"];
            if (!groups.has(key)) {
                groups.set(key, []);
            }
            groups.get(key)!.push(item);
        });
        return Array.from(groups.values());
    }

    useEffect(() => {
        const arr = [
            {moduleName: "Модуль 1: Основы", partName: "Вступление", status: true},
            {moduleName: "Модуль 1: Основы", partName: "Переменные и типы данных", status: true},
            {moduleName: "Модуль 1: Основы", partName: "Функции", status: false},
            {moduleName: "Модуль 2: Продвинутые типы", partName: "Массивы", status: false},
            {moduleName: "Модуль 2: Продвинутые типы", partName: "Объекты", status: false}
        ];
        setModules(groupByUnit(arr));
    }, []);


    return (
        <aside className="learning-sidebar">
            <div className="learning-sidebar__container">
                <div className="learning-sidebar-info">
                    <h2 className="learning-sidebar-info__title">Курс</h2>
                    <span className="learning-sidebar-info__name">{ name }</span>
                </div>
                <div className="learning-sidebar__modules">
                    {modules.map((module)=>(
                        <LearningModule parts={module}/>
                    ))}
                </div>
            </div>
        </aside>
    );
}