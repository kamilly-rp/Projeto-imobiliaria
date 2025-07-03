import asyncHandler from 'express-async-handler';

import prisma from "../config/prisma/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user");

    let { email } = req.body;
      const userExists = await prisma.user.findUnique({ where: { email:email } }) ; //verificação para ver se usuario já tem um email cadastrado    
      if(!userExists) {
        const user = await prisma.user.create({ data: req.body }); // se o usuario não tem uma conta, criar nova conta para usuario
        res.send({
            message:"Usuário registrado com sucesso!",
            user: user, 
        });
      }
      else res.status(201).send({message: 'Usuário já cadatrado'});
});

// função para marcar uma visita a residencia
export const bookVisit = asyncHandler(async(req,res)=>{
  const {email, date} = req.body
  const {id} = req.params

  try{

    const alreadyBooked = await prisma.user.findUnique({
      where: {email:email},
      select: {bookedVisits: true}
    })

    if(alreadyBooked.bookedVisits.some((visit)=>visit.id == id)) {
      res.status(400).json({message: "this residency is already booked by you"})
    }

    else {
      await prisma.user.update({
        where: {email: email},
        data: {
          bookedVisits: {push: {id,date}},
        },
      });
      res.send("your visit is booked successfully");
    }
  }catch(err){
    throw new Error(err.message)
  }

})

//função que pega todas as revervas do usuario
export const getAllBookings = asyncHandler(async(req,res) => {
  const {email} = req.body
  try{
    const bookings = await prisma.user.findUnique({
      where: {email},
      select: {bookedVisits: true}
    })
    res.status(200).send(bookings)
  }catch (err){
    throw new Error(err.message);
  }
})

//função para cancelar a reserva feita pelo usuario

export const cancelBooking = asyncHandler(async(req,res) => {
  const {email}= req.body
  const {id}= req.params
  try{

    const user = await prisma.user.findUnique ({
      where: {email: email},
      select: {bookedVisits:true}
    })

    const index = user.bookedVisits.findIndex((visit) => visit.id == id)

    if(index === -1){
      res.status(404).json({message: "booking not found"})
    } else {
      user.bookedVisits.splice(index, 1)
      await prisma.user.update ({
        where: {email}, 
        data: {
          bookedVisits: user.bookedVisits
        }
      })

      res.send("Booking cancelled successfully")

    }

  }catch(err){
  throw new Error(err.message);
  }
})


// função para adicionar novas residencias na lista de favoritos do usuario
export const toFav = asyncHandler( async( req, res)=> {
  const {email} = req.body;
  const {rid} = req.params

  try{

    const user = await prisma.user.findUnique({
      where: {email}
    })
    if (user.favResidenciesId.includes(rid)){
      const updateUser = await prisma.user.update({
        where: {email},
        data: {
          favResidenciesId :{
            set: user.favResidenciesId.filter((id)=> id !== rid)
          }
        }
      });

      res.send({message: "Removed from favorites", user: updateUser})
    } else{
      const updateUser = await prisma.user.update({

        where: {email},
        data: {
          favResidenciesId: {
            push: rid
          }
        }
      })

      res.send({message: "Updated favorites", user: updateUser})
    }
  }catch(err)
  {
    throw new Error(err.message);
  }
})


//função para pegar todos os favoritos
export const getAllFavorites = asyncHandler(async (req,res)=>{
  const {email} = req.body;
  try{
    const favResd = await prisma.user.findUnique({
      where: {email},
      select: {favResidenciesId: true}
    })
    res.status(200).send(favResd)

  }catch(err){
    throw new Error(err.message);
  }
})