import {
    sBOOKINGSTATUS,
    bookingResponse
} from '@lib/SFConstants';
   
 const selectorForStatus = data => state => state[sBOOKINGSTATUS][data];
    
 export const bookingStatusSelector = selectorForStatus(bookingResponse);
