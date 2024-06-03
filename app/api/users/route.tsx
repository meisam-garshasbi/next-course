//6-8-Creating data in database

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const user = await prisma.user.findMany();

  return NextResponse.json(user);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //----------------------------
  //Because we defined in User model that email must be unique,
  //Before we create a new user first, we should check if there is
  //a user by this email.
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user) {
    return NextResponse.json(
      { error: "The user already exsits." },
      { status: 400 }
    );
  }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
//----------------------------
