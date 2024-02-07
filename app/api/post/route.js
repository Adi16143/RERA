import prisma from '@/app/lib/prisma';

// POST /api/post
// Required fields in body: Type of inventory
// fields in body: No of inventory
// field in body : carpet area
export  async function POST(req) {
  
  const data = await req.json();
  console.log(data);
  const result = await prisma.inventorydetail.create({
    data: data,
  });
 return Response.json(result);
}