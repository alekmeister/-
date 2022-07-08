import { Clothes, State } from 'components/store/clothes/types';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'components/store/clothes/constants';
import { getBasket, getClothes } from 'components/store/clothes/actionCreators/getClothes';

const getInitialState = (): State => ({
  items: [],
  basket: [],
  total: 0,
  orders: [],
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    addInBasket(state, { payload }: PayloadAction<Clothes>) {
      state.basket.push(payload);
    },
    removeFromBasket(state, action: PayloadAction<Clothes>) {
      state.basket = state.basket.filter((el) => el.id !== action.payload.id);
    },
    updateTotalPrice(state, action: PayloadAction<number>) {
      state.total = action.payload;
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
  },
});

export const { addInBasket, removeFromBasket, updateTotalPrice } = slice.actions;
export default slice.reducer;
