import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SLICE_NAME } from 'components/store/clothes/constants';
import { Clothes } from 'components/store/clothes/types';

type Page = { page: number };

export const getClothes = createAsyncThunk<Clothes[], Page>(`${SLICE_NAME}/fetchClothing`, async ({ page }) => {
  try {
    const response = await axios.get(`https://62b0b45e196a9e9870296581.mockapi.io/items/?p=${page}&l=8`);
    return response.data;
  } catch (e) {
    throw new Error('Ошибка загрузки одежды');
  }
});

// export const getOneItem = createAsyncThunk<Clothes, void>(`${SLICE_NAME}/fetchClothing`, async ({ id }: any) => {
//   try {
//     const response = await axios.get(`https://62b0b45e196a9e9870296581.mockapi.io/items/${id}`);
//     return response.data;
//   } catch (e) {
//     throw new Error('Ошибка загрузки одежды');
//   }
// });

export const getBasket = createAsyncThunk<Clothes[], void>(`basket/fetchBasket`, async () => {
  try {
    const response = await axios.get('https://62b0b45e196a9e9870296581.mockapi.io/basket');
    return response.data;
  } catch (e) {
    throw new Error('Ошибка загрузки корзины');
  }
});

export const addToBasketServer = createAsyncThunk<string, Clothes>(`basket/addToBasket`, async (itemForBasket) => {
  try {
    const response = await axios.post('https://62b0b45e196a9e9870296581.mockapi.io/basket/', { ...itemForBasket });
    return response.data;
  } catch (e) {
    throw new Error('Ошибка добавления в корзину');
  }
});

export const removeFromBasketServer = createAsyncThunk<string, string>(`basket/removeFromBasket`, async (id) => {
  try {
    const response = await axios.delete(`https://62b0b45e196a9e9870296581.mockapi.io/basket/${id}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    throw new Error('Ошибка добавления в корзину');
  }
});
