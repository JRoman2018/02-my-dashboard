import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonsState {
  favorties: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   //   if (typeof localStorage === "undefined") return { favorties: {} };
//   const favorites = JSON.parse(
//     localStorage.getItem("favorite-pokemons") ?? "{}"
//   );
//   return favorites;
// };

const initialState: PokemonsState = {
  favorties: {},
  //   ...getInitialState(),
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorties = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;
      if (!!state.favorties[id]) {
        delete state.favorties[id];
      } else {
        state.favorties[id] = action.payload;
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorties)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavoritePokemons, toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
