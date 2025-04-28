import { configureStore } from '@reduxjs/toolkit';
import userReducer from '/src/components/Store/Redux/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;