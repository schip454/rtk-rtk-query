import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipe } from "../../types/recipe.types";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], string>({
      query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
      providesTags: (result, error, searchTerm) => [
        {
          type: "Recipe",
          id: searchTerm,
        },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api;
