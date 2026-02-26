import "reflect-metadata";
import { Collection, Type } from 'fireorm';
import type { Timestamp } from 'firebase/firestore';

/**
 * Common data interfaces
 */
export class Answer {
    answer: string = "";
    isCorrect: boolean = false;
}

export class Question {
    question: string = "";
    @Type(() => Answer)
    answers: Answer[] = [];
    img?: string;
}

export class Theme {
    name: string = "";
    @Type(() => Question)
    questions: Question[] = [];
}

/**
 * Models for the core entities
 */

@Collection('subjects')
export class Subject {
    id: string = "";      // The slug (e.g., 'piks', 'atg')
    name?: string;   // Display name
    @Type(() => Theme)
    themes: Theme[] = [];
    updatedAt?: Timestamp | Date;
}

@Collection('reports')
export class Report {
    id: string = "";
    name: string = "";
    email: string = "";
    message: string = "";
    type: string = "feedback";
    createdAt: Timestamp | Date = new Date();
}
