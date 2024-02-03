import {configureStore} from '@reduxjs/toolkit';
import { bookBuddyApi } from './API';

export const store = configureStore({
    reducer:{
        [bookBuddyApi.reducerPath]: bookBuddyApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookBuddyApi.middleware),
});