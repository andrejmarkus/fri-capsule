import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface QuestionState {
    selected: string[];
    isUsed: boolean;
    isCorrect: boolean;
}

export interface ThemeProgress {
    questions: { [questionName: string]: QuestionState };
    order: string[]; // Store the order of question names
}

export interface ProgressState {
    [subject: string]: {
        [theme: string]: ThemeProgress;
    };
}

const STORAGE_KEY = 'fri_capsule_test_progress_v2';

function loadProgress(): ProgressState {
    if (!browser) return {};
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    try {
        const parsed = JSON.parse(stored) as ProgressState;
        // Migration check: if the theme is an array or old structure, wrap it
        Object.keys(parsed).forEach(subject => {
            Object.keys(parsed[subject]).forEach(theme => {
                const themeData = parsed[subject][theme] as any;
                if (!themeData.questions) {
                    parsed[subject][theme] = {
                        questions: themeData,
                        order: []
                    };
                }
            });
        });
        return parsed;
    } catch (e) {
        console.error("Failed to parse progress from localStorage", e);
        return {};
    }
}

function createProgressStore() {
    const { subscribe, update } = writable<ProgressState>(browser ? loadProgress() : {});

    return {
        subscribe,
        saveQuestionState: (subject: string, theme: string, question: string, state: QuestionState) => {
            update(oldState => {
                const newState = { ...oldState };
                if (!newState[subject]) newState[subject] = {};
                
                // Deep spread to trigger reactivity
                newState[subject] = { ...newState[subject] };
                if (!newState[subject][theme]) newState[subject][theme] = { questions: {}, order: [] };
                
                newState[subject][theme] = {
                    ...newState[subject][theme],
                    questions: {
                        ...newState[subject][theme].questions,
                        [question]: state
                    }
                };
                
                if (browser) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
                }
                return newState;
            });
        },
        saveOrder: (subject: string, theme: string, order: string[]) => {
            update(oldState => {
                const newState = { ...oldState };
                if (!newState[subject]) newState[subject] = {};
                
                newState[subject] = { ...newState[subject] };
                if (!newState[subject][theme]) newState[subject][theme] = { questions: {}, order: [] };
                
                newState[subject][theme] = {
                    ...newState[subject][theme],
                    order: order
                };
                
                if (browser) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
                }
                return newState;
            });
        },
        resetSubject: (subject: string) => {
            update(state => {
                const newState = { ...state };
                delete newState[subject];
                if (browser) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
                }
                return newState;
            });
        },
        resetTheme: (subject: string, theme: string) => {
            update(state => {
                const newState = { ...state };
                if (newState[subject]) {
                    newState[subject] = { ...newState[subject] };
                    delete newState[subject][theme];
                }
                if (browser) {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
                }
                return newState;
            });
        }
    };
}

export const progressStore = createProgressStore();
