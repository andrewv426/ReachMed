/*
  Warnings:

  - You are about to drop the column `email` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `IntakeForm` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `IntakeForm` table. All the data in the column will be lost.
  - Added the required column `duration` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainSymptom` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicalHistory` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medications` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherSymptoms` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `painLevel` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visualIndicators` to the `IntakeForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntakeForm" DROP COLUMN "email",
DROP COLUMN "message",
DROP COLUMN "name",
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "mainSymptom" TEXT NOT NULL,
ADD COLUMN     "medicalHistory" TEXT NOT NULL,
ADD COLUMN     "medications" TEXT NOT NULL,
ADD COLUMN     "otherSymptoms" TEXT NOT NULL,
ADD COLUMN     "painLevel" TEXT NOT NULL,
ADD COLUMN     "visualIndicators" TEXT NOT NULL;
