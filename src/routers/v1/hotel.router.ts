import express from 'express';


import { createHotelHandler, getHotelByIDHandler, getHotelsHandler, softDeleteHotelByIDHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';


const hotelRouter = express.Router();


hotelRouter.get('/:id', getHotelByIDHandler); 

hotelRouter.post('/', validateRequestBody(hotelSchema),createHotelHandler);

hotelRouter.get('/', getHotelsHandler);

hotelRouter.delete('/:id', softDeleteHotelByIDHandler);

export default hotelRouter;