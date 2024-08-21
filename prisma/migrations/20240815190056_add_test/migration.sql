-- CreateTable
CREATE TABLE "Boll" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "model" TEXT NOT NULL,

    CONSTRAINT "Boll_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Boll_model_key" ON "Boll"("model");
