import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SLICE_NAME } from 'components/store/clothes/constants';
import { Clothes } from 'components/store/clothes/types';

export const getClothes = createAsyncThunk<Clothes[], void>(`${SLICE_NAME}/fetchClothing`, async () => {
  try {
    const response = await axios.get('https://62b0b45e196a9e9870296581.mockapi.io/items');
    return response.data;
  } catch (e) {
    throw new Error('Ошибка загрузки одежды');
  }
});

// export const getClothes = createAsyncThunk<Clothes, Params>(`${SLICE_NAME}/fetchClothing`, async ({ id }) => {
//   try {
//     const response = await axios.get(`https://62b0b45e196a9e9870296581.mockapi.io/items/${id}`);
//     return response.data;
//   } catch (e) {
//     throw new Error('Ошибка загрузки одежды');
//   }
// });
