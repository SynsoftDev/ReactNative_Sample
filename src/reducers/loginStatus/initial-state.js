import { loginResponse} from  '@lib/SFConstants';

const initialState = {
[loginResponse]: {
     isFetching: false, 
     isNoInternet:false,
 }

};

export default initialState;