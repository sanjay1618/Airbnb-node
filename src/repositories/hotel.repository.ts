import { hotelDTO } from "../dtos/hotelDTO";
import Hotel from "../db/models/Hotel";
import logger from "../config/logger.config";


export async function createHotel(hotel: hotelDTO) {
    try {
        const hotelObj = await Hotel.create({
            name : hotel.name,
            address : hotel.address,
            location : hotel.location,
            rating: hotel.rating,
            ratingsCount : hotel.ratingsCount
        });

        logger.info(`New Hotel created successfully ${hotelObj?.id}`);

        return hotelObj;
    }
    catch {
        logger.error("Something wrong with the request");
    }
}

export async function getHotelByID(id : number) {
    try {
        const hotelObj = await Hotel.findByPk(id);
        if(hotelObj !== null) {
             logger.info(`New Hotel data retrieved for the ID ${hotelObj.id}`)
        }
        else {
            logger.error(`Hotel with the ${id} cannot be retrieve`);
        }

        return hotelObj;
    }
    catch {

    }
   
}

export async function getAllHotels() {

        const hotelsObj = await Hotel.findAll();
        logger.info(`Returned all the hotels in the form of an array and will be convered to JSON in service layer`);
        return hotelsObj;

}

