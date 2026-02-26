import { 
    collection, 
    doc, 
    getDoc, 
    getDocs, 
    addDoc, 
    setDoc,
    updateDoc, 
    deleteDoc, 
    query, 
    type QueryConstraint, 
    type FirestoreDataConverter
} from 'firebase/firestore';
import { db } from '../../firebase';
import { Report, reportConverter, subjectConverter } from './models';
import type { Subject } from './models';

/**
 * A generic and type-safe repository for Firestore that provides an ORM-like API.
 */
export abstract class BaseRepository<T extends { id?: string }> {
    constructor(
        protected collectionName: string, 
        protected converter: FirestoreDataConverter<T>
    ) {}

    /**
     * Get the Firestore collection reference with the model converter applied.
     */
    protected getCol() {
        return collection(db, this.collectionName).withConverter(this.converter);
    }

    /**
     * Retrieve a document by its ID.
     */
    async getById(id: string): Promise<T | null> {
        const docRef = doc(db, this.collectionName, id).withConverter(this.converter);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? (docSnap.data() as T) : null;
    }

    /**
     * Retrieve all documents from the collection matching optional query constraints.
     */
    async getAll(constraints: QueryConstraint[] = []): Promise<T[]> {
        const q = query(this.getCol(), ...constraints);
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    }

    /**
     * Create a new document. If data has an 'id', it will be used as the document ID.
     */
    async create(data: Partial<T>): Promise<string> {
        if (data.id) {
            const docRef = doc(db, this.collectionName, data.id).withConverter(this.converter);
            const { id, ...rest } = data as any;
            await setDoc(docRef, rest);
            return id;
        }
        const docRef = await addDoc(collection(db, this.collectionName), data);
        return docRef.id;
    }

    /**
     * Update an existing document by ID.
     */
    async update(id: string, data: Partial<T>): Promise<void> {
        const docRef = doc(db, this.collectionName, id);
        // Avoid overwriting the ID in the document body
        const { id: _, ...rest } = data as any;
        await updateDoc(docRef, rest);
    }

    /**
     * Remove a document by ID.
     */
    async delete(id: string): Promise<void> {
        const docRef = doc(db, this.collectionName, id);
        await deleteDoc(docRef);
    }
}

/**
 * Specialized Repository for Reports
 * Provides simple CRUD for feedback and error reports.
 */
export class ReportRepository extends BaseRepository<Report> {
    constructor() {
        super('reports', reportConverter);
    }
    
    /**
     * Examples of a specialized CRUD methods
     */
    async getByType(type: string): Promise<Report[]> {
        const { where } = await import('firebase/firestore');
        return this.getAll([where('type', '==', type)]);
    }
}

/**
 * Specialized Repository for Subjects
 * Handles fetching subject data (piks, zet, eapap, atg).
 */
export class SubjectRepository extends BaseRepository<Subject> {
    constructor() {
        super('subjects', subjectConverter);
    }

    /**
     * Get a subject by its slug.
     * With the new structure, each subject is its own document with ID = slug.
     */
    async getBySlug(slug: string): Promise<Subject | null> {
        return this.getById(slug);
    }
}

// Instances for easy importing throughout the app
export const dbReports = new ReportRepository();
export const dbSubjects = new SubjectRepository();
