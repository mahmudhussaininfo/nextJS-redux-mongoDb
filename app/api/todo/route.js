import mongoDbConnect from "@/config/db";
import Todo from "@/models/Todo";
import { NextResponse } from "next/server";

//Get users
export const GET = async () => {
  try {
    await mongoDbConnect();
    const todos = await Todo.find();
    return NextResponse.json({ todos });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};

//Post users
export const POST = async (req) => {
  try {
    await mongoDbConnect();
    const data = await req.json();
    const todo = await Todo.create({
      ...data,
    });
    return NextResponse.json({ todo });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
