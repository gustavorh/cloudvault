import { NextResponse } from "next/server";
import { db } from "@/db/config";
import { contactMessages } from "@/db/schema";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Insert the message into the database
    try {
      await db.insert(contactMessages).values({
        id: uuidv4(),
        name,
        email,
        message,
      });

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
