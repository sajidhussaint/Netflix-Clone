import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import "./App.css";
import RowPost from "./components/RowPost/RowPost";
import {
  action_movies,
  originals,
  popular_series,
  popular_movies,
  fantasy_movies,
  upcoming_movies,
  series_arriving_today,
  top_rated_series,
} from "../src/constants/urls";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netfix Originals" />
      <RowPost url={fantasy_movies} title="Fantasy Movies" fantasy_movies poster />
      <RowPost url={action_movies} title="Action" isSmall action_movies />
      <RowPost url={popular_series} title="Popular Series" isSmall popular_series />
      <RowPost url={top_rated_series} title="Top Rated Series"  poster />
    </div>
  );
}

export default App;
