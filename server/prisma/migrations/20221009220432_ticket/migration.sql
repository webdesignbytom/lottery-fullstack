-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "balls" INTEGER[],
    "bonusBalls" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
