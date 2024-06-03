//6-6- Creating a Prisma Client

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()


if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma


//Now, in Next.js, because we have "fast refresh", anytime we change our 
//"source code", Next.js refreshes some of our modules.In that case we'll
//end up in a situation where we have "too many Prisma Clients".So you 
//will see an error in terminal saying too many Prisma Clients.This only 
//happens in "development" because "fast refresh" only happens in 
//"development".

//To solve that, we go to :
//https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
//and copy that "db.ts" code here.