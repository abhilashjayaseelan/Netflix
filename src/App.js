import "./App.css";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import RowPost from "./Components/RowPost";
import { actions, originals, romance, comedy, horror } from "./usrls";

function App() {
  return (
    <div className="Netflix">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={actions} title="Action Movies" isSmall />
      <RowPost url={romance} title="Romance Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
    </div>
  );
}

export default App;
