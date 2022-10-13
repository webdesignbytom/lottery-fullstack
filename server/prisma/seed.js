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

  console.log('createdUser', createdUser, createdAdmin, createdDev);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
