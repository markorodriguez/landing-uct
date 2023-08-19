import registerNewPostulant from "@/dao/registerNewPostulant";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    const {dni, email, lastname, masterDegree, name, phone, surname} = await req.json()
    console.log(dni, email, lastname, masterDegree, name, phone, surname)
    const insertResponse = await registerNewPostulant(dni, email, lastname, masterDegree, name, phone, surname)
    let message = "Error"

    try {
        message = insertResponse[0].id > 0 ? "Registro satisfactorio" : null
    } catch (error) {
        throw new Error("Error")
    }

    return NextResponse.json({message})
}