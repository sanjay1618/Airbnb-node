import express from 'express';


import { createHotelHandler, getHotelByIDHandler, getHotelsHandler } from '../../controllers/hotel.controller';


const hotelRouter = express.Router();


hotelRouter.get('/:id', getHotelByIDHandler); 

hotelRouter.post('/', createHotelHandler);

hotelRouter.get('/', getHotelsHandler);

export default hotelRouter;