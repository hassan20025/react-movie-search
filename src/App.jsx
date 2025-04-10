import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./component/navbar.jsx";
import { MovieProvider } from "./contexts/moviecontext.jsx";
function Start({ text }) {
  return (
    <>
      <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fav" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
