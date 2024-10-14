import { NextRequest } from "next/server";
import * as Controller from '@/server/controllers/user.controller'

export const GET = async (req: NextRequest) => Controller.GET(req)