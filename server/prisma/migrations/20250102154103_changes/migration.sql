-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('SUCCESS', 'FAILED', 'PENDING');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "resetPasswordExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT,
    "otpExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Software" (
    "software_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Software_pkey" PRIMARY KEY ("software_id")
);

-- CreateTable
CREATE TABLE "SoftwarePlan" (
    "plan_id" SERIAL NOT NULL,
    "software_id" INTEGER NOT NULL,
    "devices" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SoftwarePlan_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "Purchases" (
    "purchase_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone_no" TEXT NOT NULL,
    "country" TEXT,
    "compnay" TEXT,
    "city" TEXT,
    "state" TEXT,
    "ZipCode" TEXT,

    CONSTRAINT "Purchases_pkey" PRIMARY KEY ("purchase_id")
);

-- CreateTable
CREATE TABLE "Purchased_Product" (
    "id" SERIAL NOT NULL,
    "purchase_id" INTEGER NOT NULL,
    "software_id" INTEGER NOT NULL,
    "plan_id" INTEGER NOT NULL,
    "paymentId" TEXT,
    "orderId" TEXT,
    "purchase_date" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Purchased_Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobileNo_key" ON "User"("mobileNo");

-- CreateIndex
CREATE UNIQUE INDEX "User_token_key" ON "User"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Otp_email_key" ON "Otp"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Purchases_email_key" ON "Purchases"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Purchases_phone_no_key" ON "Purchases"("phone_no");

-- AddForeignKey
ALTER TABLE "SoftwarePlan" ADD CONSTRAINT "SoftwarePlan_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "Software"("software_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchased_Product" ADD CONSTRAINT "Purchased_Product_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "SoftwarePlan"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchased_Product" ADD CONSTRAINT "Purchased_Product_software_id_fkey" FOREIGN KEY ("software_id") REFERENCES "Software"("software_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchased_Product" ADD CONSTRAINT "Purchased_Product_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "Purchases"("purchase_id") ON DELETE RESTRICT ON UPDATE CASCADE;
