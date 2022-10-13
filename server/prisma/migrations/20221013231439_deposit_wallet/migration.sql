/*
  Warnings:

  - A unique constraint covering the columns `[walletId]` on the table `Deposit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `walletId` to the `Deposit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deposit" ADD COLUMN     "walletId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Deposit_walletId_key" ON "Deposit"("walletId");

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
