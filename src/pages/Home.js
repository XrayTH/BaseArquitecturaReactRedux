import CurrentUser from './../components/CurrentUser';
import UserList from './../components/UserList';
import PokemonList from './../components/PokemonList';

const Home = () => {

  return (
    <div>
      <CurrentUser/>
      <UserList/>
      <PokemonList/>
    </div>
  );
};

export default Home;

