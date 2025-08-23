import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient

export const getAllSiswa = async (req,res) => {
    try {
        const response = await prisma.dataSiswa.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getSiswaById = async (req,res) => {
    try {
        const response = await prisma.dataSiswa.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const createSiswa = async (req,res) => {
    const {nama, umur} = req.body
    try {
        const response = await prisma.dataSiswa.create({
            data: {
                nama:nama,
                umur:umur
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

export const updateSiswa = async (req,res) => {
    const {nama, umur} = req.body
    try {
        const response = await prisma.dataSiswa.update({
            data: {
                nama:nama,
                umur:umur
            },
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

export const deleteSiswa = async (req,res) => {
    try {
        const response = await prisma.dataSiswa.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}