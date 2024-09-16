import { useState, useEffect } from 'react';
import { getAllPokemon } from './../services/pokeService';

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const pokeList = await getAllPokemon(1025, 0);
                setPokemons(pokeList.results); // 'results' contiene la lista de Pokémon
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false);
            }
        })();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;

