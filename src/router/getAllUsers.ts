import {PrismaClient} from '@prisma/client';
import type {Context} from 'koa';
const prisma = new PrismaClient();

async function getAllUsers(ctx: Context): Promise<boolean> {
  console.time();
  const users = await prisma.user.findMany();

  ctx.body = {users};
  console.timeEnd();
  return true;
}

export default getAllUsers;
