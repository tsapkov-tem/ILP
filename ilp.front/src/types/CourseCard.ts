import React from "react";

export interface CourseCard {
    icon: React.FC;
    title: string;
    description: string;
    difficulty: string;
    score: number;
    usersCount: number;
    duration: number;
}