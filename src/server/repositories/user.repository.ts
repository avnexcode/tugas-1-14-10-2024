import type { Filters, User } from "@/types";

const data: User[] = [
    {
        id: 1,
        name: 'John Doe',
        hobbies: [
            {
                id: 1,
                name: 'playing games',
            },
        ],
        age: 30,
        address: '123 Main St',
        city: 'New York',
        phone: '555-1234',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        address: '456 Oak Ave',
        city: 'Los Angeles',
        phone: '555-5678',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 40,
        address: '789 Pine Rd',
        city: 'Chicago',
        phone: '555-8765',
    },
    {
        id: 4,
        name: 'Emily Davis',
        age: 35,
        address: '321 Cedar St',
        city: 'New York',
        phone: '555-4321',
    },
];

export const findMany = async (filters: Filters): Promise<User[]> => {
    return data.filter(user =>
        (!filters.name || user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.city || user.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (!filters.age || user.age >= filters.age)
    );
};