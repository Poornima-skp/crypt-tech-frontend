import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../utilities/cryptoApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },

});