-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'REVIEWED', 'SHORTLISTED', 'REJECTED');

-- AlterEnum
ALTER TYPE "LeadStatus" ADD VALUE 'QUALIFIED';

-- AlterTable
ALTER TABLE "ContactLead" ADD COLUMN     "industry" TEXT,
ADD COLUMN     "projectType" TEXT,
ADD COLUMN     "stage" TEXT,
ADD COLUMN     "timeline" TEXT;

-- AlterTable
ALTER TABLE "Portfolio" ADD COLUMN     "architecture" TEXT,
ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'Web',
ADD COLUMN     "isDemo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lessons" TEXT;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "capabilities" JSONB NOT NULL DEFAULT '[]';

-- CreateTable
CREATE TABLE "CareerApplication" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "roleInterest" TEXT NOT NULL,
    "resumeLink" TEXT,
    "message" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CareerApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faq" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Faq_pkey" PRIMARY KEY ("id")
);
