import { State } from 'components/store/clothes/types';
import { REQUEST_STATUS } from 'types/RequestStatuses';
import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from 'components/store/clothes/constants';
import { getClothes } from 'components/store/clothes/actionCreators/getClothes';

const getInitialState = (): State => ({
  items: [],
  status: REQUEST_STATUS.PENDING,
});

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitialState(),
  reducers: {
    // setItem(state, action) {
    //   console.log(state);
    //   console.log(action);
    //   state.items.push({
    //     // @ts-ignore
    //     name: 'clot',
    //     // @ts-ignore
    //     size: action.payload,
    //   });
    // },
  },
  extraReducers: (builder) => {
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
  },
});

// export const { setItem } = slice.actions;
export default slice.reducer;
