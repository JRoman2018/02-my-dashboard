import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    if (action.type === "pokemons/toggleFavorite") {
      const { pokemons } = state.getState();
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
    }
    return next(action);
  };
};
