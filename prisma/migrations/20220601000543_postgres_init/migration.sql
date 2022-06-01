/*
  Warnings:

  - The primary key for the `Profile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_pkey",
DROP COLUMN "id";

-- CreateTable
CREATE TABLE "Status" (
    "id" TEXT NOT NULL,
    "firstAttempt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastAttempt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attempts" (
    "id" TEXT NOT NULL,
    "firstAttempt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastAttempt" TIMESTAMP(3) NOT NULL,
    "total" INTEGER NOT NULL DEFAULT 0,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "blockedAt" TIMESTAMP(3) NOT NULL,
    "statusId" TEXT NOT NULL,

    CONSTRAINT "Attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" SERIAL NOT NULL,
    "pass" BOOLEAN NOT NULL,
    "attemptAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attemptsId" TEXT NOT NULL,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Status_userId_key" ON "Status"("userId");

-- AddForeignKey
ALTER TABLE "Status" ADD CONSTRAINT "Status_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempts" ADD CONSTRAINT "Attempts_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_attemptsId_fkey" FOREIGN KEY ("attemptsId") REFERENCES "Attempts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
