import { NextRequest, NextResponse } from "next/server"
import * as Service from '../services/user.service'
export const GET = async (req: NextRequest) => {
    console.log(req)
    try {
        const data = await Service.getAll()
        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all data',
            data
        })
    } catch (error) {
        const statusCode = error instanceof Error && error.message === 'Invalid page or limit parameter' ? 400 : 500;

        return NextResponse.json({
            status: false,
            statusCode,
            message: error instanceof Error ? error.message : 'Unknown error occurred',
            stack: process.env.NEXT_PUBLIC_ENV === 'production' ? '🥞' : error instanceof Error ? error.stack : 'No stack trace available',
        }, { status: statusCode });
    }

}