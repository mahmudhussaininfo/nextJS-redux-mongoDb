import mongoDbConnect from "@/config/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

//Get users
export const GET = async () => {
  try {
    await mongoDbConnect();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};

//Post users
export const POST = async (request) => {
  try {
    await mongoDbConnect();
    const data = await request.json();
    const user = await User.create({
      ...data,
    });
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
};
