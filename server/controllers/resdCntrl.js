// controllers/resdCntrl.js
import asyncHandler from 'express-async-handler';
import prisma from "../config/prisma/prismaConfig.js";

// Função para criar um novo imóvel
export const createResidency = asyncHandler(async (req, res) => {
  console.log(req.body);

  try {
    const data = req.body;

        //  Função para converter campo para Int, mesmo se vier como string ou objeto
     const convertToInt = (field) => {
      if (typeof data[field] === "string" && data[field].trim() !== "") {
        data[field] = parseInt(data[field], 10);
      }
      if (typeof data[field] === "object" && data[field]?.$numberLong) {
        data[field] = parseInt(data[field].$numberLong, 10);
      }
      if (!data[field] || isNaN(data[field])) {
        delete data[field]; // remove campo inválido
      }
    };

    // Converte todos os campos numéricos que o Prisma espera como Int
    ["price", "downPayment", "iptu", "bedrooms", "bathrooms", "garage", "area"].forEach(convertToInt);


    // Remove campos undefined
    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) {
        delete data[key];
      }
    });

    const residency = await prisma.residency.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        address: data.address,
        country: data.country,
        city: data.city,
        facilities: data.facilities,  // já como objeto JSON, não string
        image: data.image,
        images: data.images,
        code: data.code,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        garage: data.garage,
        area: data.area,
        financing: data.financing,
        iptu: data.iptu,
        carrossel: data.carrossel,
        owner: {
          connect: {
            email: data.userEmail,
          },
        },
      },
    });

    res.send({
      message: "Residency created successfully",
      residency,
    });

  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency with this address already exists");
    }
    throw new Error(err.message);
  }
});

// Função de exportar todos os imóveis para o site
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  console.log(residencies);
  res.send(residencies);
});

// Função para obter um imóvel específico
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id }
    });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});
