import express from 'express';


import { createHotelHandler, getHotelByIDHandler } from '../../controllers/hotel.controller';


const hotelRouter = express.Router();


hotelRouter.get('/:id', getHotelByIDHandler); 

hotelRouter.post('/', createHotelHandler);

export default hotelRouter;