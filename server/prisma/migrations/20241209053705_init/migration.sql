/*
  Warnings:

  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expiresAt` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_purchase_id_fkey`;

-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `expiresAt` DATETIME(3) NOT NULL,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `transaction`;
