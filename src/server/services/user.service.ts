import { Filters } from '@/types';
import * as Repository from '../repositories/user.repository';

export const getAll = async (filters: Filters) => {
    return await Repository.findMany(filters);
};