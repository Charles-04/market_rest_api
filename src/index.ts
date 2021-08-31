// playlist/src/index.ts

// #1
import { PrismaClient } from '@prisma/client'
import express from 'express'

// #2
const prisma = new PrismaClient()

// #3
const app = express()

// #4
app.use(express.json())

// #5
app.get('/owner', async (req, res) => {
  const owner = await prisma.owner.findMany()
  res.json({
    success: true,
    payload: owner,
    message: "Operation Successful",
  })
})

app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
  });

  //* 2. Fetches a specific song by its ID.
app.get(`/shop/:id`, async (req, res) => {
    const { id } = req.params
    const shop = await prisma.shop.findFirst({
        where: { id: Number(id) },
    })
    res.json({
        success: true,
        payload: shop,
    })
})
// #6
app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)