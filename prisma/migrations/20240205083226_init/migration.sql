-- CreateTable
CREATE TABLE "Inventorydetail" (
    "pid" SERIAL NOT NULL,
    "Type_of_inventory" TEXT NOT NULL,
    "No_of_inventory" INTEGER NOT NULL,
    "Carpet_area" INTEGER NOT NULL,

    CONSTRAINT "Inventorydetail_pkey" PRIMARY KEY ("pid")
);
