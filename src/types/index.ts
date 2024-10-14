import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  age: z.number(),
  address: z.string(),
  city: z.string(),
  phone: z.string(),
  hobbies: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ).optional(),
});

export const filtersSchema = z.object({
  name: z.string().optional(),
  city: z.string().optional(),
  age: z.number().optional(),
});

export type User = z.infer<typeof userSchema>;
export type Filters = z.infer<typeof filtersSchema>;
