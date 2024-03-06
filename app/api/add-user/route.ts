import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  try {
    if (!firstName || !lastName)
      throw new Error("Pet and owner names required");
    await sql`INSERT INTO Users (first, last) VALUES (${firstName}, ${lastName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
