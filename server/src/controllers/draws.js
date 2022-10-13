const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashRate = 8

const { findAllDraws } = require('../domain/draws')

const getAllDraws = async (req, res) => {
    console.log('gettin all draws')
    
    try {

        const foundDraws = await findAllDraws()

        if (!foundDraws) {
            return res.status(409).json({ error: { msg: 'Draws not found'}})
        }

        return res.status(200).json({ data: foundDraws })

    } catch (error) {
       return res.status(500).json({ error: { msg: "500 Fail" } });

    }
}

const createNewDraw = async (req, res) => {
    console.log('create new draw');
}


module.exports = {
    getAllDraws,
    createNewDraw
}