import "../../firebase"; // Ensure FireORM is initialized and reflect-metadata is loaded
import { getRepository } from 'fireorm';
import { Subject } from './models';

// Simply export the FireORM repositories
export const dbSubjects = getRepository(Subject);

/**
 * Specialized methods can still be added using a class that wraps the repo or just helpers.
 * But FireORM provides findById, create, update, delete out of the box.
 */
export const getSubjectBySlug = async (slug: string) => {
    return dbSubjects.findById(slug);
};

