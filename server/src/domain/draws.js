const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");

const findAllDraws = () => prisma.draw.findMany({
})


module.exports = {
    findAllDraws
}