
// playlist/src/main.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newOwner = await prisma.owner.create({
    data: {
      name: 'Osinachi Kalu',
      email: 'sinach@sinachmusic.com',
      stall: {
        create: {
        lane  : 'Abuja lane',
        },
      },
    },
  })
  console.log('Created new owner: ', newOwner)

  const allArtists = await prisma.owner.findMany({
    include: { stall: true },
  })
  console.log('All artists: ')
  console.dir(allArtists, { depth: null })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

//!  put a dollar-sign between "." and "disconnect"
