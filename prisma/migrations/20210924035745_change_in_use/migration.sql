/*
  Warnings:

  - A unique constraint covering the columns `[loginId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Login" DROP CONSTRAINT "Login_userId_fkey";

-- DropIndex
DROP INDEX "Login_userId_unique";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "loginId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_unique" ON "User"("loginId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_loginId_fkey" FOREIGN KEY ("loginId") REFERENCES "Login"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
