import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient


export const getAllBarang = async(req,res) => {
    try {
        const response = await prisma.dataBarang.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const getBarangById = async(req,res) => {
    try {
        const response = await prisma.dataBarang.findUnique({
            where: {
                id : Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json({message:error.message})
    }
}

export const createBarang = async(req,res) => {
    const {nama_barang,harga,stok}=req.body
    try {
        const response = await prisma.dataBarang.create({
            data: {
                nama_barang:nama_barang,
                harga:harga,
                stok:stok
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(402).json({message:error.message})
    }
}

export const updateBarang = async(req,res) => {
    const {nama_barang,harga,stok}=req.body
    try {
        const response = await prisma.dataBarang.update({
            where: {
                id : Number(req.params.id)
            },
            data: {
                nama_barang:nama_barang,
                harga:harga,
                stok:stok
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

export const handleDelete = async(req,res) => {
    try {
        await prisma.dataBarang.delete({
            where: {
                id : Number(req.params.id)
            }
        })
        res.status(200).json("Barang berhasil dihapus")
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}