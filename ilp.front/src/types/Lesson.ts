import React from "react";

export interface Lesson {
    id: string;
    icon: React.FC;
    name: string;
    description: string;
    duration: number;
}