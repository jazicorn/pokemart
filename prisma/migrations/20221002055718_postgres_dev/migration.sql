/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_userName_key" ON "Profile"("userName");
