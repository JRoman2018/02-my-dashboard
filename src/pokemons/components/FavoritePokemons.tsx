"use client";
import React from "react";
import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorties)
  );

  return !!favoritePokemons.length ? (
    <PokemonGrid pokemons={favoritePokemons} />
  ) : (
    <NoFavorites />
  );
};

export default FavoritePokemons;

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
