import {
    sBOOKING,
    bookingResponse
} from '@lib/SFConstants';


const createSelectorForBooking = data => state => state[sBOOKING][data];

export const bookingSelector = createSelectorForBooking(bookingResponse);
