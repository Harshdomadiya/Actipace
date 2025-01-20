/*
  Warnings:

  - You are about to drop the `Purchased_Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Purchases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchased_Product" DROP CONSTRAINT "Purchased_Product_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "Purchased_Product" DROP CONSTRAINT "Purchased_Product_purchase_id_fkey";

-- DropForeignKey
ALTER TABLE "Purchased_Product" DROP CONSTRAINT "Purchased_Product_software_id_fkey";

-- DropTable
DROP TABLE "Purchased_Product";

-- DropTable
DROP TABLE "Purchases";

-- CreateTable
CREATE TABLE "Purchase" (
    "purchase_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "software_id" INTEGER NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "paymentId" TEXT,
    "orderId" TEXT,
    "purchase_date" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "city" TEXT,
    "company" TEXT,
    "country" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "gstin" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "policyAccepted" BOOLEAN NOT NULL,
    "state" TEXT,
    "termsAccepted" BOOLEAN NOT NULL,
    "zipCode" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_email_key" ON "Purchase"("email");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "SoftwarePlan"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "Software"("software_id") ON DELETE RESTRICT ON UPDATE CASCADE;
