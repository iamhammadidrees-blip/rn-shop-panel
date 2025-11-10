import {z} from 'zod';

export const createCategorySchema = z.object({
    image: z.any().refine(file => file.length === 1, 'Image is required'),
    name: z.string().min(2, { message: 'Name must be at least 2 characters' })
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;

export const createCategorySchemaServer = z.object({
    imageUrl: z.string().min(1, { message: 'Image is required' }),
    name: z.string().min(2, { message: 'Name must be at least 2 characters' })
});

export type CreateCategorySchemaServer = z.infer<typeof createCategorySchemaServer>;

export const updateCategorySchema = z.object({
    imageUrl: z.string().min(1, { message: 'Image is required' }),
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    slug: z.string().min(1, { message: 'Slug is required' }),
    intent: z.enum(['update']).optional()
});

export type UpdateCategorySchema = z.infer<typeof updateCategorySchema>;