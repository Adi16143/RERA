import { getSession } from 'next-auth/react';
import prisma from '@/app/lib/prisma';

// POST /api/post
// Required fields in body: Type of inventory
// fields in body: No of inventory
// field in body : carpet area
export default async function handle(req, res) {
  console.log('request',req)
  const { Type_of_inventory, No_of_inventory,Carpet_area } = req.body;

  const session = await getSession({ req });
  const result = await prisma.inventorydetail.create({
    data: {
      Type_of_inventory: Type_of_inventory,
      No_of_inventory: No_of_inventory,
      Carpet_area:Carpet_area,
      author: { connect: { email: session?.user?.email } },
    },
  });
 return res.json(result);
}