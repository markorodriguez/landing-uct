import getMastersDegrees from "@/dao/getMastersDegrees";
import { NextResponse } from "next/server";

export async function GET() {
    const masters = await getMastersDegrees();
    return NextResponse.json({
        data: masters
    })  
}