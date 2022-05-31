/*
  Warnings:

  - You are about to drop the column `item` on the `Todo` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(155)` to `VarChar(55)`.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(35)`.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(55)`.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "item",
ALTER COLUMN "title" SET DATA TYPE VARCHAR(55),
ALTER COLUMN "completed" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "emailConfirm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" VARCHAR(55) NOT NULL,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(35),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(55);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "image" TEXT,
    "bio" VARCHAR(555) NOT NULL,
    "handles" VARCHAR(555)[],
    "userId" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT E'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "action" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "todoId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
