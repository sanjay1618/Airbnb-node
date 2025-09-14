import { hotelDTO } from "../dtos/hotelDTO";
import { createHotel, getAllHotels, getHotelByID} from "../repositories/hotel.repository";

export async function createHotelService(hotel : hotelDTO) {
    const hotelObj = await createHotel(hotel);
    return hotelObj;
}

export async function getHotelByIDService(id : number) {
    const hotelObj = await getHotelByID(id);
    return hotelObj;
}

export async function getHotelsService() {
    const hotelsObj = await getAllHotels();
    return hotelsObj.map(h => h.toJSON());
}

