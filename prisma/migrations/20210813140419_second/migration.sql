-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "tax" BOOLEAN NOT NULL DEFAULT true,
    "rent" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "lane" TEXT NOT NULL,
    "content" TEXT,
    "owned" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner.email_unique" ON "Owner"("email");

-- AddForeignKey
ALTER TABLE "Shop" ADD FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
