import { NextRequest, NextResponse } from "next/server";
import * as Service from '../services/user.service';

export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url);
        const name = url.searchParams.get('name') || '';
        const city = url.searchParams.get('city') || '';
        const ageParam = url.searchParams.get('age');

        let age: number | undefined;
        if (ageParam !== null) {
            age = parseInt(ageParam, 10);
            if (isNaN(age) || age < 1) {
                return NextResponse.json({
                    status: false,
                    statusCode: 400,
                    message: 'Invalid age parameter. Age must be a positive integer.',
                }, { status: 400 });
            }
        }

        const filters = { name, city, age };
        const data = await Service.getAll(filters);

        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'Successfully retrieved all data',
            data
        });
    } catch (error) {
        console.error('Error in GET request:', error);
        
        const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';
        
        return NextResponse.json({
            status: false,
            statusCode: 500,
            message: 'An unexpected error occurred',
            ...(isProduction ? {} : { detail: error instanceof Error ? error.message : 'Unknown error' }),
        }, { status: 500 });
    }
};