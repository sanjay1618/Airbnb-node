import { Request, Response, NextFunction } from "express";
import { createHotelService, getHotelByIDService, getHotelsService } from "../services/hotel.service";
import { hotelDTO } from "../dtos/hotelDTO";
import logger from "../config/logger.config";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {

    try {
         const hotelRequestBody : hotelDTO = req.body;
         const hotelObj = await createHotelService(hotelRequestBody);
         res.status(201).json(hotelObj);
         logger.info("Request received for the HotelHandler");
    }
    catch(error) {
        next(error);
    }
}

export async function getHotelByIDHandler(req: Request, res: Response, next : NextFunction) {
    try {
        const hotelId = parseInt(req.params.id, 10);
        const hotelObj = await getHotelByIDService(hotelId);
        res.status(200).json(hotelObj);
    }
    catch(error) {
        next(error);

    }
}

export async function getHotelsHandler(req: Request, res: Response, next : NextFunction) {
    try {

        const hotelsJson = await getHotelsService();
        res.status(200).json(hotelsJson);

    }
    catch (error) {
        next(error);
    }
}