import prisma from '@/app/lib/prisma';

// POST /api/post
export  async function POST(req) {
  
  const data = await req.json();
  console.log(data);
  const result = await prisma.inventorydetail.create({
    data: data,
  });
 return Response.json(result);
}