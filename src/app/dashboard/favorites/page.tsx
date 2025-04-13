import FavoritePokemons from "@/pokemons/components/FavoritePokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupidatat culpa consectetur.",
};

const PokemonsPage = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
};
export default PokemonsPage;

