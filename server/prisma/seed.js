const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash('123', 8);
  
  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
    },
  });

  const createdAdmin = await prisma.user.create({
    data: {
      email: 'admin@email.com',
      password,
      role: 'ADMIN'
    },
  });

  const createdDev = await prisma.user.create({
    data: {
      email: 'dev@email.com',
      password,
      role: 'DEVELOPER'
    },
  });

  let date = new Date(Date.now() + 6.048e+8)

  const createdFirstDraw = await prisma.draw.create({
    data: {
      drawDate: date,
      prize: 100000
    },
  })

  date = new Date(Date.now() + 6.048e+8 * 2)

  const createdSecondDraw = await prisma.draw.create({
    data: {
      drawDate: date,
      prize: 100000
    },
  })

  console.log('createdUser', createdUser, createdAdmin, createdDev, createdFirstDraw, createdSecondDraw);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
