"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./index";
import { setFavoritePokemons } from "./pokemons/PokemonSlice";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
