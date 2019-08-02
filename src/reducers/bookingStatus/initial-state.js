import { bookingResponse} from  '@lib/SFConstants';

const initialState = {
[bookingResponse]: {
     isFetching: false, 
     isNoInternet:false,
 }

};

export default initialState;