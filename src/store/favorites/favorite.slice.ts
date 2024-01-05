import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = [];

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }: PayloadAction<IRecipe>) => {
      const recipe = payload;

      const isExist = state.some((r) => r.id === recipe.id);

      if (isExist) {
        const index = state.findIndex((item) => item.id === recipe.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(recipe);
    },
  },
});

export const { actions, reducer } = favoriteSlice;
