import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../utilities/cryptoApi';
import { cryptoNewsApi } from '../utilities/cryptoNewsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware)

});

