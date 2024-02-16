/*
  Warnings:

  - Added the required column `password` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL,
ALTER COLUMN "postalCode" DROP NOT NULL;
