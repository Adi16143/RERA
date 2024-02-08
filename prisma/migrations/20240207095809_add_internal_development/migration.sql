/*
  Warnings:

  - Added the required column `Drainage_system` to the `Inventorydetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Electricity_supply` to the `Inventorydetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Road_system` to the `Inventorydetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Waste_management` to the `Inventorydetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Water_supply` to the `Inventorydetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventorydetail" ADD COLUMN     "Drainage_system" TEXT NOT NULL,
ADD COLUMN     "Electricity_supply" TEXT NOT NULL,
ADD COLUMN     "Road_system" TEXT NOT NULL,
ADD COLUMN     "Waste_management" TEXT NOT NULL,
ADD COLUMN     "Water_supply" TEXT NOT NULL;
