import Home from "./pages/home";
import Navbar from "./components/Navbar";
import SpeciesCard from "./components/Species-card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SpeciesCard />
      <Footer />
    </div>
  );
}

export default App;
