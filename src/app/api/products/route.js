import clientPromise from "@/app/services/server/mongo";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
      console.log("Connected to MongoDB!");
    const products = await db.collection("products").find({}).toArray();
    console.log("Products fetched:", products);

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}