/*
  Warnings:

  - You are about to drop the `Attempt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Attempts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Attempt" DROP CONSTRAINT "Attempt_attemptsId_fkey";

-- DropForeignKey
ALTER TABLE "Attempts" DROP CONSTRAINT "Attempts_statusId_fkey";

-- DropForeignKey
ALTER TABLE "Status" DROP CONSTRAINT "Status_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Profile_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Attempt";

-- DropTable
DROP TABLE "Attempts";

-- DropTable
DROP TABLE "Status";

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
