import * as Repository from '../repositories/user.repository'
export const getAll = async (filters: { name: string, city: string, minAge: number }) => {
    let data = await Repository.findMany()

    if (filters.name) data = await Repository.findByName(filters.name)

    if (filters.city) data = await Repository.findByName(filters.city)

    if (filters.minAge !== undefined) data = await Repository.findByAge(filters.minAge)

    return data

}