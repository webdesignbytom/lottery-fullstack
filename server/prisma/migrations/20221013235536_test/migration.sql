/*
  Warnings:

  - Added the required column `ticketsSold` to the `Draw` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usersTotal` to the `Draw` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Draw" ADD COLUMN     "ticketsSold" INTEGER NOT NULL,
ADD COLUMN     "usersTotal" INTEGER NOT NULL;
