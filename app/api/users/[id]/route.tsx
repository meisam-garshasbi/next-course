//11-2-Preparing for Production

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

import { prisma } from "@/prisma/client";



interface GetPropsType {
  params: { id: string };
}

export async function GET(
  request: NextRequest,
  { params: { id } }: GetPropsType
) {
  const user = await prisma.user.findUnique({
    where: {
      //1-So if you recall earlier and we had a user model and the type of
      //the ID field was an integer But later we replace that user model 
      //with the user model defined in next-auth.In the user model that 
      //comes with next-auth The ID field is a string so we don't want 
      //to parse params that ID as an integer.So let's remove parseInt() 
      //method.
      // id: parseInt(id),
      id:id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params: { id } }: GetPropsType
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });


  const existedUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!existedUser)
    return NextResponse.json(
      { error: "The user doesn't exist" },
      { status: 404 }
    );
  const updatedUser = await prisma.user.update({
    where: {
      id: existedUser.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}


export async function DELETE(request: NextRequest, { params: { id } }: GetPropsType) {
  
  const existedUser = await prisma.user.findUnique({
    where:{
      id:id
    }
  })

  if (!existedUser)
    return NextResponse.json(
      { error: "The user doesn't exist" },
      { status: 404 }
    );
     await prisma.user.delete({
      where:{
        id:existedUser.id
      }
    })
  return NextResponse.json({});
}
