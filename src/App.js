import "./App.css";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import RowPost from "./Components/RowPost";
import { actions, originals, romance, comedy, horror } from "./usrls";

function App() {
  const rows = [
    { url: originals, title: "Netflix Originals" },
    { url: actions, title: "Action Movies", isSmall: true },
    { url: romance, title: "Romance Movies", isSmall: true },
    { url: comedy, title: "Comedy Movies", isSmall: true },
    { url: horror, title: "Horror Movies", isSmall: true },
  ];

  return(
    <div className="Netflix">
      <NavBar />
      <Banner />
      {rows.map((row) => (
        <RowPost url={row.url} title={row.title} isSmall={row.isSmall} />
      ))}
    </div>
  );
}

export default App;
