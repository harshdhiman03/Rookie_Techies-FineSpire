import { NextResponse } from "next/server";
import fs from "fs";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const openai=new OpenAI({
    apiKey:'sk-proj-Hp4FIJitdn7pQZ41rIslT3BlbkFJ4z8XyDOZTt3dDoIFK3GX'
})

export async function POST(req) {
    const body = await req.json();

    const base64Audio = body.audio;

    // Convert the base64 audio data to a Buffer
    const audio = Buffer.from(base64Audio, "base64");

    // Define the file path for storing the temporary WAV file
    const filePath = "tmp/input.wav";

    try {
        // Write the audio data to a temporary WAV file synchronously
        fs.writeFileSync(filePath, audio);

        // Create a readable stream from the temporary WAV file
        const readStream = fs.createReadStream(filePath);

        const data = await openai.audio.transcriptions.create({
            file: readStream,
            model: "whisper-1",
        });

        // Remove the temporary file after successful processing
        fs.unlinkSync(filePath);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error processing audio:", error);
        return NextResponse.error();
    }
}