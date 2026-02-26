import type { Timestamp, FirestoreDataConverter, QueryDocumentSnapshot } from 'firebase/firestore';

/**
 * Common data interfaces
 */
export interface Answer {
    answer: string;
    isCorrect: boolean;
}

export interface Question {
    question: string;
    answers: Answer[];
    img?: string;
}

export interface Theme {
    name: string;
    questions: Question[];
}

/**
 * Models for the core entities
 */

export interface Subject {
    id: string;      // The slug (e.g., 'piks', 'atg')
    name?: string;   // Display name
    themes: Theme[];
    updatedAt?: Timestamp | Date;
}

export class Report {
    id?: string;
    name: string = "";
    email: string = "";
    message: string = "";
    type: string = "feedback";
    createdAt: Timestamp | Date = new Date();

    constructor(data: Partial<Report> = {}) {
        this.id = data.id;
        this.name = data.name || "";
        this.email = data.email || "";
        this.message = data.message || "";
        this.type = data.type || "feedback";
        this.createdAt = data.createdAt || new Date();
    }
}

/**
 * Data Converters for Firestore
 */

export const reportConverter: FirestoreDataConverter<Report> = {
    toFirestore(report: Report) {
        const { id, ...data } = report;
        return data;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot) {
        const data = snapshot.data();
        return new Report({ id: snapshot.id, ...data } as any);
    }
};

export const subjectConverter: FirestoreDataConverter<Subject> = {
    toFirestore(subject: Subject) {
        const { id, ...data } = subject;
        return data;
    },
    fromFirestore(snapshot: QueryDocumentSnapshot) {
        const data = snapshot.data();
        return {
            id: snapshot.id,
            themes: data.themes || [],
            name: data.name || snapshot.id.toUpperCase(),
            updatedAt: data.updatedAt
        } as Subject;
    }
};
