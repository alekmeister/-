import { State, Clothes } from 'components/store/clothes/types';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'components/store/clothes/constants';
import { addToBasketServer, getBasket, getClothes, removeFromBasketServer } from 'components/store/clothes/actionCreators/getClothes';

const getInitialState = (): State => ({
  items: [],
  basket: [],
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    addInBasket(state, action: PayloadAction<Clothes>) {
      // @ts-ignore
      state.basket.push({ action });
    },
    removeFromBasket(state, action: PayloadAction<Clothes>) {
      state.basket = state.basket.filter((el) => el.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    // Добавление всех вещей
    builder.addCase(getClothes.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getClothes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getClothes.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });
    // Корзина
    builder.addCase(getBasket.pending, (state) => {
      state.status = REQUEST_STATUS.LOADING;
    });
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.basket = action.payload;
      state.status = REQUEST_STATUS.SUCCESS;
    });
    builder.addCase(getBasket.rejected, (state) => {
      state.status = REQUEST_STATUS.ERROR;
    });

    // builder.addCase(removeFromBasketServer.pending, (state) => {
    //   state.status = REQUEST_STATUS.LOADING;
    // });
    // builder.addCase(removeFromBasketServer.fulfilled, (state, action) => {
    //   state.basket = action.payload;
    //   state.status = REQUEST_STATUS.SUCCESS;
    // });
    // builder.addCase(removeFromBasketServer.rejected, (state) => {
    //   state.status = REQUEST_STATUS.ERROR;
    // });
  },
});

export const { addInBasket, removeFromBasket } = slice.actions;
export default slice.reducer;
